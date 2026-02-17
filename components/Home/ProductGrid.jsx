import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import ProductCardSvg from "../../assets/svg/Product";

const ProductGrid = () => {
    const DATA = [
        { id: "1", category: "Mountain", price: "$2,499", liked: true },
        { id: "2", category: "Road", price: "$1,999", liked: false },
        { id: "3", category: "Hybrid", price: "$1,299", liked: false },
        { id: "4", category: "Electric", price: "$3,499", liked: true },
    ];

    return (
        <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.container}
            renderItem={({ item }) => (
                <View style={styles.cardWrapper}>
                    <ProductCardSvg
                        category={item.category}
                        price={item.price}
                        liked={item.liked}
                        imageHref={{ uri: "https://picsum.photos/200" }}
                        // width="100%"
                        // height={"100%"}
                    />
                </View>
            )}
        />
    );
};

export default ProductGrid;
const styles = StyleSheet.create({
    container: {
        // backgroundColor:'red'
        // paddingHorizontal: 12,
    },
    row: {
        // backgroundColor:'blue',
        // justifyContent: "space-between",
        // marginBottom: 16,
    },
    cardWrapper: {
        // flex: 1,
        // marginHorizontal: 6,
        width:"100%",
        aspectRatio: 245 / 375, // keeps correct card shape
    },
});

