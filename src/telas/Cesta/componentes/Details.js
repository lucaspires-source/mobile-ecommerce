import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Texto from "../../../components/Texto";

export default function Details({
  name,
  price,
  farmLogo,
  description,
  farmName,
}) {
  return (
    <View>
      <Texto style={styles.name}>{name}</Texto>
      <View style={styles.farmDetails}>
        <Image style={styles.farmLogo} source={farmLogo} />
        <Texto style={styles.farmName}>{farmName}</Texto>
      </View>

      <Texto style={styles.description}>{description}</Texto>
      <Texto style={styles.price}>{price}</Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  farmDetails: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  farmLogo: {
    width: 32,
    height: 32,
  },
  name: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2a9f85",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
    fontWeight: "bold",
  },
});
