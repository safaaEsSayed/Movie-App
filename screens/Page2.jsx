import { View, Text, StyleSheet,Button } from "react-native";
export const Page2 = ({ navigation }) => {
  return (
    <View>
      <Text style={{margin:15,textAlign:"center", color: '#660f1e', fontWeight: 'bold', fontSize: 20 }}> Edit Profile</Text>
      <View style={styles.btn}>
      <Button
          title="Profile"
          color={"#660f1e"}
        onPress={() => {
          
          navigation.navigate("Profile");
        }}
        />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
  alignSelf:"center",
    backgroundColor: "red",
    width: 200,
    color: "black",
    fontSize: 20,
    borderRadius: 24,
    overflow: "hidden",
    margin: 20,
  },
});