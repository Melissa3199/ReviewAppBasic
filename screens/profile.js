import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/global';
import theme from "../constants/Theme"
import { Block, Button } from 'galio-framework';
import Images from '../constants/Images'
import * as firebase from 'firebase';
import { Avatar, Accessory } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
//import firestore from '@react-native-firebase/firestore';
import ImageResizer from 'react-native-image-resizer';


class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.width = Dimensions.get('screen').width;
    this.height = Dimensions.get('screen').height;
    this.thumbMeasure = (this.width - 48 - 32) / 3;
    this.state = {
      isLoading: true,
      user: undefined,
      username: '',
      uid: '',
      profilepic: 'https://firebasestorage.googleapis.com/v0/b/booksreviewsdata.appspot.com/o/profilepic.png?alt=media&token=5e15b69a-00e5-46f5-b501-8849c13d22d2https://firebasestorage.googleapis.com/v0/b/booksreviewsdata.appspot.com/o/profilepic.png?alt=media&token=5e15b69a-00e5-46f5-b501-8849c13d22d2',
      nbfriends: 0,
      nbbooks: 0,
      email: '',
    }
  }

  uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase.storage().ref().child(this.state.uid.toString());
    return  ref.put(blob).then(
      firebase.storage().ref(this.state.uid.toString()).getDownloadURL().then( url=>{
        this.setState(
          {
            profilepic: url,
          }
        )
      }
      ));
  }

  async _chooseImagefromGallery() {
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      this.uploadImage(result.uri)
      
    }
  }

  async _getCurrentUser(uid) {
    await firebase.firestore()
      .collection('Users')
      .where('uid', '==', { uid })
      .onSnapshot(doc => {
        if (!doc.empty) {
          doc.forEach(snap => {
            this.setState({
              user: firebase.auth().currentUser,
              username: snap.data().username.username.toString(),
              uid: snap.data().uid.uid,
              nbfriends: snap.data().nbfriends,
              nbbooks: snap.data().nbbooks,
              email: snap.data().email.email.toString(),
              isLoading: false,
            }
            );
          });
        }
      });
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  componentDidMount() {
    this._getCurrentUser(firebase.auth().currentUser.uid);
  }
  


  _displayProfile() {
    if (this.state.user != undefined) {
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={require('../assets/bg5.png')}
            style={[styles.profileContainer, { width: this.width }]}
            imageStyle={[styles.profileBackground, {
              width: this.width,
              height: this.height * 0.5
            }]}
          >
            <Block flex style={styles.profileCardss} >
              <Block style={{ position: 'absolute', width: this.width, zIndex: 5, paddingHorizontal: 20 }}>
                <Block middle style={{ top: this.height * 0.15 }}>
                  <Avatar rounded size={110} source={{ uri: this.state.profilepic }}>
                    <Accessory size={25} onPress={() => { this._chooseImagefromGallery()}} />
                  </Avatar>
                </Block>

                <Block style={{ top: this.height * 0.2 }}>
                  <Block middle >
                    <Text
                      style={{
                        fontFamily: 'Montserrat-Bold',
                        marginBottom: theme.SIZES.BASE / 2,
                        fontWeight: '900',
                        fontSize: 24,
                        color: "white",
                      }}
                    >
                      {this.state.username}
                    </Text>
                  </Block>
                  <Block style={styles.info}>
                    <Block row space="around">
                      <Block middle>
                        <Text
                          style={{ marginBottom: 4, fontFamily: 'Montserrat-Bold', color: "white", fontSize: 18 }}
                        >
                          {this.state.nbbooks}
                        </Text>
                        <Text style={{ fontFamily: 'Montserrat-Regular', color: "white", fontSize: 14 }}>
                          Books
                    </Text>
                      </Block>
                      <Block middle>
                        <Text
                          style={{ marginBottom: 4, fontFamily: 'Montserrat-Bold', color: "white", fontSize: 18 }}
                        >
                          {this.state.nbfriends}
                        </Text>
                        <Text style={{ fontFamily: 'Montserrat-Regular', color: "white", fontSize: 14 }}  >
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
                style={{ position: 'absolute', width: this.width, top: this.height * 0.51, zIndex: 99 }}
              >
                <Button
                  icon="gears"
                  iconFamily="Font-Awesome"
                  iconColor={theme.COLORS.WHITE}
                  iconSize={theme.SIZES.BASE * 1.275}
                  onPress={() => navigation.navigate('Settings')}
                  style={{ width: 125, height: 44, marginHorizontal: 5, elevation: 0, }} color={theme.COLORS.PRIMARY} textStyle={{ fontSize: 16 }} round>
                  Settings
            </Button>
              </Block>
            </Block>
          </ImageBackground>
          <Block middle>
          </Block>
          <Block row style={{ paddingVertical: 14, paddingHorizontal: 15 }} space="between">
            <Text bold size={18} color="#2c2c2c" style={{ marginTop: 3, fontFamily: 'Montserrat-Bold', }}>
              Read
                </Text>
            <Button
              small
              color="transparent"
              style={{ width: 100, height: 20, borderWidth: 0, marginLeft: 160 }}
              textStyle={{ color: theme.COLORS.PRIMARY, fontSize: 14, }}
            >
              View all
                </Button>
          </Block>

          <Block style={{ paddingBottom: 50, paddingHorizontal: 18, }}>
            <Block row space="between" style={{ flexWrap: 'wrap' }}>
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
            <Text bold size={18} color="#2c2c2c" style={{ marginTop: 3, fontFamily: 'Montserrat-Bold', }}>
              To Read
                </Text>
            <Button

              small
              color="transparent"
              style={{ width: 100, height: 20, borderWidth: 0, marginLeft: 160 }}
              textStyle={{ color: theme.COLORS.PRIMARY, fontSize: 14, }}
            >
              View all
                </Button>
          </Block>


          <Block style={{ paddingBottom: 100, paddingHorizontal: 18, }}>
            <Block row space="between" style={{ flexWrap: 'wrap' }}>
              {Images.toread.map((img, imgIndex) => (
                <Image
                  source={img}
                  key={`viewed-${img}`}
                  resizeMode="cover"
                  style={[styles.img, { width: this.thumbMeasure },]}
                />
              ))}
            </Block>
          </Block>
        </ScrollView>



      );
    }

  }

  render() {

    return (
      <Block style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }} >
        <View>
          {this._displayLoading()}
          {this._displayProfile()}
        </View>
      </Block>

    );
  }
}


const styles = StyleSheet.create({
  profileContainer: {
    //  width: '100%',
    height: 340,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    /*  width: '100%',
      height: '80%'*/
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
    /*width: '88%',//this.thumbMeasure,
    height: '98%', //this.thumbMeasure,*/
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
    height: 120
  },






});

export default Profile;