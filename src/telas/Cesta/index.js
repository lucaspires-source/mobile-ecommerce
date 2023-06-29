import { StyleSheet, SafeAreaView, View } from "react-native";

import Top from "./componentes/Top";
import Details from "./componentes/Details";

export default function Cesta({top, details}) {
  return (
    <SafeAreaView>
      <Top {...top}/>
      <View style={styles.basket}>
        <Details {...details} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
