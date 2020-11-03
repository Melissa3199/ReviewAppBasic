import React,{useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Navigator from './routes/drawer';
import BookCard from './components/BookCard'
import Books from './components/Books'
import {BookProvider} from './routes/BookContext'
import NavigatorWelcome from './routes/welcomeStack';
import * as firebase from "firebase";

const getFonts = ()=> Font.loadAsync({
  'Caveat-Regular': require('./assets/fonts/Caveat-Regular.ttf'),
  'Caveat-Bold' : require('./assets/fonts/Caveat-Bold.ttf'),
  'Montserrat-Black' : require('./assets/fonts/Montserrat-Black.otf'),
  'Montserrat-Bold' : require('./assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Italic' : require('./assets/fonts/Montserrat-Italic.ttf'),
  'Montserrat-Regular' : require('./assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-SemiBold' : require('./assets/fonts/Montserrat-SemiBold.ttf'),

});



export default function App() {

const [fontsLoaded,setFontsLoaded] = useState(false);
if(fontsLoaded){
return (
  <BookProvider>
     <NavigatorWelcome/>
</BookProvider>
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