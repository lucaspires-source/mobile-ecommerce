import { StatusBar, SafeAreaView, View} from 'react-native';
import Cesta from './src/telas/Cesta';
import {  useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {
  let [fontsLoaded] = useFonts({
    "MontserratRegular" : Montserrat_400Regular,
    "MontserratBold" : Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <View/>;
  } else {
    return (
      <SafeAreaView>
        <StatusBar  />
        <Cesta />
      </SafeAreaView>
    );
  }

}

