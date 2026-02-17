import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImageBg from '../../components/Image'

const Map = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <ImageBg/>
    </SafeAreaView>
  )
}

export default Map

const styles = StyleSheet.create({})