import { Stack } from "expo-router";
import { Text, View } from "react-native";
import TabLayout from "../../../(tabs)/_layout";
import { mainColor } from "../../../settings/constants/Colors";

function Category() {
    return ( <View>
        
        {/* <Stack
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: '#f4511e',
        //   },
        //   headerTintColor: mainColor,
        //   headerTitleStyle: {
            
          
        //   },
        // }}
        
        >
       
        <Stack.Screen name="/pages/home/(polls)/category" options={{ headerTitle: () => {
              <Text>Opinio</Text>;
            },}} />
      </Stack> */}
        
        
        <Text>sdvsd</Text>
        
        <TabLayout/>
        </View> 
        
        
      
      );
}

export default Category;