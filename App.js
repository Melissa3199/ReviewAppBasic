import React,{useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Navigator from './routes/welcomeStack';
import BookDetails from './screens/bookDetails'
import SignIn from './screens/signIn';
import Welcome from './screens/welcome';

const getFonts = ()=> Font.loadAsync({
     'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-Bold' : require('./assets/fonts/Montserrat-Bold.ttf'),
     'Montserrat-Italic' : require('./assets/fonts/Montserrat-Italic.ttf'),
      'Montserrat-SemiBold' : require('./assets/fonts/Montserrat-SemiBold.ttf'),
    });
  


export default function App() { 
  const [fontsLoaded,setFontsLoaded] = useState(false);
  if(fontsLoaded){
    return (
      <Navigator/>
    );
  }else{
    return(
      <AppLoading
      startAsync={getFonts}
      onFinish={()=>setFontsLoaded(true)}
    />
    );
  }
}

