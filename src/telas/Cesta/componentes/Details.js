import { StyleSheet, View, Image } from "react-native";
import React from "react";
import logo from "../../../../assets/logo.png";
import Texto from "../../../components/Texto";

export default function Details() {
  return (
    <View>
      <View style={styles.basket}>
        <Texto style={styles.name}>Cesta de verduras</Texto>
        <View style={styles.farmDetails}>
          <Image style={styles.farmLogo} source={logo} />
          <Texto style={styles.farmName}>Jenny Jack Farm</Texto>
        </View>

        <Texto style={styles.description}>
          Uma cesta com produtos selecionados da fazenda direto para sua cozinha
        </Texto>
        <Texto style={styles.price}>R$ 40,00</Texto>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
      },
    
      farmDetails: {
        flexDirection:'row',
        paddingVertical: 12,
      },
      farmLogo :{
        width:32,
        height:32,
      },
      name: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight:"bold",
      },
      farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft:12,
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
        fontWeight:"bold",
      },
});
