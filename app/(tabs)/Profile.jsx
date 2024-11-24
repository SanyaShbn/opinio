import { View, VStack } from "native-base";
import TabsMenuThreeItems from "../shared/Tabs/TabsMenuThreeItems";
import { useState } from "react";
import Userdata from "../pages/profile/userData";
import UserInterests from "../pages/profile/userInterests";
import Subscriptions from "../pages/profile/subcriptions";


function Profile() {

    const [state,setState] = useState(0)

    const handleChangeState=(number)=>{
        setState(number)
    }

    const getContentByNumber=(number)=>{
        switch(number){
            case 0:{
                return(

                    <Userdata data={{}} />

                )
            }
            case 1:{

                return (
                        <UserInterests data={{}} />
                )

            }
            case 2:{
                return(
                    <Subscriptions/>
                )

            }
        }
    }

    return ( 
    <VStack style={{paddingLeft:30, paddingRight:30, paddingTop:14}} >

        <TabsMenuThreeItems label1={"Данные"} label2={"Интересы"} label3={"Подписки"} handleChange={handleChangeState} initValue={state}/>
        {getContentByNumber(state)}

    </VStack> );
}

export default Profile;