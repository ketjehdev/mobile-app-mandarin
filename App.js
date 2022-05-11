import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// screen
import Home from './screens/Home';
import News from './screens/News';
import Covid from './screens/menu_home/Covid';
import Pasient from './screens/menu_home/Pasient';
import Penawar from './screens/menu_home/Penawar';

// home stack screen
const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={Home} options={{headerShown:false}} />
            <HomeStack.Screen name='Covid Information' component={Covid} options={{headerShown:true}}/>
            <HomeStack.Screen name='Pasient' component={Pasient} options={{headerShown:true}}/>
            <HomeStack.Screen name='Penawar' component={Penawar} options={{headerShown:true}}/>
        </HomeStack.Navigator>
    );
}

// news stack screen
const NewsStack = createNativeStackNavigator();
function NewsStackScreen() {
    return (
        <NewsStack.Navigator>
            <NewsStack.Screen name='News' component={News} options={{headerShown:false}} />
        </NewsStack.Navigator>
    );
}


// tab bottom
const Tab = createBottomTabNavigator();
export default function App() {
    return(
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName='Home'
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, size, color}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === "Home") {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === "News") {
                            iconName = focused ? 'newspaper' : 'newspaper-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                    tabBarActiveTintColor: '#05626F',
                    tabBarInactiveTintColor: 'grey',
                })}
            >   
                <Tab.Screen name='Home' component={HomeStackScreen} options={{headerShown:false}} />
                <Tab.Screen name='News' component={NewsStackScreen} options={{headerShown:false}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}