import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Texto from "../../../components/Texto";

export default function Details({
  name,
  price,
  farmLogo,
  description,
  farmName,
  button,
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
      <TouchableOpacity style={styles.button}>
        <Texto style={styles.buttonText}>{button}</Texto>
      </TouchableOpacity>
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
  button: {
    marginTop:16,
    backgroundColor:"#2a9f85",
    paddingVertical:16,
    borderRadius:6,

  },
  buttonText: {
    textAlign:"center",
    color:"#fff",
    fontWeight:"bold",
    fontSize:16,
    lineHeight:26
  },
});
