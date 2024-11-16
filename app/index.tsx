import { Center, NativeBaseProvider } from "native-base";
// import TabsMenuThreeItemsPurpleVariant from "./components/Tabs/TabsMenuThreeItemsPurpleVariant";
import DefaultCard from './widgets/Cards/DefaultCard';



export default function Index() {
  return (
    <NativeBaseProvider> 
      <Center flex={1}>
        <DefaultCard/>
      </Center>
    </NativeBaseProvider>
  );
}