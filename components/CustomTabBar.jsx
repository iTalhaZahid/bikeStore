import { View, Platform, StyleSheet } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  // render
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        // console.log(route.name);
        const isFocused = state.index === index;
        const icons={
          'index':<FontAwesome name="bicycle" size={24} color={isFocused ? colors.primary : 'grey'} />,
          'map':<Feather name="map" size={24} color={isFocused ? colors.primary : 'grey'} />,
          'cart':<FontAwesome name="shopping-cart" size={24} color={isFocused ? colors.primary : 'grey'} />,
          'profile':<FontAwesome name="user" size={24} color={isFocused ? colors.primary : 'grey'} />,
          'docs':<AntDesign name="file-text" size={24} color={isFocused ? colors.primary : 'grey'} />,
        }
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ padding: 10, alignItems: 'center', justifyContent: 'center',gap:3 }}
          >
             {icons[route.name]}
            {/* <Text style={{ color: isFocused ? colors.primary : colors.text }}>
              {label}
            </Text> */}
          </PlatformPressable>
        );
      })}
    </View>
  )
}

export default CustomTabBar
const styles=StyleSheet.create({
  tabBar:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    height:80,
    flexDirection:'row',
    backgroundColor:'white',
    borderTopWidth:1,
    paddingHorizontal:20,
    // borderTopLeftRadius:20,
    // marginLeft:20
    justifyContent:'space-between',
    alignItems:'center',
  }
})