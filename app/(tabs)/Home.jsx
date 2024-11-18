
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import Menu from './../widgets/Home/Menu';
import SliderHeader from './../shared/SliderHeader/SliderHeader';
import BonusPost from './../widgets/Posts/BonusPost';
import PollsCard from './../widgets/Cards/PollsCard';
import Post from './../widgets/Posts/Post';
import QuestionAnswer from '../features/QuestionAnswer/QuestionAnswer';

function Home() {

    return ( 

        <View>
            
                    <SliderHeader title={"Опросы"} pathTo={"pages/home/all"}/>


            <Menu/>

            <SliderHeader title={"Мои награды"} pathTo={"pages/home/bonuses"}/>
            
            {/* <BonusPost/>
            <BonusPost type={"variant2"} />
            <BonusPost type={"variant3"} /> */}
            {/* <PollsCard
            
            topic={"Медицина"}
            text={"Любой"}
            date={"15.05.2024"}
            
            /> */}

            {/* <PollsCard
            type="variant3"
            topic={"Медицина"}
            text={"Любой"}
            date={"15.05.2024"}
            
            /> */}

            {/* <Post
            

            


            /> */}


            {/* <QuestionAnswer/> */}

        </View>
        

     );
}

export default Home;