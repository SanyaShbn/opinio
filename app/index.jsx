
import { NativeBaseProvider } from "native-base";
import PollsCreationStatistics from "./pages/polls-creation/PollsCreationStatistics";
// import { Redirect } from "expo-router";
// import { Provider } from "react-redux";
// import store from "./processes/store/store";

export default function Index() {


  
  return (

   
 
 <NativeBaseProvider>



   {/* <Provider store={store}>
      <Redirect href={"/pages/getstarted/main"} />
      </Provider> */}

      <PollsCreationStatistics/>

    </NativeBaseProvider>


   
  );
}
