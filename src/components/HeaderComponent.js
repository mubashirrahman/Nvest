import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Headers = (props) => {
  return (
    <View style={styles.directionRow}>
      <Text style={styles.headerStyle}>{props.Title}</Text>
      <Text style={styles.viewallText} onPress={() => {}}>
        View all
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  directionRow: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: wp('4.5%'),
    paddingVertical: wp('4%'),
  },
  headerStyle: {
    textAlign: 'left',
    flex: 3,
    fontWeight: 'bold',
    color: '#7B7E88',
    fontSize: wp('4.5%'),
  },
  viewallText: {
    textAlign: 'right',
    flex: 1,
    color: '#3F88A5',
    alignSelf: 'center',
    fontSize: wp('3.9%'),
    fontWeight: '500',
  },
});

export default Headers;
