/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions, useColorScheme} from 'react-native';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import Demo from '../assets/data/demo.js';
import {COLORS} from '../constants';

const Home = () => {
  const appTheme = useColorScheme();
  const palette = COLORS[appTheme];
  return (
    <View style={[styles.bg, {backgroundColor: palette.secondaryBackground}]}>
      <View style={styles.containerHome}>
        <CardStack
          loop={false}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={swiper => (this.swiper = swiper)}>
          {Demo.map((item, index) => (
            <Card
              style={{
                width: Dimensions.get('window').width - 20,
                height: Dimensions.get('window').height - 200,
                backgroundColor: palette.transparent,
                borderRadius: 8,
                shadowColor: 'rgba(0,0,0,0.5)',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.5,
              }}
              key={index}>
              <CardItem
                images={item.images}
                name={item.name}
                description={item.description}
                matches={item.match}
                actions
                onPressLeft={() => this.swiper.swipeLeft()}
                onPressRight={() => this.swiper.swipeRight()}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </View>
  );
};

export default Home;
