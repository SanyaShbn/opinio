import { Text, View } from "react-native";
import { header } from "./style";
import { Link } from "expo-router";

function SliderHeader({title, pathTo}) {
    return ( 

        <View style={header.container} >

                <Text style={header.title} >{title}</Text>

                <Link
          href={pathTo}
          
        >
                <Text style={header.link} >все</Text>
            </Link>

        </View>

     );
}

export default SliderHeader;