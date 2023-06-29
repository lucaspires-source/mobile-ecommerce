import {
  Image,
  StyleSheet,
  Dimensions,
  Text,
  SafeAreaView,
  View,
} from "react-native";

import top from "../../assets/topo.png";
import logo from "../../assets/logo.png";

const width = Dimensions.get("screen").width;
export default function Cesta() {
  return (
    <SafeAreaView>
      <Image source={top} style={styles.top} />
      <Text style={styles.title}>Detalhes da Cesta</Text>
      <View style={styles.basket}>
        <Text style={styles.name}>Cesta de verduras</Text>
        <View style={styles.farmDetails}>
          <Image style={styles.farmLogo} source={logo} />
          <Text style={styles.farmName}>Jenny Jack Farm</Text>
        </View>

        <Text style={styles.description}>
          Uma cesta com produtos selecionados da fazenda direto para sua cozinha
        </Text>
        <Text style={styles.price}>R$ 40,00</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: (578 / 768) * width,
  },
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
  title: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    padding: 16,
    color: "#FFF",
    fontWeight: "bold",
    lineHeight: 26,
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
    marginLeft:12
  },
  description: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
