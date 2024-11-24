
import { NativeBaseProvider } from "native-base";

import { Redirect } from "expo-router";
import { Provider } from "react-redux";
import store from "./processes/store/store";

export default function Index() {

  const questions = [
    {
      questionText: "Какой ваш любимый цвет?",
      answers: ["Красный", "Синий", "Зеленый", "Желтый"],
      requiredAnswers: 1,
    },
    {
      questionText: "Какой ваш любимый сезон?",
      answers: ["Весна", "Лето", "Осень", "Зима"],
      requiredAnswers: 1,
    },
    {
      questionText: "Любимые цифры?",
      answers: ["1", "2", "3", "4", "5"],
      requiredAnswers: 3,
    },

  ];
  
  return (

   
 
 <NativeBaseProvider>
   <Provider store={store}>
      <Redirect href={"/pages/getstarted/main"} />
      </Provider>
    </NativeBaseProvider>


   
  );
}
