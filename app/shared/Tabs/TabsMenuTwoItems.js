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

const TabsMenuTwoItems = ({label1, label2, handleOnChange,initValue}) => {
  // const [activeIndex, setActiveIndex] = useState(initValue)

  return (
    <View style={tabsStyles.container}>
      <MenuItem
        label={label1}
        isActive={initValue === 0}
        onPress={() => { handleOnChange(0)}}
      />
      <MenuItem
        label={label2}
        isActive={initValue === 1}
        onPress={() => {handleOnChange(1)}}
      />
    </View>
  )
}
export default TabsMenuTwoItems
