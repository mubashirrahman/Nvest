import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {View, StyleSheet, Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const cards = [
  'https://www.53.com/content/dam/fifth-third/brand/card/cc-secured.jpg',
  'https://www.53.com/content/dam/fifth-third/brand/card/cc-truly-simple.jpg',
  'https://www.53.com/content/dam/fifth-third/brand/card/cc-trio.jpg',
  'https://www.53.com/content/dam/fifth-third/brand/card/cc-secured.jpg',
  'https://www.53.com/content/dam/fifth-third/brand/card/cc-truly-simple.jpg',
];

const CardList = () => {
  return (
    <View style={styles.cardListStyle}>
      <Carousel
        data={cards}
        firstItem={1}
        sliderWidth={wp('100%')}
        itemWidth={wp('70%')}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.slide} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardListStyle: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: wp('5%'),
  },
  slide: {
    backgroundColor: 'white',
    justifyContent: 'center',
    width: wp('70%'),
    height: wp('42.5%'),
    borderRadius: wp('4.5%'),
  },
});

export default CardList;
