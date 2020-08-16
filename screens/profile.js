import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions,ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import theme from "../constants/Theme"
import { Block,Button } from 'galio-framework';
import Images from '../constants/Images'

const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;


export default function Profile({ navigation }) {
    return (

        <Block style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
        }} >
        <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground
                    source={require('../assets/bg5.png')}
                    style={styles.profileContainer}
                    imageStyle={styles.profileBackground}
                >
                    <Block flex style={styles.profileCardss} >
                        <Block style={{ position: 'absolute', width: width, zIndex: 5, paddingHorizontal: 20 }}>
                            <Block middle style={{ top: height * 0.15 }}>
                                <Image source={require('../assets/profile-img.jpg')} style={styles.avatar} />
                            </Block>
                    
              <Block style={{ top: height * 0.2 }}>
                <Block middle >
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Bold',
                      marginBottom: theme.SIZES.BASE / 2,
                      fontWeight: '900',
                      fontSize: 24,
                      color :"white",
                      
                    }}
                    >
                    Ro Maissa
                  </Text>

                </Block>
                <Block style={styles.info}>
                  <Block row space="around">

                    <Block middle>
                      <Text
                        style={{ marginBottom: 4, fontFamily: 'Montserrat-Bold', color :"white", fontSize:18 }}
                      >
                        223
                      </Text>
                      <Text style={{ fontFamily: 'Montserrat-Regular' , color :"white", fontSize:14}}>
                        Books
                      </Text>
                    </Block>

                    <Block middle>
                      <Text
                        style={{ marginBottom: 4, fontFamily: 'Montserrat-Bold', color :"white", fontSize:18 }}
                      >
                        26
                      </Text>
                      <Text style={{ fontFamily: 'Montserrat-Regular' , color :"white", fontSize:14}}  >
                        Friends
                        </Text>
                    </Block>
                  
                </Block>
            
                </Block>
                </Block>
                </Block>
                <Block
              middle
              row
              style={{ position: 'absolute', width: width, top: height * 0.51, zIndex: 99 }}
            >
              <Button 
               icon="gears"
               iconFamily="Font-Awesome"
               iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.275}
                onPress={() => navigation.navigate('Settings')}
              style={{ width: 125, height: 44, marginHorizontal: 5, elevation: 0,}}  color={theme.COLORS.PRIMARY} textStyle={{ fontSize: 16 }} round>
               Settings 
               
              </Button>
              
                 </Block>
                </Block>
                </ImageBackground> 
       
        
          
            <Block middle>
              <Text
                style={{
                  color: '#2c2c2c',
                  fontWeight: 'bold',
                  fontSize: 19,
                  fontFamily: 'Montserrat-Bold',
                  marginBottom: 5,
                  zIndex: 2
                }}
              >
               My books
                  </Text>
            </Block>

            <Block row style={{ paddingVertical: 14, paddingHorizontal: 15 }} space="between">
              <Text bold size={18} color="#2c2c2c" style={{ marginTop: 3,fontFamily: 'Montserrat-Bold', }}>
               Read
                  </Text>
              <Button
               
                small
                color="transparent"
                style={{width: 100, height:20 ,borderWidth:0,marginLeft:160}}
                textStyle={{ color: theme.COLORS.PRIMARY, fontSize: 14, }}
              >
                View all
                  </Button>
            </Block>

            <Block style={{ paddingBottom: 50, paddingHorizontal: 18,}}>
              <Block row space="between" style={{ flexWrap: 'wrap'}}>
                {Images.read.map((img, imgIndex) => (
                  <Image
                    source={img}
                    key={`viewed-${img}`}
                    resizeMode="cover"
                    style={styles.img}
                  />
                ))}
              </Block>
            </Block>


            <Block row style={{ paddingVertical: 14, paddingHorizontal: 15 }} space="between">
              <Text bold size={18} color="#2c2c2c" style={{ marginTop: 3,fontFamily: 'Montserrat-Bold', }}>
               To Read
                  </Text>
              <Button
               
                small
                color="transparent"
                style={{width: 100, height:20 ,borderWidth:0,marginLeft:160}}
                textStyle={{ color: theme.COLORS.PRIMARY, fontSize: 14, }}
              >
                View all
                  </Button>
            </Block>


            <Block style={{ paddingBottom: 100, paddingHorizontal: 18,}}>
              <Block row space="between" style={{ flexWrap: 'wrap'}}>
                {Images.toread.map((img, imgIndex) => (
                  <Image
                    source={img}
                    key={`viewed-${img}`}
                    resizeMode="cover"
                    style={styles.img}
                  />
                ))}
              </Block>
            </Block>
            </ScrollView>


        </Block>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        width,
        height:340,
        padding: 0,
        zIndex: 1
    },
    profileBackground: {
        width,
        height: height * 0.5
    },
 

    name:
    {
        fontSize: 15,
        fontWeight: "300",
        padding: 20,
        marginTop: 40,
        fontFamily: "Montserrat-Bold",
        textTransform: "uppercase",
        color: theme.COLORS.PRIMARY,
    },
    profileCardss: {
        position: 'relative',
        marginTop: -40
    },
    avatar: {
        width: thumbMeasure,
        height: thumbMeasure,
        borderRadius: 50,
        borderWidth: 0
    },
    nameInfo: {
        marginTop: 35,
        
      },
      img: {
        borderRadius: 2,
        marginVertical: 4,
        alignSelf: 'center',
        width: thumbMeasure,
        height: 120
      },
     
   




});
