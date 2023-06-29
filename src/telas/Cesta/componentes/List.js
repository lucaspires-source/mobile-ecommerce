import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Texto from "../../../components/Texto";

export default function List({ title, list }) {
  return (
    <View>
      <Texto style={styles.listTitle}>{title}</Texto>
      {list.map(({ name, image }) => {
        return  (
            <View style={styles.item}>
            <Image style={styles.itemImage}source={image} />
            <Texto style={styles.itemName}>{name}</Texto>
          </View>
        )
        
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  listTitle: {
    color:"#464646",
    fontWeight:"bold",
    marginTop:32,
    marginBottom:8,
    fontSize:20,
    lineHeight:32
  },
  item: {
    flexDirection:"row",
    borderBottomWidth:1,
    borderBottomColor:"#ececec",
    paddingVertical:16,
    alignItems:"center",
  },
  itemName: {
    fontSize:16,
    lineHeight:26,
    marginLeft:11,
    color:"#464646"
  },
  itemImage: {
    width:46,
    height:46
  },
});
