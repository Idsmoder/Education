import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native"
import { api } from "../../../api/axios"

const ItemCategory = () =>{
    const {id} = useLocalSearchParams()
    const [items,setItems] = useState([])
    useEffect(()=>{
        api.get(`/nurse/course/list/category/${id}`)
        .then((response) => {
            setItems(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
    },[])
    console.log(items,"items");
    return (
        <View className={'flex bg-white w-full h-full'}>
            <FlatList
                
            />
        </View>
        
    )
}
export default ItemCategory