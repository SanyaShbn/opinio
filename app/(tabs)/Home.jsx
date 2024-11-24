
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import Menu from './../widgets/Home/Menu';
import SliderHeader from './../shared/SliderHeader/SliderHeader';
import BonusPost from './../widgets/Posts/BonusPost';
import PollsCard from './../widgets/Cards/PollsCard';
import Post from './../widgets/Posts/Post';
import QuestionAnswer from '../features/QuestionAnswer/QuestionAnswer';
import UserProfile from './../features/UserProfile/UserProfile';
import Bonus from '../shared/Bonus/Bonus';
import { Box, HStack, ScrollView } from 'native-base';

function Home() {

    return ( 

        <View>
            <UserProfile/>
            
                <SliderHeader title={"Опросы"} pathTo={"pages/home/(polls)/all"}/>


            <Menu/>

            <SliderHeader title={"Мои награды"} pathTo={"pages/home/bonuses"}/>
           <ScrollView horizontal >
            <Box  p={2}>
                    <BonusPost/>
            </Box>
            <Box p={2}>
                    <BonusPost/>
            </Box>
            
         

           </ScrollView>
            
       
           
 

        </View>
        

     );
}

export default Home;