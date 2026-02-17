import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import SmallCycle from "../../assets/svg/SmallCycle";
import Road from "../../assets/svg/Road";
import Triangle from "../../assets/svg/Triangle";
import Helmet from "../../assets/svg/SmallHelmet";

type CategoryKey = "all" | "second" | "first" | "third" | "forth";

type Props = {
  selected: CategoryKey;
  onChange: (key: CategoryKey) => void;
};

const Categories = ({ selected, onChange }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => onChange("all")}
        style={[styles.buttons, { position: "absolute", bottom: 0 }, selected === "all" && styles.active]}
      >
        <Text style={{ color: "#fff", fontWeight: "500", fontSize: 16 }}>All</Text>
      </Pressable>

      <Pressable
        onPress={() => onChange("second")}
        style={[styles.buttons, { position: "absolute", bottom: 14, left: "20%" }, selected === "second" && styles.active]}
      >
        {/* <Image source={require("../../assets/images/Second.png")} contentFit="contain" style={styles.icon} /> */}
        < SmallCycle width={40} height={40} />
      </Pressable>

      <Pressable
        onPress={() => onChange("first")}
        style={[styles.buttons, { position: "absolute", bottom: 28, left: "40%" }, selected === "first" && styles.active]}
      >
        {/* <Image source={require("../../assets/images/First.png")} contentFit="contain" style={styles.icon} /> */}
        <Road width={40} height={40} />
      </Pressable>

      <Pressable
        onPress={() => onChange("third")}
        style={[styles.buttons, { position: "absolute", bottom: 42, left: "60%" }, selected === "third" && styles.active]}
      >
        {/* <Image source={require("../../assets/images/Third.png")} contentFit="contain" style={styles.icon} /> */}
        <Triangle width={40} height={40} />
      </Pressable>


      <Pressable
        onPress={() => onChange("forth")}
        style={[styles.buttons, { position: "absolute", bottom: 56, left: "80%" }, selected === "forth" && styles.active]}
      >
        <Helmet width={40} height={40} />
        {/* <Image source={require("../../assets/images/Forth.png")} contentFit="contain" style={styles.icon} /> */}
      </Pressable>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: { height: 100 },
  buttons: {
    padding: 10,
    backgroundColor: "#353F54",
    borderRadius: 16,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    transform: [{ scale: 1.08 }],
    backgroundColor: "#34C8E8",
  },
  icon: { width: 40, height: 40 },
});
