import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {View, Image, StyleSheet, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

import TabBarCustomButton from './src/components/navigation/tabs';
import theme from './src/constants/styles';
import {COLORS, icons} from './src/constants';
import Header from './src/components/navigation/header';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Matches from './src/screens/Matches';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBar = props => {
  const appTheme = useColorScheme();
  const palette = COLORS[appTheme];
  if (isIphoneX()) {
    return (
      <View>
        <View
          style={[styles.customTabView, {backgroundColor: palette.white}]}
        />
        <BottomTabBar {...props.props} />
      </View>
    );
  } else {
    return <BottomTabBar {...props.props} />;
  }
};

const Tabs = () => {
  const appTheme = useColorScheme();
  const palette = COLORS[appTheme];
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: palette.background,
          borderTopColor: 'transparent',
        },
        headerTitle: props => <Header {...props} />,
        headerStyle: {
          backgroundColor: palette.background,
          borderColor: 'transparent',
          shadowOffset: {
            height: 0,
          },
        },
        // headerTintColor: palette.textColor,
      }}
      tabBar={props => <CustomTabBar props={props} />}>
      <Tab.Screen
        name="HomeScreen1"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.more}
              resizeMode="contain"
              style={[
                styles.tabImages,
                {tintColor: focused ? palette.white : palette.gray},
              ]}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Matches"
        component={Matches}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.scan}
              resizeMode="contain"
              style={[
                styles.tabImages,
                {tintColor: focused ? palette.white : palette.gray},
              ]}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.user}
              resizeMode="contain"
              style={[
                styles.tabImages,
                {tintColor: focused ? palette.white : palette.gray},
              ]}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const appTheme = useColorScheme();
  const palette = COLORS[appTheme];
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: palette.background,
            },
          }}
          initialRouteName={'Tabs'}>
          {/* Tabs */}
          <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  tabBarOptions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    elevation: 0,
  },
  tabImages: {
    width: 25,
    height: 25,
  },
  customTabView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
  },
});

export default App;
