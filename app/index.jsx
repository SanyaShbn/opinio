// import { Redirect } from "expo-router";
// import { HOME } from "./settings/api/navigation";
import { NativeBaseProvider } from "native-base";
import PollsCompleting from "./pages/polls-completion/PollsCompleting";
// import OrganizationView from "./pages/organization-view/OrganizationView";
// import OrganizationPostsView from "./pages/organization-view/OrganizationPostsView";
// import ViewedByOthersUserProfile from "./pages/viewed-user-profile/ViewedByOthersUserProfile";
// import PollsCreationAudience from "./pages/polls-creation/PollsCreationAudience";
// import PollsCreationSettings from "./pages/polls-creation/PollsCreationSettings";

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
      questionText: "Сосал?",
      answers: ["ДА", "Да", "дА", "да"],
      requiredAnswers: 2,
    },
    {
      questionText: "Любимые цифры?",
      answers: ["1", "2", "3", "4", "5"],
      requiredAnswers: 3,
    },

  ];
  
  return (
    <NativeBaseProvider>
      {/* <Redirect href={"/" + HOME} /> */}

      {/* <PollsCreationSettings/> */}

      {/* <PollsCreationAudience/> */}

      {/* <ViewedByOthersUserProfile/> */}

      {/* <OrganizationView/> */}

      {/* <OrganizationPostsView/> */}

      <PollsCompleting questions={questions}/>

    </NativeBaseProvider>
  );
}
