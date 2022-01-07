import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import colors from "../../../colors";
import image_json from "../../../image_json.json";

const _width = Dimensions.get("screen").width;
const _height = Dimensions.get("screen").height;

const _imageSize = _width * 0.18;

const SearchResult = ({ item, navigation }) => {
  try {
    return (
      <View style={styles.searchResultContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 5 }}
            source={{
              uri: image_json[`${item.id}`],
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.bookName}>
            <Text
              numberOfLines={1}
              style={{ fontFamily: "Regular", fontSize: 15 }}
            >
              {item.title}
            </Text>
          </View>
          <View style={styles.author}>
            <Text
              numberOfLines={1}
              style={{ fontFamily: "Regular", color: colors.secondaryText }}
            >
              {item.authors[0].first_name} {item.authors[0].last_name}
            </Text>
          </View>
          <View style={styles.lengthAndReviews}>
            <Text
              style={{ fontFamily: "Regular", fontSize: 14, paddingRight: 12 }}
            >
              4.7 (142)
            </Text>
            <Text style={{ fontFamily: "Regular", fontSize: 14 }}>
              {item.totaltime}
            </Text>
          </View>
        </View>
      </View>
    );
  } catch {
    return null;
  }
};

export default SearchResult;

const styles = StyleSheet.create({
  searchResultContainer: {
    flexDirection: "row",
    padding: 15,
    marginLeft: 10,
  },
  imageContainer: {
    height: _imageSize,
    width: _imageSize,
    alignSelf: "center",
  },
  textContainer: {
    alignSelf: "center",
    alignContent: "flex-start",
    marginLeft: 12,
  },
  bookName: { width: _width * 0.6 },
  author: { marginTop: 2, width: _width * 0.6 },
  lengthAndReviews: {
    flexDirection: "row",
    marginTop: 10,
  },
});
