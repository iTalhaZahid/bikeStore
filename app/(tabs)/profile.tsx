import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Bg from '@/assets/svg/bg'

const Profile = () => {
  return (
    <SafeAreaView style={styles.screen}>
      
      <Bg style={styles.bg} />

    </SafeAreaView >
  )
}

export default Profile

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#242C3B"
  },
  bg: {
    position: "absolute",
    bottom: -20,
    width: "100%",
    height: "100%"
  }, 
})