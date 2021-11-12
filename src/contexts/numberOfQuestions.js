import React, {useState, createContext} from 'react';

const NumberOfQuestionsContext = createContext({});

export const NumberOfQuestionsContextProvider = ({children}) => {
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <NumberOfQuestionsContext.Provider
      value={{numberOfQuestions, setNumberOfQuestions}}>
      {children}
    </NumberOfQuestionsContext.Provider>
  );
};

export default NumberOfQuestionsContext;
