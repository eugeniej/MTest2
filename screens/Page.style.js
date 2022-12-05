import styled from "styled-components/native";
import { colors } from "../styles/colors";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${colors.blue};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const SafeAreaViewStyled = styled.SafeAreaView`
  flex: 1;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : 0)};
`;

export const TextStyled = styled.Text`
  color: ${colors.text};
  font-weight: bold;
  margin: 10px;
`;
