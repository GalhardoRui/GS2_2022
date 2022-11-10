import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home'
import Status from './screens/Status'

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Status" component={Status} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
