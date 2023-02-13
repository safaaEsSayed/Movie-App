import { View, Text, Button ,StyleSheet } from "react-native";

export const HomePage = ({ navigation }) => {
  return (
    <View>
      <Text style={{margin:15,textAlign:"center", color: '#660f1e', fontWeight: 'bold', fontSize: 20 }}>Welcome Home..!</Text>
      <View style={styles.btn}>
      <Button
          title="Test Navigation"
          color={"#660f1e"}
        onPress={() => {
          
          navigation.navigate("Profile");
        }}
        />
      </View>
      <View style={styles.btn}>
      <Button
          title="Movie App"
          color={"#660f1e"}
        onPress={() => {
          
          navigation.navigate("Movies");
        }}
      />
      </View>
      <View style={styles.btn}>
      <Button
          title="Open Camera"
          color={"#660f1e"}
        onPress={() => {
          
          navigation.navigate("My Camera");
        }}
      />
      </View>
      <View style={styles.btn}>
      <Button
          title="Select Photo"
          color={"#660f1e"}
        onPress={() => {
          
          navigation.navigate("Photo");
        }}
        />
      </View>
      <View style={styles.btn}>
      <Button
          title="View Location"
          color={"#660f1e"}
        onPress={() => {
          
          navigation.navigate("My Location");
        }}
        />
      </View>
      <View style={styles.btn}>
      <Button
          title="Bar Code"
          color={"#660f1e"}
        onPress={() => {
          
          navigation.navigate("Bar Code");
        }}
        />
      </View>
      <View style={styles.btn}>
      <Button
          title="Calendar"
          color={"#660f1e"}
        onPress={() => {
          
          navigation.navigate("Calendar");
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