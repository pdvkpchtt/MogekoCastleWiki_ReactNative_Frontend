import React from "react";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ItemsHubScreen from "../Screens/ItemsHubScreen";

import HomeScreen from "../Screens/HomeScreen";
import { ArticleHubScreen } from '../Screens/SampleScreens/ArticleHubScreen'
import { CustomDrawer } from "../Components/CustomDrawer";
import { ScreenShots } from "../Screens/ScreenShots";
import { AboutApp } from "../Screens/AboutApp";

const Drawer = createDrawerNavigator()

export const DrawerNav = props => {
    return(
        <Drawer.Navigator
            useLegacyImplementation={true}  // помогает не крашиться react reanimated
            initialRouteName="Home"
            screenOptions={{
                // headerShown: false,
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#222222' },
                drawerActiveTintColor: '#dadada',
                drawerActiveBackgroundColor: '#4f0909',
                drawerInactiveBackgroundColor: '#252525',
                drawerInactiveTintColor: '#dadada'

            }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="Home" initialParams={{items: props.route.params.items}} component={HomeScreen} 
                options={{
                    title: "Home",
                }} 
            />
            <Drawer.Screen name="ItemsHubScreen" initialParams={{items: props.route.params.items}} component={ItemsHubScreen} 
                options={{
                    title: "Items",
                }} 
            />
            <Drawer.Screen name="ArticleHubScreen" initialParams={{items: props.route.params.characters}} component={ArticleHubScreen} 
                options={{
                    title: "Characters",
                }} 
            />
            <Drawer.Screen name="ScreenShots" component={ScreenShots} 
                options={{
                    title: "Gallery",
                }} 
            />
            <Drawer.Screen name="AboutApp" component={AboutApp} 
                options={{
                    title: "Info",
                }} 
            />
        </Drawer.Navigator>
    )
}