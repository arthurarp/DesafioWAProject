import styled from 'styled-components/native';
import normalize from 'react-native-normalize';
import theme from '../../Theme';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

export const Icon = styled(FontAwesomeIcon).attrs(props => ({
  color: props.color ? props.color : theme.colors.black,
  size: props.size ? normalize(props.size) : normalize(20),
}))``;

export const CloseButton = styled.TouchableOpacity`
  width: ${normalize(20)}px;
  height: 100%;
  justify-content: center;
  border-radius: ${normalize(7)}px;
  align-items: center;
  margin-right: ${normalize(15)}px;
`;
