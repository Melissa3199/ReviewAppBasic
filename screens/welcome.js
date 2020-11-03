import React, { useRef } from 'react';
import { StyleSheet, Text, Animated, View, ImageBackground, TouchableOpacity } from 'react-native';
import globalStyle, { images, globalStyles } from "../styles/global";
import { CustomButton } from '../shared/custom-button';
import * as Animatable from 'react-native-animatable';
import * as firebase from 'firebase';


export default function Welcome({ navigation }) {
    var firebaseConfig = {
        apiKey: "AIzaSyDgBCcENTj1-ipR8m_PiGlQh_Xnk_-wwPs",
        authDomain: "booksreviewsdata.firebaseapp.com",
        databaseURL: "https://booksreviewsdata.firebaseio.com",
        projectId: "booksreviewsdata",
        storageBucket: "booksreviewsdata.appspot.com",
        messagingSenderId: "488373274032",
        appId: "1:488373274032:web:40b80569c415e5ca5e0275"
    };
    // Initialize Firebase
    try {
        firebase.initializeApp(firebaseConfig);
      
    }
    catch (error) {


        console.log(error);
    };


    const FadeInView = (props) => {
        const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

        React.useEffect(() => {
            Animated.timing(
                fadeAnim,
                {
                    toValue: 1,
                    duration: 1000,
                }
            ).start();
        }, [fadeAnim])

        return (
            <Animated.View                 // Special animatable View
                style={{
                    ...props.style,
                    opacity: fadeAnim,         // Bind opacity to animated value
                }}
            >
                {props.children}
            </Animated.View>
        );
    };
    return (

        <FadeInView style={styles.container}>
            <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={styles.titleStyle}>Books Reviews</Animatable.Text>
            <ImageBackground source={require('../assets/book.jpg')} style={styles.image}></ImageBackground>
            <Animatable.View animation="bounceInUp" iterationCount={1} direction="alternate" style={[{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-evenly', marginBottom: 20 }]}>
                <CustomButton title='Sign-In' style={{ width: 140 }} nameIcon='sign-in' sizeIcon={20} onPress={() => navigation.navigate('SignIn', { firebaseConfig })}></CustomButton>
                <CustomButton title='Subscribe' style={{ width: 140 }} nameIcon='group' sizeIcon={20} onPress={() => navigation.navigate('Subscribe', { firebaseConfig })}></CustomButton>
            </Animatable.View>
        </FadeInView>

    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'space-evenly'
    },
    text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
    },
    container: {
        paddingTop: 40,
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'white',
    },
    titleStyle: {
        marginBottom: 10,
        marginTop: 5,
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
        color: globalStyle.COLORS.PRIMARY,
    },

});





