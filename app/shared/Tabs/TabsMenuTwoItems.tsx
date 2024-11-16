import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { tabsStyles } from './../../settings/constants/TabStyle';


interface MenuItemProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, isActive, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[tabsStyles.menuItem, isActive && tabsStyles.activeItem]}>
      <Text style={[tabsStyles.text, isActive && tabsStyles.activeText]}>{label}</Text>
      {isActive && <View style={tabsStyles.underline} />}
    </TouchableOpacity>
  );
};

const TabsMenuTwoItems: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={tabsStyles.container}>
      <MenuItem
        label="Опросы"
        isActive={activeIndex === 0}
        onPress={() => setActiveIndex(0)}
      />
      <MenuItem
        label="Организации"
        isActive={activeIndex === 1}
        onPress={() => setActiveIndex(1)}
      />
    </View>
  );
};
export default TabsMenuTwoItems;