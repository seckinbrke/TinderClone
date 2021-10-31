/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';

const ProgressStick = props => {
  const {width, activeIndex, index, totalLength} = props;
  if (totalLength !== 1) {
    return (
      <View
        style={[
          styles.card,
          {width, backgroundColor: activeIndex === index ? 'white' : 'grey'},
        ]}
      />
    );
  } else {
    return <View />;
  }
};

const styles = StyleSheet.create({
  card: {
    height: 3,
    borderRadius: 10,
    marginLeft: 1,
  },
});

export default ProgressStick;
