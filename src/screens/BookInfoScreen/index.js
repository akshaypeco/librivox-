import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Dimensions,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../../colors";
import image_json from "../../../image_json.json";

const _width = Dimensions.get("screen").width;
const _height = Dimensions.get("screen").height;
const _imageSize = _width * 0.74;

const BookInfoScreen = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.goBackContainer}
      >
        <Ionicons name="chevron-back-circle" size={35} color="black" />
      </Pressable>
      <View style={styles.imageContainer}>
        <Image
          style={{ width: "100%", height: "100%", borderRadius: 0 }}
          source={{
            uri: image_json[`${item.id}`],
          }}
        />
      </View>
      <View style={styles.bookTitleContainer}>
        <Text
          style={{
            fontFamily: "Regular",
            fontSize: 21,
            marginHorizontal: 25,
            textAlign: "center",
            lineHeight: 24,
          }}
        >
          {item.title}
        </Text>
      </View>
      <View style={styles.authorContainer}>
        <Text
          style={{
            fontFamily: "Regular",
            fontSize: 14,
            marginHorizontal: 25,
            textAlign: "center",
          }}
        >
          {item.authors[0].first_name} {item.authors[0].last_name}
        </Text>
      </View>
    </View>
  );
};

export default BookInfoScreen;

const styles = StyleSheet.create({
  goBackContainer: {
    width: _width * 0.1,
    marginTop: 50,
    marginLeft: 30,
    borderRadius: 25,
    justifyContent: "center",
  },
  imageContainer: {
    height: _imageSize,
    width: _imageSize,
    alignSelf: "center",
    marginTop: 20,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  bookTitleContainer: {
    alignSelf: "center",
    marginTop: 15,
  },
  authorContainer: {
    alignSelf: "center",
    marginTop: 3,
  },
});
