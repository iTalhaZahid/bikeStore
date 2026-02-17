import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'expo-image'

const Image = () => {
    return (
        <ImageBackground
            source={require("../assets/images/svg.png")}
            style={{
                backgroundColor:'red',
                width: "100%",
                height: 410
            }}
            contentFit='contain'
        >
            <Text>Image</Text>
        </ImageBackground>
    )
}

export default Image

const styles = StyleSheet.create({})