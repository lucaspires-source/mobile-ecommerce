import { StatusBar, SafeAreaView} from 'react-native';
import Cesta from './src/telas/Cesta';
import {  useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import cesta from './src/mocks/cesta'
import AppLoading from 'expo-app-loading';
export default function App() {
  let [fontsLoaded] = useFonts({
    "MontserratRegular" : Montserrat_400Regular,
    "MontserratBold" : Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <SafeAreaView>
        <StatusBar  />
        <Cesta {...cesta}/>
      </SafeAreaView>
    );
  }

}

