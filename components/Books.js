import React, { Component, useState } from "react";
import {
  StyleSheet, Text, View
} from "react-native";

import axios from 'axios'
import request from 'superagent';
import BookList from './BookList'

const APIKey='AIzaSyCJVDILS8nwIlnQyyiOJhDJRU2e9Lq_AfE'

export default class Books extends Component {
  
  state = {
    booksList:[[
    
    ]] 
  }
  titles = "jane austen"
  render() {
    request
    .get("https://www.googleapis.com/books/v1/volumes")
    .query({ q: this.props.title})
    .then((data) => {
        this.setState({ booksList: [data.body.items] })
        
    })
    //permet de garder les livres les plus récents (je ne l'ai pas utilisé)
    const  filteredBooks = this.state.booksList.sort((a, b) => {
      if(this.state.sort == 'Newest'){
          console.log("in newest")
          return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4));
      }
      else if(this.state.sort == 'Oldest'){
          return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4));
      }
    
    return;
  })

  //  console.log(this.state.booksList)
    return (
      <View style={styles.container}>
          <BookList books={this.state.booksList} navigation={this.props.navigation} />
      </View>  
    )

  }

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:3,
    color: "black",
  },
})