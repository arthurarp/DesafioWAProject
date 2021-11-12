import React, {useState, useEffect} from 'react';
import {
  Container,
  Header,
  QuestionText,
  AnswerText,
  ButtonsContainer,
  ConfirmButton,
  ConfirmButtonTitle,
  AnswerContainer,
  AnswerButton,
  InformationContainer,
  InformationItem,
  ItemText,
  Icon,
  DetailsContainer,
  ScoreContainer,
  ScoreText,
} from './styles';
import apiQuestions from '../../services/api';
import {storeReportDataOnLocalDatabase} from '../../services/storage';
import {View, ActivityIndicator} from 'react-native';
import {decode} from 'html-entities';

const Questions = ({navigation}) => {
  const [listIndex, setListIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [responseQuestions, setResponseQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [report, setReport] = useState([]);

  useEffect(() => {
    async function getQuestionsFromApi() {
      const response = await apiQuestions.get(`/api.php?amount=${3}`);
      // console.log(response.data.results);
      setResponseQuestions(response.data.results);
      setIsLoading(false);
    }
    getQuestionsFromApi();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      navigation.setOptions({
        headerTitle: `Question ${parseInt(listIndex, 10) + 1}/${
          responseQuestions.length
        }`,
      });

      setCorrectAnswer(decode(responseQuestions[listIndex].correct_answer));
      setShuffledAnswers(shuffleAnswers());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listIndex, isLoading]);

  const shuffleAnswers = () => {
    if (responseQuestions[listIndex].type === 'boolean') {
      let answers = ['True', 'False'];
      setShuffledAnswers(answers);
      return answers;
    }
    const answers = responseQuestions[listIndex].incorrect_answers;
    answers.push(responseQuestions[listIndex].correct_answer);
    const shuffled = answers.sort(() => Math.random() - 0.5);
    // console.log(shuffled);
    setShuffledAnswers(shuffled);
    return shuffled;
  };

  const handleSelectAnswer = answer => {
    console.log('selected answer: ', answer);
    console.log('correct answer: ', correctAnswer);
    setSelectedAnswer(decode(answer));
  };

  const handleNextQuestion = async () => {
    const roundReport = responseQuestions[listIndex];
    roundReport.userResponse = selectedAnswer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
    setReport([...report, roundReport]);
    if (listIndex + 1 === responseQuestions.length) {
      navigation.navigate('Results');
      console.log(report);
      await storeReportDataOnLocalDatabase(report);
      return;
    }
    setListIndex(listIndex + 1);
    setSelectedAnswer('');
  };

  return isLoading ? (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={50} />
    </View>
  ) : (
    <Container>
      <Header>
        <QuestionText>
          {decode(responseQuestions[listIndex].question)}
        </QuestionText>
      </Header>
      <DetailsContainer>
        <InformationContainer>
          <InformationItem>
            <Icon name="layer-group" />
            <ItemText>{responseQuestions[listIndex].category}</ItemText>
          </InformationItem>
          <InformationItem>
            {responseQuestions[listIndex].difficulty === 'hard' ? (
              <>
                <Icon name="star" solid={true} />
                <Icon name="star" solid={true} />
                <Icon name="star" solid={true} />
              </>
            ) : responseQuestions[listIndex].difficulty === 'medium' ? (
              <>
                <Icon name="star" solid={true} />
                <Icon name="star" solid={true} />
              </>
            ) : (
              <Icon name="star" solid={true} />
            )}
            <ItemText>{responseQuestions[listIndex].difficulty}</ItemText>
          </InformationItem>
        </InformationContainer>
        <ScoreContainer>
          <Icon name="award" color="#dbc300" size={30} />
          <ScoreText>{score}</ScoreText>
        </ScoreContainer>
      </DetailsContainer>
      <AnswerContainer>
        {shuffledAnswers?.map(answer => (
          <AnswerButton
            selected={decode(answer) === selectedAnswer ? true : false}
            onPress={() => handleSelectAnswer(decode(answer))}>
            <AnswerText>{decode(answer)}</AnswerText>
          </AnswerButton>
        ))}
      </AnswerContainer>
      <ButtonsContainer>
        <ConfirmButton
          onPress={!selectedAnswer ? () => {} : handleNextQuestion}
          color={!selectedAnswer ? '#a1a1a1' : null}>
          <ConfirmButtonTitle>
            {listIndex + 1 === responseQuestions.length
              ? 'Finish'
              : 'Next Question'}
          </ConfirmButtonTitle>
        </ConfirmButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Questions;
