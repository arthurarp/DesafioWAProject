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
} from './styles';
import apiQuestions from '../../services/api';
import {View, ActivityIndicator} from 'react-native';

const Questions = ({navigation}) => {
  const [listIndex, setListIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [responseQuestions, setResponseQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getQuestionsFromApi() {
      const response = await apiQuestions.get(`/api.php?amount=${10}`);
      console.log(response.data.results);
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

      setCorrectAnswer(responseQuestions[listIndex].correct_answer);
      setShuffledAnswers(shuffleAnswers());
      console.log(shuffleAnswers);
    }
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
    console.log(shuffled);
    setShuffledAnswers(shuffled);
    return shuffled;
  };

  const handleSelectAnswer = answer => {
    console.log(answer);
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = async () => {
    if (listIndex + 1 === responseQuestions.length) {
      navigation.navigate('Results');
      return;
    }
    setListIndex(listIndex + 1);
    console.log(shuffleAnswers);
  };

  return isLoading ? (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={50} />
    </View>
  ) : (
    <Container>
      <Header>
        <QuestionText>{responseQuestions[listIndex].question}</QuestionText>
      </Header>
      <AnswerContainer>
        {shuffledAnswers?.map(answer => (
          <AnswerButton
            selected={answer === selectedAnswer ? true : false}
            onPress={() => handleSelectAnswer(answer)}>
            <AnswerText>{answer}</AnswerText>
          </AnswerButton>
        ))}
      </AnswerContainer>
      <ButtonsContainer>
        <ConfirmButton onPress={handleNextQuestion}>
          <ConfirmButtonTitle>Next Question</ConfirmButtonTitle>
        </ConfirmButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Questions;
