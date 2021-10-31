/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import styles from '../assets/styles';

import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Icon from './Icon';
import ProgressStick from './ProgressStick';
import LinearGradient from 'react-native-linear-gradient';

const CardItem = ({
  actions,
  description,
  images,
  matches,
  name,
  onPressLeft,
  onPressRight,
  status,
  variant,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // Custom styling
  const fullWidth = Dimensions.get('window').width;
  const imageStyle = [
    {
      flex: 1,
      borderRadius: 8,
      width: fullWidth - 20,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  ];
  const stickView = [
    {
      flexDirection: 'row',
      marginTop: 5,
      alignItems: 'center',
      justifyContent: 'center',
      width: fullWidth,
    },
  ];

  const nextPhoto = () => {
    if (activeIndex !== images.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const prevPhoto = () => {
    if (activeIndex !== 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <ImageBackground
      imageStyle={{borderRadius: 6}}
      defaultSource
      source={{uri: images[activeIndex]}}
      style={imageStyle}>
      <View style={stickView}>
        {images.map((item, index) => {
          return (
            <ProgressStick
              key={index}
              totalLength={images.length}
              activeIndex={activeIndex}
              index={index}
              width={fullWidth / images.length - 8}
            />
          );
        })}
      </View>
      <View style={styless.touchableViews}>
        <TouchableOpacity
          onPress={() => prevPhoto()}
          style={styless.verticalViews}
        />
        <TouchableOpacity
          onPress={() => nextPhoto()}
          style={styless.verticalViews}
        />
      </View>
      <View>
        <View>
          <Text style={styless.name}>{name}</Text>

          {/* DESCRIPTION */}
          {description && <Text style={styless.bio}>{description}</Text>}

          {/* STATUS */}
          {status && (
            <View style={styles.status}>
              <View
                style={status === 'Online' ? styles.online : styles.offline}
              />
              <Text style={styles.statusText}>{status}</Text>
            </View>
          )}

          {actions && (
            <LinearGradient
              colors={[
                'transparent',
                'rgba(0,0,0,0.3)',
                'rgba(0,0,0,0.5)',
                'rgba(0,0,0,0.7)',
                'rgba(0,0,0,0.9)',
              ]}
              style={[styles.actionsCardItem, {width: fullWidth - 20}]}>
              <TouchableOpacity style={styles.miniButton}>
                <Text style={styles.star}>
                  <Icon name="star" />
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => onPressLeft()}>
                <Text style={styles.like}>
                  <Icon name="like" />
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => onPressRight()}>
                <Text style={styles.dislike}>
                  <Icon name="dislike" />
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.miniButton}>
                <Text style={styles.flash}>
                  <Icon name="flash" />
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          )}
        </View>
      </View>

      {/* NAME */}
    </ImageBackground>
  );
};

const styless = StyleSheet.create({
  verticalViews: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  cardInner: {
    padding: 20,
  },
  touchableViews: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    flex: 1,
  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
  },
  bio: {
    fontSize: 17,
    color: 'white',
    fontWeight: '500',
    lineHeight: 25,
    marginHorizontal: 20,
  },
  stickView: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },
});

export default CardItem;
