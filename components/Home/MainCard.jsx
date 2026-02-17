import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainCardSvg from '../../assets/svg/MainCard'
import MainCardCycle from '../../assets/svg/MainCycle'


const MainCard = () => {
    return (
        <View style={styles.container}>
            <MainCardSvg
                title="30% Off"
                imageHref={require("../../assets/images/MainCardBicycle.png")}
                // SvgContent={MainCardCycle }
            />

        </View>
    )
}

export default MainCard

const styles = StyleSheet.create({
    container: {
        width: "100%",   // set your size
        height: 250,
    },
    text: {
        position: 'absolute',
        color: '#FFFFFF',
        zIndex: 99,
        top: 20,
        left: 20,
    }
})
