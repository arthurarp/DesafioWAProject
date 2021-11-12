import React, {useEffect, useState} from 'react';
import {
  Container,
  ReportList,
  DescriptionText,
  ButtonsContainer,
  ConfirmButton,
  ConfirmButtonTitle,
} from './styles';
import {getReportFromLocalDatabase} from '../../services/storage';

const Results = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getReportData() {
      const report = await getReportFromLocalDatabase();
      console.log(report);
    }

    getReportData();
  }, []);
  return (
    <Container>
      <ReportList>
        <DescriptionText>Teste</DescriptionText>
      </ReportList>
      <ButtonsContainer>
        <ConfirmButton onPress={() => navigation.navigate('Questions')}>
          <ConfirmButtonTitle>Resultados</ConfirmButtonTitle>
        </ConfirmButton>
        <ConfirmButton
          color="#a1a1a1"
          onPress={() => navigation.navigate('Home')}>
          <ConfirmButtonTitle>Cancel</ConfirmButtonTitle>
        </ConfirmButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Results;
