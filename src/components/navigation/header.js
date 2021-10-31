import React from 'react';
import {View, StyleSheet, useColorScheme} from 'react-native';
import {COLORS} from '../../constants';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

const Header = ({title}) => {
  const appTheme = useColorScheme();
  const palette = COLORS[appTheme];

  return (
    <View>
      <Svg width={45} height={45} viewBox="0 0 30 30">
        <Path
          d="M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z"
          fill={'url(#grad)'}
        />
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="#fd267a" stopOpacity="1" />
            <Stop offset="1" stopColor="#ff6036" stopOpacity="1" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    width: '100%',
  },
});

export default Header;
