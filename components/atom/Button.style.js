import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.disabled ? colors.gray : colors.lightPink};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 5px 10px;
  min-width: 60px;
`;

export const TextStyled = styled.Text`
  color: ${(props) => (props.textColor ? props.textColor : colors.white)};
  font-weight: bold;
`;
