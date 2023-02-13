import React, { useState, useEffect } from "react";
import { Button, Image, View,StyleSheet, Platform, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
export default function ImgPic() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      <Text style={{margin:15,textAlign:"center", color: '#660f1e', fontWeight: 'bold', fontSize: 20 }}>Select your profile Pic</Text>
    <View style={styles.btn}>
      <Button
        title="Select image"
        color={"#660f1e"}
        onPress={pickImage} />

      {image && (
        <Image source={{ uri: image }} style={{marginTop:8, width: 200, height: 200 }} />
      )}
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  btn: {
  alignSelf:"center",
    backgroundColor: "white",
    width: 200,
    color: "black",
    fontSize: 20,
    borderRadius: 24,
    overflow: "hidden",
    margin: 20,
  },
});