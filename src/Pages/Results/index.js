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
  ResultText,
  Icon,
} from './styles';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {getReportFromLocalDatabase} from '../../services/storage';
import {decode} from 'html-entities';
import normalize from 'react-native-normalize';

const Results = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    async function getReportData() {
      const report = await getReportFromLocalDatabase();
      setQuestions(report.questions);
      setCorrectAnswers(report.userScore);
      setDateTime(report.date);
      setIsLoading(false);
    }

    getReportData();
  }, []);

  const renderQuestion = ({item}) => {
    const rightAnswer = item.userResponse === decode(item.correct_answer);
    return (
      <QuestionContainer>
        <QuestionText>{decode(item.question)}</QuestionText>
        <AnswerText>Correct answer: {decode(item.correct_answer)}</AnswerText>
        <AnswerText>Your answer: {item.userResponse}</AnswerText>
        <ResultText color={rightAnswer ? '#00c200' : null}>
          {rightAnswer ? 'Correct!' : 'Wrong!'}
        </ResultText>
        <Icon
          name={rightAnswer ? 'check' : 'times'}
          solid={true}
          color={rightAnswer ? '#00c200' : '#F00'}
          style={{marginBottom: normalize(18)}}
        />
        <AnswerText>Other options: </AnswerText>
        <AnswerText>{item.incorrect_answers.join('; ')} </AnswerText>
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
          right
        </DetailsText>
        <DetailsText color="#a1a1a1">{dateTime}</DetailsText>
      </DetailsContainer>
      <FlatList
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}
        data={questions}
        keyExtractor={item => item.id}
        renderItem={renderQuestion}
      />
      <ButtonsContainer>
        <ConfirmButton onPress={() => navigation.navigate('Home')}>
          <ConfirmButtonTitle>Back to Home</ConfirmButtonTitle>
        </ConfirmButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Results;
