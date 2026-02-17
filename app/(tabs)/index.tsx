import React, { useMemo, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Bg from "../../assets/svg/bg";
import TopBar from "../../components/Home/TopBar";
import MainCard from "../../components/Home/MainCard";
import Categories from "../../components/Home/Categories";
import ProductListCard from '../../assets/svg/AnotherCard'


type CategoryKey = "all" | "second" | "first" | "third" | "forth";

const DATA = [
  {
    id: "1", categoryKey: "second" as const, category: "Mountain", price: "$199.99", liked: true,
    image: require("../../assets/images/FCycle.png"), name: "PEUGEOT - LR01", isLiked: true
  },
  { id: "2", categoryKey: "first" as const, category: "Road Helmet", price: "$1,999", liked: false, image: require("../../assets/images/Helmet2.png"), name: "SMITH - Trade", isLiked: false },
  { id: "3", categoryKey: "third" as const, category: "Hybrid", price: "$1,299", liked: false, image: require("../../assets/images/Helmet2.png") },
  { id: "4", categoryKey: "forth" as const, category: "Electric", price: "$3,499", liked: true, image: require("../../assets/images/FCycle2.png") },
];

export default function Index() {
  const [liked, setLiked] = React.useState(false)
  const [selected, setSelected] = useState<CategoryKey>("all");

  const filteredData = useMemo(() => {
    if (selected === "all") return DATA;
    return DATA.filter((item) => item.categoryKey === selected);
  }, [selected]);

  return (
    <SafeAreaView style={styles.screen}>
      <Bg style={styles.bg} />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <TopBar />
            <MainCard />
            <Categories selected={selected} onChange={setSelected} />
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <ProductListCard
              width={180}
              height={400}
              liked={item.isLiked}
              onToggleLike={() => setLiked(!liked)}
              productName={item.category}
              category={item.name}
              price={item.price}
              imageHref={item.image}
            />
          </View>
        )}
        extraData={selected}
      />
    </SafeAreaView>
  );
}

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
  listContent: {
    paddingHorizontal: 10
  },
  row: {
    justifyContent: 'space-between',
    
  },
  cardWrapper: {
    // flex: 1,
    // marginHorizontal: 6,
    // aspectRatio: 245 / 375,
    // backgroundColor:'red'
    position:'relative',
  },
});
