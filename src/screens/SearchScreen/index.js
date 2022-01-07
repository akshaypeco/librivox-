import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../../../colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SearchResult from "../../components/SearchResult";
import { FlatList } from "react-native-gesture-handler";

const _width = Dimensions.get("screen").width;
const _height = Dimensions.get("screen").height;

const SearchScreen = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState("");
  const [loadedSearch, setLoadedSearch] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  function searchBooks(text) {
    setSearchInput(text);

    fetch(
      `https://librivox.org/api/feed/audiobooks?title=^${text}&format=json&limit=15`
    )
      .then((response) => response.json())
      .then((json) => setLoadedSearch(json))
      .catch((error) => console.log(error))
      .finally(() => setSearchLoading(false));
  }

  return (
    <View style={styles.root}>
      <View
        style={{
          paddingBottom: 20,
          borderBottomWidth: 1.5,
          borderColor: "#eaeaea",
        }}
      >
        <View style={styles.searchContainer}>
          <TextInput
            style={{
              marginHorizontal: 15,
              paddingRight: _width * 0.26,
            }}
            autoCorrect={true}
            placeholder="Choose from 16,000+ books"
            placeholderTextColor={colors.secondaryText}
            onChangeText={(text) => searchBooks(text)}
          />
          <Feather
            style={{ alignSelf: "center", marginLeft: "auto", marginRight: 15 }}
            name="search"
            size={20}
            color={colors.secondaryText}
          />
        </View>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={loadedSearch.books}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate("BookInfo", { item })}
            >
              <SearchResult item={item} />
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
          style={styles.flatListContainer}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  root: { backgroundColor: "white" },
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
    marginTop: _height * 0.07,
    marginHorizontal: 24,
    height: 40,
  },
  flatListContainer: {
    height: _height * 0.765,
  },
  placeholderContainer: {
    position: "absolute",
    top: _height * 0.5,
    left: _width * 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
});
