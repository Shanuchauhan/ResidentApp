import React from 'react'
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "./src/screens/Home";
import NNotificationScreen from './src/screens/Notification'
import History from "./src/screens/History";
import SendRequest from "./src/screens/SendRequest";
import LogIn from "./src/screens/LogIn";
import RegisterVehicle from './src/screens/RegisterVehicle'
import {AppProvider} from './src/context/AppContext'
import NotificationScreen from './src/screens/Notification';
// const HomeStackNavigator = createStackNavigator({
//   LogIn: LogIn,
//   Home: Home
// },
//   {
//     initialRouteName: 'LogIn',
//     defaultNavigationOptions: {
//       title: 'Log In'
//     }
//   });

const navigator = createDrawerNavigator({
  // 'Log Out': {
  //   screen: LogIn
  // },
  Home: Home,
  History: History,
  "Send Request": SendRequest,
  "Register Vehicle": RegisterVehicle,
  "Log Out": LogIn
});

const HomeSwitchNavigator = createSwitchNavigator({
  LogIn: LogIn,
  Notify: NotificationScreen,
  Home: navigator
});

//export default createAppContainer(HomeSwitchNavigator);

const App = createAppContainer(HomeSwitchNavigator);

export default () => {
  return <AppProvider>
  <App />
  </AppProvider>
};
