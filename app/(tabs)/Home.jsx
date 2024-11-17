
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import Menu from './../widgets/Home/Menu';
import SliderHeader from './../shared/SliderHeader/SliderHeader';

function Home() {

    return ( 

        <View>
            
                    <SliderHeader title={"Опросы"} pathTo={"pages/home/all"}/>


            <Menu/>


        </View>
        

     );
}

export default Home;