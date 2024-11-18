// import { Redirect } from "expo-router";
// import { HOME } from "./settings/api/navigation";
import { NativeBaseProvider } from "native-base";
import OrganizationView from "./pages/organization-view/OrganizationView";
// import OrganizationPostsView from "./pages/organization-view/OrganizationPostsView";
// import ViewedByOthersUserProfile from "./pages/viewed-user-profile/ViewedByOthersUserProfile";
// import PollsCreationAudience from "./pages/polls-creation/PollsCreationAudience";
// import PollsCreationSettings from "./pages/polls-creation/PollsCreationSettings";

export default function Index() {
  return (
    <NativeBaseProvider>
      <Redirect href={"/pages/getstarted/main"} />
    </NativeBaseProvider>
  );
}
