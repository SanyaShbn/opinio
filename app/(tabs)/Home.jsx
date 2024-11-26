import { BackHandler, Text, View } from "react-native";
import { Link } from "expo-router";
import Menu from "./../widgets/Home/Menu";
import SliderHeader from "./../shared/SliderHeader/SliderHeader";
import BonusPost from "./../widgets/Posts/BonusPost";
import PollsCard from "./../widgets/Cards/PollsCard";
import Post from "./../widgets/Posts/Post";
import QuestionAnswer from "../features/QuestionAnswer/QuestionAnswer";
import UserProfile from "./../features/UserProfile/UserProfile";
import Bonus from "../shared/Bonus/Bonus";
import { Box, HStack, ScrollView } from "native-base";
import { useSelector } from "react-redux";
import { getUser, getUserType } from "../processes/store/slices/userSlice";
import statusTypes from "../processes/store/constants/statusTypes";
import { usePreventRemove } from "@react-navigation/native";
import { useEffect } from "react";

function Home() {
  const role = useSelector(getUserType);

  const user = useSelector(getUser);

  usePreventRemove(true, ({ data }) => {
    // Do nothing
  });

  useEffect(() => {
    const onBackPress = () => true;

    BackHandler.addEventListener("hardwareBackPress", onBackPress);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", onBackPress);
  }, []);

  return (
    <View>
      <UserProfile type={"default"} role={role} userName={user.name} />

      <SliderHeader title={"Опросы"} pathTo={"pages/home/(polls)/all"} />

      <Menu role={role} />

      <SliderHeader title={"Мои награды"} pathTo={"pages/home/bonuses"} />
      <ScrollView horizontal>
        <Box p={2}>
          <BonusPost />
        </Box>
        <Box p={2}>
          <BonusPost />
        </Box>
      </ScrollView>
    </View>
  );
}

export default Home;
