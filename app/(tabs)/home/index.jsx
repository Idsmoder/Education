import {ActivityIndicator, FlatList, Text, View} from "react-native";
import {useEffect, useState} from "react";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

import ItemCategory from "../../../components/Category/ItemCategory";
import { api } from "../../../api/axios";

export default function Home() {
    const [categorys, setCategorys] = useState([]);
    
    useEffect(() => {
        api.get('select/category')
            .then((response) => {
                setCategorys(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, []);
    return (
        <View className="flex-1 items-center bg-white">
            {!categorys &&<ActivityIndicator size="large" color="#0000ff" />}
            <Text className="text-2xl mt-3 font-bold ">Yo`nalishingizni tanlang</Text>
            <View className="justify-center ">
                {categorys &&
                <FlatList
                    data={categorys}
                    renderItem={(item)=><ItemCategory category={item}/> }
                    keyExtractor={(item) => item.id.toString()}
                    scrollEnabled={true}
               
                /> }
            </View>
        </View>

    )
}