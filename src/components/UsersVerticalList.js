import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {View, StyleSheet, Text, Image, FlatList} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import HeaderComponent from './HeaderComponent';

const users = [
  {
    title: 'Zeck Maroin',
    subtitle: 'To Paypal',
    illustration: 'https://s3.envato.com/files/255059287/EE4I1416%20copy.jpg',
  },
  {
    title: 'Markoni Jitka',
    subtitle: 'ToUsa Bank',
    illustration:
      'https://previews.123rf.com/images/pressmaster/pressmaster1506/pressmaster150600519/41253368-businessman-in-formalwear-using-cellphone.jpg',
  },
  {
    title: 'Nimasha Mark',
    subtitle: 'To payoneer ',
    illustration:
      'https://previews.123rf.com/images/michaeljung/michaeljung1408/michaeljung140800165/30685321-attractive-african-office-worker-using-laptop-computer.jpg',
  },
  {
    title: 'Markoni Jitka',
    subtitle: 'ToUsa Bank',
    illustration: 'https://s3.envato.com/files/255059287/EE4I1416%20copy.jpg',
  },
  {
    title: 'Zeck Maroin',
    subtitle: 'To Paypal',
    illustration: 'https://s3.envato.com/files/255059287/EE4I1416%20copy.jpg',
  },
];

const UsersList = (props) => {
  return (
    <>
      <HeaderComponent Title="Transactions" />
      <FlatList
        data={users}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        style={styles.flatList}
        renderItem={({item}) => (
          <View style={styles.directionRow}>
            <Image source={{uri: item.illustration}} style={styles.imageView} />
            <View style={styles.middlePart}>
              <Text style={styles.nameText}>{item.title}</Text>
              <Text style={styles.subText}>{item.subtitle}</Text>
            </View>
            <Text style={styles.detailtext}>Details</Text>
            <Entypo name="chevron-small-right" size={wp('4%')} color="grey" style={styles.rightArrow}/>
          </View>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  buttonPart: {
    flex: 0.7,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  rightArrow:{
    alignSelf:'center',
    marginBottom:wp('-1%'),
  },
  detailtext: {
    textAlign: 'right',
    alignSelf: 'center',
    flex: 1,
    color: '#3F88A5',
    fontSize: wp('3.5%'),
    fontWeight: '500',
  },
  directionRow: {flexDirection: 'row', paddingVertical: wp('2%'), flex: 1},
  flatList: {
    width: wp('91%'),
    alignSelf: 'center',
    borderTopWidth: 0.7,
    borderTopColor: '#CFCFCF',
  },
  imageView: {
    width: wp('11.5%'),
    height: wp('11.5%'),
    borderRadius: wp('11.5%'),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  middlePart: {justifyContent: 'center', paddingHorizontal: wp('3%'), flex: 2},
  nameText: {
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
  subText: {
    fontSize: wp('3.5%'),
    marginTop: wp('1%'),
    color: 'grey',
  },
  seperator: {
    borderBottomColor: '#CFCFCF',
    borderBottomWidth: 0.7,
  },
});

export default UsersList;
