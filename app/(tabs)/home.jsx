import {ActivityIndicator, FlatList, Text, View} from "react-native";
import {useEffect, useState} from "react";
import getCategorysRequest from "../../conection/Categorys/getCategorys";
import ItemCategory from "../../components/Category/ItemCategory";

export default function Home() {
    const [categorys, setCategorys] = useState([]);
    useEffect(() => {

            getCategorysRequest().then(data => {
                setCategorys(data);
            }).catch(error => console.error(error));



        }, []);

    return (
        <View className="flex-1 items-center">
            {!categorys &&<ActivityIndicator size="large" color="#0000ff" />}
            <Text className="text-2xl mt-3 font-bold">Yo`nalishingizni tanlang</Text>
            <View className="justify-center">
                <FlatList
                    data={categorys}
                    renderItem={(item)=><ItemCategory category={item}/> }
                    keyExtractor={(item) => item.id.toString()}
                    scrollEnabled={true}
                />

            </View>







        </View>

    )
}