
import { View } from 'react-native';
import { BottomNavigation } from './../processes/Navigation/Bottom/BottomNavigation';

function Home({navigation}) {

    return ( 

        <View>

            <BottomNavigation 
            
                    navigation={navigation}

            />


        </View>
        

     );
}

export default Home;