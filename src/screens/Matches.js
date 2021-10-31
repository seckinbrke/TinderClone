import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import demo from '../assets/data/demo';

const MatchesScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>Messages</Text>
        <View style={styles.users}>
          {demo.slice(0, 3).map(user => (
            <View style={styles.user} key={user.id}>
              <Image source={{uri: user.images[0]}} style={styles.image} />
            </View>
          ))}
        </View>
        <Text style={styles.title}>Matches</Text>
        <FlatList
          numColumns={3}
          data={demo.slice(3)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.user} key={item.id}>
              <Image source={{uri: item.images[0]}} style={styles.image} />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 10,
  },
  users: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  user: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,

    borderWidth: 2,
    padding: 3,
    borderColor: '#F63A6E',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#F63A6E',
  },
});

export default MatchesScreen;
