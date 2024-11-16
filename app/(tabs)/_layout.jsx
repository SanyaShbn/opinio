import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from './../pages/Home';
import History from './../pages/History';
import { HOME, HISTORY } from './../settings/api/navigation';



const Stack = createBottomTabNavigator();

function Navigation() {
  return (



    <NavigationContainer>
     
        <Stack.Navigator>
          <Stack.Screen
            name={HOME}
            component={Home}
          
          />
          <Stack.Screen name={HISTORY} component={History} />
        </Stack.Navigator>
    
    </NavigationContainer>

 
    
  );
}

export default Navigation;
