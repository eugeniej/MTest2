import React from "react";
import moment from "moment";
import "moment/locale/fr";
import { View } from "react-native";
import { Button } from "../atom/Button";
import {
  AddressLabel,
  CardContainer,
  Container,
  DateStyled,
  DayStyled,
  ImageStyled,
  LocationBlock,
  LocationText,
  RowWrapper,
  SchedulesWrapper,
  TextInformationWrapper,
  Title,
} from "./Card.style";
import { colors } from "../../styles/colors";
import { Ionicons } from "@expo/vector-icons";

export const Card = ({ title, city, postalCode, image, onPress }) => {
  const day = moment().locale("fr").format("ddd");
  const date = moment().format("DD/MM");

  return (
    <CardContainer>
      <Container onPress={onPress}>
        <RowWrapper>
          <ImageStyled
            source={{
              uri: `https://www.maiia.com/files/${image}`,
            }}
          />
          <TextInformationWrapper>
            <Title>{title}</Title>
            <AddressLabel>{`${city} ${postalCode}`}</AddressLabel>
            <LocationBlock>
              <Ionicons name="location" size={13} color={colors.mediumGray} />
              <LocationText>à 752 mètres</LocationText>
            </LocationBlock>
          </TextInformationWrapper>
        </RowWrapper>
      </Container>
      <SchedulesWrapper>
        <View>
          <DayStyled>{day}</DayStyled>
          <DateStyled>{date}</DateStyled>
        </View>
        <Button text={"9:12"} />
        <Button text={"-"} disabled />
        <Button text={"9:45"} />
      </SchedulesWrapper>
    </CardContainer>
  );
};
