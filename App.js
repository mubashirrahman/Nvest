import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from './src/components/Header';
import CardList from './src/components/CardList';
import UserVerticalList from './src/components/UsersVerticalList';
import UserListHorizontal from './src/components/UsersHorizontalList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <LinearGradient colors={['#FCFCFE', '#F6F7FB', '#EFF2F9']}>
          <Header />
          <CardList />
          <UserListHorizontal />
        </LinearGradient>
        <UserVerticalList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
