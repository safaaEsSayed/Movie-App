import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ImgCard from "./card";

const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;

export default function Movies({navigation}) {
  const [movies, setMovies] = useState([]);
  getMovies(apiUrl);
  function getMovies(url) {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data.results);
        
      });
  }

  return (
    
    <View style={styles.container}>
      <Text style={{margin:15,textAlign:"center", color: '#660f1e', fontWeight: 'bold', fontSize: 20 }}>Movies</Text>
      <ScrollView>
        {movies.map((e, i) => {
          return (
            
            <ImgCard
              navigation={navigation}
                key={i}
                mvName={e.title}
              imgLink={imgPath + e.poster_path}
              movieId={e.id}
              movieOverview={e.overview}
              />
            
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 60,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
