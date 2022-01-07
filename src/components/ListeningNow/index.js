import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import colors from "../../../colors";

const _width = Dimensions.get("screen").width;
const _height = Dimensions.get("screen").height;

const ListeningNow = () => {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          style={{ width: "100%", height: "100%", borderRadius: 5 }}
          source={{
            uri: "https://ia802609.us.archive.org/31/items/LibrivoxCdCoverArt4/Penguin_Island_1004.jpg",
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.bookName}>
          <Text numberOfLines={2} style={{ fontSize: 20 }}>
            Barking Up The Wrong Tree
          </Text>
        </View>
        <View style={styles.author}>
          <Text numberOfLines={1} style={{ color: colors.secondaryText }}>
            Eric Barker
          </Text>
        </View>
        <View style={styles.progress}>
          <Text>84% complete</Text>
        </View>
      </View>
    </View>
  );
};

export default ListeningNow;

const styles = StyleSheet.create({
  root: { flexDirection: "row", marginTop: 10 },
  imageContainer: {
    width: _width * 0.35,
    height: _height * 0.165,
  },
  textContainer: {
    marginLeft: 10,
  },
  bookName: { marginTop: 10, marginLeft: 10, width: _width * 0.47 },
  author: { marginTop: 10, marginLeft: 10, width: _width * 0.5 },
  progress: {
    marginTop: 20,
    marginLeft: 10,
    width: 120,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.025,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});
