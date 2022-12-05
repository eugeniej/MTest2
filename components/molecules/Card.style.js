import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const CardContainer = styled.View`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
`;

export const Container = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RowWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

export const TextInformationWrapper = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 0px 10px 10px 15px;
  margin-top: 10px;
`;

export const Title = styled.Text`
  color: ${colors.primary};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const ImageStyled = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;

export const SchedulesWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 20px;
`;

export const DayStyled = styled.Text`
  color: ${colors.primary};
  font-size: 12px;
  font-weight: bold;
`;

export const DateStyled = styled.Text`
  color: ${colors.mediumGray};
  font-size: 12px;
`;

export const AddressLabel = styled.Text`
  color: ${colors.text};
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0px;
`;

export const LocationBlock = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const LocationText = styled.Text`
  color: ${colors.mediumGray};
  font-size: 10px;
  margin-left: 5px;
`;
