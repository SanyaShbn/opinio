import { tabsStyles } from '@/app/settings/constants/TabStyle';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

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

const TabsMenuThreeItems: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={tabsStyles.container}>
      <MenuItem
        label="Данные"
        isActive={activeIndex === 0}
        onPress={() => setActiveIndex(0)}
      />
      <MenuItem
        label="Интересы"
        isActive={activeIndex === 1}
        onPress={() => setActiveIndex(1)}
      />
      <MenuItem
        label="Подписки"
        isActive={activeIndex === 2}
        onPress={() => setActiveIndex(2)}
      />
    </View>
  );
};
export default TabsMenuThreeItems;