import {
  Image,
  StyleSheet,
  Dimensions,
  Text,
  SafeAreaView,
} from "react-native";

import top from "../../assets/topo.png";

const width = Dimensions.get("screen").width;
export default function Cesta() {
  return (
    <SafeAreaView>
      <Image source={top} style={styles.top} />
      <Text style={styles.title}>Cesta</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: (578 / 768) * width,
  },
  title: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    fontSize:16,
    padding:16,
    color:"#FFF",
    fontWeight:"bold",
    lineHeight:26
  
  },
});
