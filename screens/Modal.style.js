import styled from "styled-components/native";
import { colors } from "../styles/colors";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${colors.primary};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
`;

export const RowWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 30px 10px;
`;

export const BlockWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  background-color: ${colors.white};
  border-radius: 10px;
  margin: 10px 0px;
`;

export const TextInformationWrapper = styled.View`
  flex-direction: column;
  padding: 10px 10px 10px 20px;
  flex: 1;
`;

export const Title = styled.Text`
  color: ${colors.white};
  text-align: left;
  font-size: 20px;
  font-weight: bold;
`;

export const AddressLabel = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0px;
`;

export const Badge = styled.View`
  background-color: rgba(151, 165, 171, 0.5);
  border-radius: 10px;
  padding: 5px 20px;
  margin-top: 10px;
`;

export const BadgeLabel = styled.Text`
  color: ${colors.text};
  text-align: center;
  font-weight: 400;
`;

export const ImageStyled = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const InformationText = styled.Text`
  color: ${colors.mediumGray};
  text-align: left;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const BlockTitle = styled.Text`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 18px;
  margin: 15px 0px;
  align-self: flex-start;
`;

export const AccessWrapper = styled.View`
  align-self: flex-start;
  justify-content: flex-start;
`;

export const ExpertiseBlock = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 3px; ;
`;

export const PaymentBlock = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 3px; ;
`;

export const PaymentContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
