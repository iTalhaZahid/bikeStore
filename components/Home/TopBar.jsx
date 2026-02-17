import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const TopBar = () => {
    return (
        <View style={styles.row}>
            <Text style={styles.topText}>Choose Your Bike</Text>
            <Pressable
                style={{ backgroundColor: '#34C8E8', padding: 8, borderRadius: 12 }}
            >
                <Feather name="search" size={24} color="#FFFFFF" />
            </Pressable>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#242C3B", paddingHorizontal: 12 },
    bg: { position: "absolute", bottom: -20, width: "100%", height: "100%" },
    row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    topText: { color: "#FFFFFF", fontSize: 20, fontWeight: "bold" },

    gradientBox: {
        height: 40,
        minWidth: 120,
        borderRadius: 12,
        paddingHorizontal: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    text: { color: "#fff" },
});
