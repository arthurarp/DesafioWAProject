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

const Questions = ({navigation}) => {
  const [listIndex, setListIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const responseQuestions = [
    {
      category: 'Geography',
      type: 'boolean',
      difficulty: 'medium',
      question:
        'The longest place named in the United States is Lake Chargoggagoggmanchauggagoggchaubunagungamaugg, located near Webster, MA.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      category: 'General Knowledge',
      type: 'multiple',
      difficulty: 'medium',
      question:
        'In ancient Greece, if your job were a &quot;hippeus&quot; which of these would you own?',
      correct_answer: 'Horse',
      incorrect_answers: ['Weave', 'Guitar', 'Boat'],
    },
    {
      category: 'History',
      type: 'multiple',
      difficulty: 'hard',
      question:
        'Which of these positions did the astronomer and physicist Isaac Newton not hold?',
      correct_answer: 'Surveyor to the City of London',
      incorrect_answers: [
        'Professor of Mathematics',
        'Warden of the Royal Mint',
        'Member of Parliament',
      ],
    },
  ];
  useEffect(() => {
    navigation.setOptions({
      headerTitle: `Question ${parseInt(listIndex, 10) + 1}/${
        responseQuestions.length
      }`,
    });

    setCorrectAnswer(responseQuestions[listIndex].correct_answer);
    setShuffledAnswers(shuffleAnswers());
    console.log(shuffleAnswers);
  }, [listIndex]);

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

  return (
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
