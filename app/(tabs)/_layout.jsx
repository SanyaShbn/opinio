import { Tabs } from "expo-router";
import TabBar from "../processes/Navigation/Bottom/TabBar";


function TabLayout() {


  const menuItems = [
    {
      path: "Home",
      label: "Главная",
      // icon: <Entypo name={"home"} size={iconSize} color={iconColor} />,
    },
    {
      path: "History",
      label: "История",
      // icon: <FontAwesome5 name={"history"} size={iconSize} color={iconColor} />,
    },
    {
      path: "Notifications",
      label: "Уведомления",
      // icon: <FontAwesome5 name={"history"} size={iconSize} color={iconColor} />,
    },
    {
      path: "Profile",
      label: "Профиль",
      // icon: <FontAwesome5 name={"history"} size={iconSize} color={iconColor} />,
    },
  ];

  return (
    <Tabs
    
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      
      }}
    >
      {menuItems.map((item, index) => (
        <Tabs.Screen
          name={item.path}
          key={index}
          options={{
            tabBarLabel: item.label,
          }}
        />
      ))}
    </Tabs>
  );
}

export default TabLayout;
