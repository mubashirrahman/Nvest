import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Header = () => {
  return (
    <View style={styles.headerAlign}>
      <Text style={styles.headerStyle}>Send Money</Text>
      <Image
        source={{
          uri:
            'https://www.cowrks.com/blog/wp-content/uploads/2019/10/books-break-coffee-927451-1024x683.jpg',
        }}
        style={styles.profile}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flex: 3,
    fontSize: wp('7.2%'),
    fontWeight: '600',
    textAlign: 'left',
    color: '#000',
  },
  headerAlign: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('6%'),
    justifyContent: 'center',
  },
  profile: {
    alignSelf: 'flex-end',
    width: wp('8.5%'),
    height: wp('8.5%'),
    borderRadius: wp('8.5%'),
  },
});

export default Header;
