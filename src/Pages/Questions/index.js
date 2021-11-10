import React, {useState, useEffect} from 'react';
import {
  Container,
  QuestionText,
  AnswerText,
  ButtonsContainer,
  ConfirmButton,
  ConfirmButtonTitle,
  AnswerContainer,
} from './styles';

const Questions = ({navigation}) => {
  const [listIndex, setListIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
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
  }, [listIndex]);

  const shuffleAnswers = () => {
    const answers = responseQuestions[listIndex].incorrect_answers;
    answers.push(responseQuestions[listIndex].correct_answer);
    const shuffled = answers.sort(() => Math.random() - 0.5);
    console.log(shuffled);
    setShuffledAnswers(shuffled);
  };

  const handleNextQuestion = async () => {
    if (listIndex + 1 === responseQuestions.length) {
      navigation.navigate('Results');
      return;
    }
    setListIndex(listIndex + 1);
  };

  return (
    <Container>
      <QuestionText>{responseQuestions[listIndex].question}</QuestionText>
      <AnswerContainer>
        {responseQuestions[listIndex].type === 'boolean' ? (
          <>
            <AnswerText>a) True</AnswerText>
            <AnswerText>b) False</AnswerText>
          </>
        ) : (
          shuffledAnswers?.map(answer => <AnswerText>{answer}</AnswerText>)
        )}
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
