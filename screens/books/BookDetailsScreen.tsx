import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BookDetailsScreen = (props) => {
  return (
    <View>
      <Text>THIS IS BOOK DETAILS SCREEN. ID is {props.route.params.id}</Text>
    </View>
  )
}

export default BookDetailsScreen

const styles = StyleSheet.create({})
