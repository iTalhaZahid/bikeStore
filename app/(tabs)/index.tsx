import React, { useMemo, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Bg from "../../assets/svg/bg";
import TopBar from "../../components/Home/TopBar";
import MainCard from "../../components/Home/MainCard";
import Categories from "../../components/Home/Categories";
import ProductCardSvg from "@/assets/svg/Product";
import NewSvg from "../../components/newSVG";
import ImgBg from "../../components/Image";

type CategoryKey = "all" | "second" | "first" | "third" | "forth";

const DATA = [
  {
    id: "1", categoryKey: "second" as const, category: "Mountain", price: "$2,499", liked: true,
    image: require("../../assets/images/firstcycle.png")
  },
  { id: "2", categoryKey: "first" as const, category: "Road", price: "$1,999", liked: false, image: require("../../assets/images/helmet.png") },
  { id: "3", categoryKey: "third" as const, category: "Hybrid", price: "$1,299", liked: false, image: require("../../assets/images/helmet.png") },
  { id: "4", categoryKey: "forth" as const, category: "Electric", price: "$3,499", liked: true, image: require("../../assets/images/secondcycle.png") },
];

export default function Index() {
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
        ListHeaderComponent={
          <View>
            <TopBar />
            <MainCard />
            <Categories selected={selected} onChange={setSelected} />
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            {/* <ProductCardSvg
              category={item.category}
              price={item.price}
              liked={item.liked}
              imageHref={item.image}
            /> */}
            <ImgBg/>
          </View>
        )}
        extraData={selected}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#242C3B" },
  bg: { position: "absolute", bottom: -20, width: "100%", height: "100%" },

  listContent: { paddingHorizontal: 12 },
  row: { backgroundColor:'white',justifyContent:'space-between' },

  cardWrapper: {
    flex: 1,
    // marginHorizontal: 6,
    // aspectRatio: 245 / 375,
    // backgroundColor:'red'
  },
});
