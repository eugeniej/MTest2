import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, Platform, StatusBar } from "react-native";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/molecules/Card";
import { Container, SafeAreaViewStyled, TextStyled } from "./Page.style";
import { getData, setTotalLoaded } from "../redux/action";
import { colors } from "../styles/colors";

const Page = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { data, totalLoaded } = useSelector((state) => state);

  React.useEffect(() => {
    dispatch(getData());
  }, []);

  React.useEffect(() => {
    if (data.length > 0) {
      dispatch(setTotalLoaded(data.length));
    }
  }, [data]);

  return (
    <SafeAreaViewStyled
      paddingTop={Platform.OS === "android" ? 0 : StatusBar.currentHeight}
    >
      <Container>
        {data.length > 0 ? (
          <>
            <TextStyled>{`Nombre de résultat : ${totalLoaded}`}</TextStyled>
            <FlatList
              style={{ width: "100%" }}
              initialNumToRender={10}
              data={data}
              onEndReachedThreshold={0.5}
              renderItem={({ item }) => (
                <Card
                  title={item.center.name}
                  city={item.center.publicInformation.address.city}
                  image={
                    item.center.publicInformation.mainPicture?.thumbnailS3Id
                  }
                  postalCode={item.center.publicInformation.address.zipCode}
                  onPress={() => navigation.navigate("Modal", { item })}
                />
              )}
            />
          </>
        ) : (
          <ActivityIndicator color={colors.secondary} />
        )}
      </Container>
    </SafeAreaViewStyled>
  );
};

export default Page;
