import { HISTORY, HOME, NOTIFICATIONS, PROFILE } from "../../settings/api/navigation";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { mainColor } from "../../settings/constants/Colors";
import { styles } from "./Bottom/style";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const iconSize=20;

const iconColor = mainColor;

export const icons={
    [HOME]:<Entypo name={"home"} size={iconSize} color={iconColor}/>,
    [HISTORY]: <FontAwesome5 name={"history"} size={iconSize} color={iconColor}/>,
    [NOTIFICATIONS]:<Ionicons name={"notifications"} size={iconSize} color={iconColor} />,
    [PROFILE]:<FontAwesome name="user" size={iconSize} color={iconColor} />
}