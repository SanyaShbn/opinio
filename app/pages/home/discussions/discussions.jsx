import { ScrollView, View } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, deletePosts, getPosts, getPostsStatus } from "../../../processes/store/slices/postsSlice";
import FilterBar from "../../../shared/FilterBar/FilterBar";
import Post from './../../../widgets/Posts/Post';
import ClosePollModal from "../../../widgets/modals/ClosePollModal";
import { useState } from "react";
import { useRouter } from "expo-router";

function Discussions() {
    const router = useRouter()
    const list = useSelector(getPosts)
    const dispatch = useDispatch();
    const [open,setOpen] = useState(false)
    const [id,setId] = useState("")

    const handleDelete=(id)=>{
       setOpen(true)
       setId(id)
    }

    const onConfirm=()=>{
        dispatch(deletePosts(id))
        dispatch(deletePost(id))
        onCancel()
    }

    const onCancel=()=>{
        setOpen(false)
    }

    const handleShow=(item)=>{
     
        router.navigate({pathname:"pages/organization-view/OrganizationPostsViewExpanded", params:{...item}});
    }


    return (
    
    <View style={{paddingLeft:26,paddingRight:26, paddingTop:18}} >
        <FilterBar/>
        <ClosePollModal
        
        messageText={"Вы действительно хотите удалить пост?"}
        isOpen={open}
        onConfirm={onConfirm}
        onCancel={onCancel}
        />
        <ScrollView style={{width:'100%',height:700}} >

            {
                list.map((item,index)=>(
                    <View key={index}  style={{marginBottom:15}} >
                        <Post  type="variant2" item={item} handleDelete={handleDelete} handleCommentCLick={handleShow} />
                    </View>
                   
                ))
            }

            
           

        </ScrollView>

    </View> );
}

export default Discussions;