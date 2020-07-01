import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen47401Navigator from '../features/BlankScreen47401/navigator';
import CalendarView7400Navigator from '../features/CalendarView7400/navigator';
import EmailAuth7399Navigator from '../features/EmailAuth7399/navigator';
import Messaging7398Navigator from '../features/Messaging7398/navigator';
import Messaging7394Navigator from '../features/Messaging7394/navigator';
import EmailAuth7393Navigator from '../features/EmailAuth7393/navigator';
import CalendarView7392Navigator from '../features/CalendarView7392/navigator';
import BlankScreen47391Navigator from '../features/BlankScreen47391/navigator';
import BlankScreen57390Navigator from '../features/BlankScreen57390/navigator';
import BlankScreen57385Navigator from '../features/BlankScreen57385/navigator';
import BlankScreen47384Navigator from '../features/BlankScreen47384/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen47401: { screen: BlankScreen47401Navigator },
CalendarView7400: { screen: CalendarView7400Navigator },
EmailAuth7399: { screen: EmailAuth7399Navigator },
Messaging7398: { screen: Messaging7398Navigator },
Messaging7394: { screen: Messaging7394Navigator },
EmailAuth7393: { screen: EmailAuth7393Navigator },
CalendarView7392: { screen: CalendarView7392Navigator },
BlankScreen47391: { screen: BlankScreen47391Navigator },
BlankScreen57390: { screen: BlankScreen57390Navigator },
BlankScreen57385: { screen: BlankScreen57385Navigator },
BlankScreen47384: { screen: BlankScreen47384Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
