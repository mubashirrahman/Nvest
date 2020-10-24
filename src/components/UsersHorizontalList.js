import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import HeaderComponent from './HeaderComponent';

const users = [
  {
    title: 'Manaurul haque',
    illustration:
      'https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg',
  },
  {
    title: 'Zeikan Peroman',
    illustration:
      'https://quietly-image-uploads.s3.amazonaws.com/employeesatisfactionofficemanagers_1280px_8c91f574597044ab8c87916f8cca28fd.jpeg',
  },
  {
    title: 'Alabdheen Isam',
    illustration: 'https://s3.envato.com/files/255059287/EE4I1416%20copy.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    illustration:
      'https://previews.123rf.com/images/pressmaster/pressmaster1506/pressmaster150600519/41253368-businessman-in-formalwear-using-cellphone.jpg',
  },
];

const UsersList = (props) => {
  return (
    <>
      <HeaderComponent Title="Sent To" />
      <FlatList
        data={users}
        horizontal
        style={styles.flatList}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View style={styles.directionRow}>
            {index !== 0 ? null : (
              <View style={styles.addUserCard}>
                <LinearGradient
                  colors={['#30CDC4', '#30CDC2', '#1DB7CB', '#0AA5D3']}
                  style={styles.addButtonView}>
                  {/* <Icon name="plus" style={styles.plusIcon} size={wp('5%')} /> */}
                </LinearGradient>
                <Text style={styles.sendMoney}>Send Money</Text>
              </View>
            )}
            <LinearGradient
              colors={['#30CDC4', '#30CDC2', '#1DB7CB', '#0AA5D3']}
              style={styles.userCard}>
              <Image
                source={{uri: item.illustration}}
                style={styles.addButtonView}
              />
              <Text style={[styles.sendMoney, {color: 'white'}]}>
                {item.title}
              </Text>
            </LinearGradient>
          </View>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  addButtonView: {
    width: wp('13%'),
    height: wp('13%'),
    borderRadius: wp('13%'),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  addUserCard: {
    padding: wp('2%'),
    margin: wp('2%'),
    borderRadius: wp('3%'),
    width: wp('35%'),
    height: wp('40%'),
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#1DB7CB',
    justifyContent: 'center',
  },
  directionRow: {flexDirection: 'row'},
  flatList: {paddingLeft: wp('2%'), paddingBottom: wp('4%')},
  plusIcon: {
    alignSelf: 'center',
  },
  sendMoney: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: wp('3.9%'),
    paddingHorizontal: wp('1%'),
    paddingTop: wp('4%'),
  },
  userCard: {
    padding: wp('2%'),
    margin: wp('2%'),
    borderRadius: wp('3%'),
    width: wp('35%'),
    height: wp('40%'),
    justifyContent: 'center',
  },
});

export default UsersList;
