import { Redirect } from "expo-router";
import { HOME } from "./settings/api/navigation";
import { NativeBaseProvider } from "native-base";

export default function Index() {
  return (
    <NativeBaseProvider>
      <Redirect href={"/pages/getstarted/main"} />
    </NativeBaseProvider>
  );
}
