import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as rssParser from "react-native-rss-parser";
import colors from "../../../colors";
import ListeningNow from "../../components/ListeningNow";
import PopularNow from "../../components/PopularNow";
import RecentlyCompleted from "../../components/RecentlyCompleted";

const _width = Dimensions.get("screen").width;
const _height = Dimensions.get("screen").height;

const HomeScreen = () => {
  fetch("https://librivox.org/rss/999")
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      // console.log(rss);
      // console.log("Title");
      console.log(rss.items[47].title);
      // console.log("Description");
      // console.log(rss.description);
      // console.log("Duration");
      // console.log(rss.items[47].itunes.duration);
      // console.log("Audio");
      // console.log(rss.items[47].enclosures[0].url);
      // console.log("end of the call.");
    });
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.topSection}>
        <Text style={styles.greeting}>Welcome, Akshay</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={{
              marginHorizontal: 15,
              paddingRight: _width * 0.32,
            }}
            autoCorrect={true}
            placeholder="Search for your next book"
            placeholderTextColor={colors.secondaryText}
          />
          <MaterialIcons
            style={{ alignSelf: "center", marginLeft: "auto", marginRight: 15 }}
            name="navigate-next"
            size={24}
            color={colors.secondaryText}
          />
        </View>
        <View style={styles.continueListeningContainer}>
          <Text style={{ color: colors.secondaryText }}>
            Continue listening
          </Text>
          <ListeningNow />
        </View>
      </View>
      <View style={styles.bottomSection}>
        {/* <View style={styles.popularBooksContainer}>
          <Text
            style={{
              color: colors.primaryText,
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Popular now
          </Text>
          <PopularNow />
        </View> */}
        <View style={styles.genresContainer}>
          <Text
            style={{
              color: colors.primaryText,
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Genres
          </Text>
        </View>
        <View style={styles.recentlyCompletedContainer}>
          <Text
            style={{
              color: colors.primaryText,
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Recently completed
          </Text>
          <RecentlyCompleted />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: { backgroundColor: "white" },
  topSection: {
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.primaryBackground,
  },
  greeting: {
    fontSize: 17,
    alignSelf: "flex-start",
    marginLeft: 25,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    marginTop: 15,
    marginHorizontal: 24,
    height: 40,
  },
  continueListeningContainer: { marginLeft: 25, marginTop: 25 },
  popularBooksContainer: { marginLeft: 25, marginTop: 25 },
  genresContainer: { marginLeft: 25, marginTop: 25 },
  recentlyCompletedContainer: { marginLeft: 25, marginTop: 25 },
  bottomSection: { paddingBottom: 210 },
});
