import { View } from "native-base";
import OrganizationCard from "../../widgets/Cards/OrganizationCard";
import { useSelector } from "react-redux";
import { getSubscriptions } from "../../processes/store/slices/subscriptionsSlice";

function Subscriptions() {
    
    const subscriptions = useSelector(getSubscriptions)

    return ( 
    <View style={{marginTop:35}} >

        {

            subscriptions.map((item,index)=>(
                <OrganizationCard type="variant2" topic={item.topic}/>
            ))

        }

     
    </View> 
    
);
}

export default Subscriptions;