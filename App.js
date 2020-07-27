import React,{useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Navigator from './routes/drawer';

const getFonts = ()=> Font.loadAsync({
      'Caveat-Regular': require('./assets/fonts/Caveat-Regular.ttf'),
      'Caveat-Bold' : require('./assets/fonts/Caveat-Bold.ttf'),
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

