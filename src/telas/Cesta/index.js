import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";

import Top from "./componentes/Top";
import Details from "./componentes/Details";
import List from "./componentes/List";

export default function Cesta({top, details,  items}) {
  return (
    <ScrollView>
      <Top {...top}/>
      <View style={styles.basket}>
        <Details {...details} />
        <List {...items} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
