import React, { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { tabsStyles } from "../../settings/constants/TabStyle"

const MenuItem = ({ label, isActive, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[tabsStyles.menuItem, isActive && tabsStyles.activeItem]}
    >
      <Text style={[tabsStyles.text, isActive && tabsStyles.activeText]}>
        {label}
      </Text>
      {isActive && <View style={tabsStyles.underline} />}
    </TouchableOpacity>
  )
}

const TabsMenuTwoItems = ({label1, label2}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <View style={tabsStyles.container}>
      <MenuItem
        label={label1}
        isActive={activeIndex === 0}
        onPress={() => setActiveIndex(0)}
      />
      <MenuItem
        label={label2}
        isActive={activeIndex === 1}
        onPress={() => setActiveIndex(1)}
      />
    </View>
  )
}
export default TabsMenuTwoItems