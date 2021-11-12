import React, {useEffect, useState} from 'react';
import {
  Container,
  Header,
  HeaderText,
  ButtonsContainer,
  ConfirmButton,
  ConfirmButtonTitle,
  QuestionContainer,
  QuestionText,
  DetailsContainer,
  DetailsText,
  AnswerText,
} from './styles';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {getReportFromLocalDatabase} from '../../services/storage';
import {decode} from 'html-entities';

const Results = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  useEffect(() => {
    async function getReportData() {
      const report = await getReportFromLocalDatabase();
      console.log(report);
      setQuestions(report.questions);
      setCorrectAnswers(report.userScore);
      setIsLoading(false);
    }

    getReportData();
  }, []);

  const renderQuestion = ({item}) => {
    return (
      <QuestionContainer>
        <QuestionText>{decode(item.question)}</QuestionText>
        <AnswerText>Correct answer: {item.correct_answer}</AnswerText>
        <AnswerText>Your answer: {item.userResponse}</AnswerText>
      </QuestionContainer>
    );
  };
  return isLoading ? (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={50} />
    </View>
  ) : (
    <Container>
      <Header>
        <HeaderText>Game Report</HeaderText>
      </Header>
      <DetailsContainer>
        <DetailsText>
          You answered {correctAnswers} out of {questions.length} questions
        </DetailsText>
      </DetailsContainer>
      <FlatList
        style={{flex: 1}}
        data={questions}
        keyExtractor={item => item.id}
        renderItem={renderQuestion}
      />
      <ButtonsContainer>
        <ConfirmButton onPress={() => navigation.navigate('Home')}>
          <ConfirmButtonTitle>Return to Home</ConfirmButtonTitle>
        </ConfirmButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Results;
