import { Avatar } from "@react-native-material/core";
import { Image, TouchableOpacity, Text, View, StyleSheet } from "react-native";
export default function ImgCard({
 
  navigation,
  movieId,
  imgLink,
  mvName,
  movieOverview }) {


  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("MovieDetails", {
          movieId,
          imgLink,
          mvName,
          movieOverview,
        });
      }}
    >
    <View style={styles.container}>
      <Avatar
        style={{ marginTop: 8 }}
        image={{
          uri: imgLink,
        }}
      ></Avatar>
      <Text style={{ margin: 18 }}>{mvName} </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
