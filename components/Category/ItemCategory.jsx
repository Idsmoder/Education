import {View, Text} from "react-native";
import isEvenItem from "./isEven";
import isOddItem from "./isOdd";
export default function ItemCategory({category}) {
    const isEven = (category.index % 2);


    return(
        <View className={'flex  border bg-gray-100 rounded-2xl'}>
            <Text className={'text-2xl'}>{category.item.name}</Text>
        </View>
    )
}