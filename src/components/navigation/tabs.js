/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, StyleSheet, useColorScheme} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from '../../constants';

const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
  const appTheme = useColorScheme();
  const palette = COLORS[appTheme];
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.svgView} />
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={palette.background}
            />
          </Svg>
          <View style={styles.svgView} />
        </View>
        <TouchableOpacity
          style={[
            styles.activeButton,
            {
              ...styles.shadow,
              backgroundColor: palette.primary,
              shadowColor: palette.primary,
            },
          ]}
          onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={[styles.deactiveButton, {backgroundColor: palette.background}]}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
  },
  svgView: {
    flex: 1,
  },
  activeButton: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  deactiveButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default TabBarCustomButton;
