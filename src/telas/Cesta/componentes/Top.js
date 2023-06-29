import { StyleSheet, View,Image,   Dimensions, } from 'react-native'
import React from 'react'

import top from "../../../../assets/topo.png";
import Texto from '../../../components/Texto';
const width = Dimensions.get("screen").width;
export default function Top({title}){
  return (
    <View>
      <Image source={top} style={styles.topImage} />
      <Texto style={styles.topTitle}>{title}</Texto>
    </View>
  )
}



const styles = StyleSheet.create({

    topImage: {
        width: "100%",
        height: (578 / 768) * width,
      },
      topTitle: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        fontSize: 16,
        padding: 16,
        color: "#FFF",
        lineHeight: 26,
        fontWeight:"bold",
      },
})