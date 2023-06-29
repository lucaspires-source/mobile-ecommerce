import {
  Image,
  StyleSheet,
  SafeAreaView,
  View,
} from "react-native";

import Top from "./componentes/Top";
import Details from "./componentes/Details";

export default function Cesta() {


  return (
    <SafeAreaView>
      <Top />
      <Details />
    </SafeAreaView>
  );
}

