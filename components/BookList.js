import React, { Component } from 'react';
import BookCard from './BookCard';
import {
    StyleSheet, Text, View,ScrollView
  } from "react-native";

const BookList = (props) => {
    return (
      <ScrollView style={styles.container}>
        {
          props.books[0].map((book) => {
            return <BookCard key={book.id} info={book} navigation={props.navigation} />
          })
        }
      </ScrollView>
      
    );
}

export default BookList;


const styles = StyleSheet.create({
    container: {
      flex:1,
      color: "black",
     
    },
  })