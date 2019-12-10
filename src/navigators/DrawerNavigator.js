import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { ProfileScreen, MessageScreen, ActivityScreen, ListScreen, ReportScreen, StatisticScreen, SignOutScreen } from '../screens';

const DrawerNavigator = createDrawerNavigator({
  Profile : ProfileScreen,
  Message : MessageScreen,
  Acticity : ActivityScreen,
  List : ListScreen,
  Report : ReportScreen,
  Statistic : StatisticScreen,
  SignOut : SignOutScreen
});

export default createAppContainer(DrawerNavigator);