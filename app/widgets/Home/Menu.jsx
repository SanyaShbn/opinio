import { Text, View } from "react-native";
import { menu } from "./style";
import { Link } from "expo-router";
import statusTypes from "../../processes/store/constants/statusTypes";

function Menu({role}) {

  if(role==statusTypes.user){

    return (
      <View style={menu.container}>
      <View style={menu.column}>
        <Link href="pages/home/(polls)/popular" style={{ height: "50%" }}>
          <View style={menu.small}>
            <View>
              <Text style={menu.title}>Популярное</Text>
              <Text style={menu.text}>
                Узнайте, что сейчас обсуждают больше всего
              </Text>
            </View>
          </View>
        </Link>
        <Link
          href="pages/home/(polls)/new"
          style={{ height: "50%", flex: 1, width: "100%" }}
        >
          <View style={menu.small2}>
            <View>
              <Text style={menu.title}>Новинки</Text>
              <Text style={menu.text}>Вперед к новым открытиям!</Text>
            </View>
          </View>
        </Link>
      </View>
      
      <View style={menu.column}>
      <Link href="pages/home/(polls)/category" style={{ height: "100%", width:'100%' }}>
        <View style={menu.large}>
          <View>
            <Text style={menu.title}>Категории</Text>
            <Text style={menu.text}>Подборки по Вашим предпочтениям</Text>
          </View>
        </View>
        </Link>
      </View>
      
    </View>

    )

  }else if(role==statusTypes.org){
    return (

      <View style={menu.container}>
      <View style={menu.column}>
        <Link href="pages/home/(polls)/popular" style={{ height: "50%" }}>
          <View style={menu.small}>
            <View>
              <Text style={menu.title}>Подписчики</Text>
              <Text style={menu.text}>
              Узнайте, кто на Вас подписан
              </Text>
            </View>
          </View>
        </Link>
        <Link
          href="pages/home/discussions/discussions"
          style={{ height: "50%", flex: 1, width: "100%" }}
        >
          <View style={menu.small2}>
            <View>
              <Text style={menu.title}>Обсуждения</Text>
              <Text style={menu.text}>Вперед 
              к новым открытиям!</Text>
            </View>
          </View>
        </Link>
      </View>
      
      <View style={menu.column}>
      <Link href="pages/home/(polls)/orgPolls" style={{ height: "100%", width:'100%' }}>
        <View style={menu.large}>
          <View>
            <Text style={menu.title}>Опросы</Text>
            <Text style={menu.text}>Исследование аудитории</Text>
          </View>
        </View>
        </Link>
      </View>
      
    </View>

    )
  }


}

export default Menu;
