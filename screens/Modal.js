import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Button } from "../components/atom/Button";
import { colors } from "../styles/colors";
import { isOpen } from "../utils/isOpen";
import {
  AccessWrapper,
  AddressLabel,
  Badge,
  BadgeLabel,
  BlockTitle,
  BlockWrapper,
  Container,
  ExpertiseBlock,
  ImageStyled,
  InformationText,
  PaymentBlock,
  PaymentContainer,
  RowWrapper,
  TextInformationWrapper,
  Title,
} from "./Modal.style";

const Modal = ({ route }) => {
  const [showMore, setShowMore] = useState(false);
  const { item } = route.params;

  const open = isOpen(
    item.publicInformation.officeInformation.openingSchedules
  );

  console.log("open", open);
  return (
    <Container>
      <ScrollView>
        <RowWrapper>
          <ImageStyled
            source={{
              uri: `https://www.maiia.com/files/${item.center.publicInformation.mainPicture?.thumbnailS3Id}`,
            }}
          />
          <TextInformationWrapper>
            <Title>{item.center.name}</Title>
            <AddressLabel>
              {item.publicInformation.address.fullAddress}
            </AddressLabel>
            <Badge>
              <BadgeLabel>{open ? "OUVERT" : "FERMÉ"}</BadgeLabel>
            </Badge>
          </TextInformationWrapper>
        </RowWrapper>

        <BlockWrapper>
          <BlockTitle>Informations</BlockTitle>
          <InformationText>
            {showMore
              ? item.publicInformation.officeDescription
              : `${item.publicInformation.officeDescription.substring(
                  0,
                  100
                )} ...`}
          </InformationText>
          <Button
            text={showMore ? "Réduire" : "En savoir plus"}
            onPress={() => setShowMore(!showMore)}
          />
        </BlockWrapper>

        <BlockWrapper>
          <BlockTitle>Expertise</BlockTitle>
          {item.publicInformation.expertises.map((expertise) => (
            <ExpertiseBlock key={expertise.id}>
              <Button textColor={colors.text} text={expertise.name} disabled />
            </ExpertiseBlock>
          ))}
        </BlockWrapper>

        <BlockWrapper>
          <BlockTitle>Accès</BlockTitle>
          <AccessWrapper>
            <InformationText>
              {item.publicInformation.address.fullAddress}
            </InformationText>
            <InformationText>
              {
                item.publicInformation.officeInformation.officeAccessibility
                  .meansOfTransport
              }
            </InformationText>
          </AccessWrapper>
        </BlockWrapper>

        <BlockWrapper>
          <BlockTitle>Moyens de paiement</BlockTitle>
          <PaymentContainer>
            {item.publicInformation.paymentMethods.map((paymentMethod, key) => (
              <PaymentBlock key={key}>
                <Button textColor={colors.text} text={paymentMethod} disabled />
              </PaymentBlock>
            ))}
          </PaymentContainer>
        </BlockWrapper>
      </ScrollView>
    </Container>
  );
};

export default Modal;
