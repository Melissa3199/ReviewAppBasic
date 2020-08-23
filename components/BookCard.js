import React from "react";
import {
  StyleSheet, View, Text, Image,TouchableOpacity, TouchableWithoutFeedback
} from "react-native";
import { Button } from 'galio-framework';
import theme from "../constants/Theme"

const BookCard = (props) => {
  const { volumeInfo } = props.info;
  const { title, authors, subtitle, publishedDate } = props.info.volumeInfo;
  const publishYear = volumeInfo.hasOwnProperty('publishedDate') == false ? volumeInfo['publishedDate'] = "0000" : volumeInfo.publishedDate;
  const thumbNail = volumeInfo.hasOwnProperty('imageLinks') == false ? "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337" : volumeInfo.imageLinks.thumbnail;

  let Image_URL ={ uri: thumbNail};
  return (
    <TouchableWithoutFeedback
    onPress={() => props.navigation.navigate('BookDetails',props.info.volumeInfo,thumbNail)} >
    <View style={{ flex: 1, paddingTop: 10,paddingBottom:10 }} >
    <View style={{ flex: 1, flexDirection: "row",borderWidth:1,borderColor:"transparent" }}>
    <Image source={Image_URL} style={styles.img} />
      <View style={styles.cont} >
        <Text style={styles.title} > {title}</Text>
        <Text style={styles.author}> By {authors}</Text>
        <Button style={styles.button} color={theme.COLORS.PRIMARY} > To Read</Button>
      </View>
    </View>
    
    </View>
    </TouchableWithoutFeedback>


  );
}

export default BookCard;
const styles = StyleSheet.create({

  cont: {
    flexDirection: "column",
    marginLeft: 10,
    marginTop:10,
  },
  img: {
    borderRadius: 2,
    marginVertical: 0,
    alignSelf: 'center',
    width: 100,
    height: 140,
    marginLeft: 2
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    marginBottom: 7
  },
  author: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    marginBottom: 7
  },
  button: {
    color: theme.COLORS.PRIMARY,
    width: 140,
    fontSize: 14,

  }

})

/*
 <View style={styles.container}>
        <Image src={thumbNail} alt="" />

        <Text>{title}</Text>
        <Text>Author: {authors}</Text>
        <Text>Published: {publishYear == "0000" ? "Not available" : publishYear.substring(0, 4)}</Text>

      </View>



      <View style={{ flexDirection: "row" }} >
        <Image source={require('../assets/read1.jpg')} style={styles.img} />
        <View style={styles.cont} >
          <Text style={styles.title} > Six of crows</Text>
          <Text style={styles.author}> By Leigh Bardugo</Text>
          <Button style={styles.button} color={theme.COLORS.PRIMARY} > To Read</Button>

        </View>
      */