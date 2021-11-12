import React from 'react';
import Routes from './Routes';
import {NumberOfQuestionsContextProvider} from './contexts/numberOfQuestions';

const App = () => {
  return (
    <NumberOfQuestionsContextProvider>
      <Routes />
    </NumberOfQuestionsContextProvider>
  );
};

export default App;
