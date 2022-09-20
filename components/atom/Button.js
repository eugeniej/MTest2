import React from "react";
import { ActivityIndicator } from "react-native";
import { colors } from "../../styles/colors";
import { TextStyled, ButtonWrapper } from "./Button.style";

export const Button = ({ text, disabled, onPress, loading, textColor }) => {
  return (
    <ButtonWrapper disabled={disabled} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        text && <TextStyled textColor={textColor}>{text}</TextStyled>
      )}
    </ButtonWrapper>
  );
};
