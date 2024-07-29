import { router } from "expo-router";
import {View, Text, Image, TouchableOpacity, Touchable} from "react-native";

export default function ItemCategory({category}) {
    
    var bg = '';
    const image_0 = require('../../assets/categorys/0.jpg');
    const image_1 = require('../../assets/categorys/1.jpg');
    const image_2 = require('../../assets/categorys/2.jpg');
    const image_3 = require('../../assets/categorys/3.jpg');
    const image_4 = require('../../assets/categorys/4.jpg');
    const image_5 = require('../../assets/categorys/5.jpg');
    const image_6 = require('../../assets/categorys/6.jpg');
    const image_7 = require('../../assets/categorys/7.jpg');
    const images = [image_0, image_1, image_2, image_3, image_4, image_5, image_6, image_7];
    const isEven = (category.index % 2);
    let categoryName = category.item.name;
    if (categoryName.length > 35) {
        categoryName = categoryName.substring(0, 32) + "...";
    }
    const randomImage = Math.floor(Math.random() * 8);
    let bgClass = ''; // Fon rangi uchun o'zgaruvchi
        switch (randomImage) {
            case 0:
                bgClass = 'bg-gray-100';
                break;
            case 1:
                bgClass = 'bg-zinc-50';
                break;
            case 2:
                bgClass = 'bg-zinc-100';
                break;
            case 3:
                bgClass = 'bg-zinc-50';
                break;
            case 4:
                bgClass = 'bg-zinc-100';
                break;
            case 5:
                bgClass = 'bg-gray-100';
                break;
            case 6:
                bgClass = 'bg-gray-50';
                break;
            case 7:
                bgClass = 'bg-gray-100';
                break;
            default:
                bgClass = 'bg-gray-100'; // Agar hech qaysi holatga mos kelmasa, standart rang
        }

        
    if (isEven) {
        return (

            
                <TouchableOpacity
                onPress={()=>{router.push(`home/${category.item.id}`)}}
                   className={'flex-1  h-24 w-full justify-center items-center mt-2 shadow-lg shadow-gray-100/50 '}
                 >
                    <View className={'w-full  h-full  rounded-3xl  overflow-hidden  border ' }>
                        <View className={'flex flex-row mix-blend-multiply'}>
                            <View className={`w-6/12  h-24 items-center justify-center ${bgClass}`}>
                                <Text className={'text-base text-sky-600 m-2  font-bold '}>{categoryName}</Text>
                            </View>
                            <View className={'w-6/12  h-full overflow-hidden '}>
                                <Image source={images[randomImage ? randomImage : 0]} className={'w-full h-24  rounded-r-3xl'}  />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
        )
    }
    return(
        <View className={'flex-1  h-24 w-full justify-center items-center mt-2 shadow-lg shadow-gray-100/50'}>
            <View className={'w-full   h-full  rounded-3xl border  overflow-hidden ' }>
                <View className={'flex flex-row'}>
                <View className={'w-6/12  h-full overflow-hidden '}>
                        <Image source={images[randomImage ? randomImage : 0]} className={'w-full h-24  rounded-l-3xl'}  />
                    </View>
                    <View className={`w-6/12  h-24 items-center justify-center ${bgClass}`}>
                        <Text  className={'text-base text-sky-600 m-2  font-bold '}>{categoryName}</Text>
                    </View>
                    
                </View>
            </View>
        </View>
    )
}