import { tabsStyles } from "../../settings/constants/TabStyle"
import React, { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"

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

const TabsMenuThreeItems = ({label1, label2, label3,initValue,handleChange}) => {
  // const [activeIndex, setActiveIndex] = useState(0)

  return (
    <View style={tabsStyles.container}>
      <MenuItem
        label={label1}
        isActive={initValue === 0}
        onPress={() => handleChange(0)}
      />
      <MenuItem
        label={label2}
        isActive={initValue === 1}
        onPress={() => handleChange(1)}
      />
      <MenuItem
        label={label3}
        isActive={initValue === 2}
        onPress={() => handleChange(2)}
      />
    </View>
  )
}
export default TabsMenuThreeItems
