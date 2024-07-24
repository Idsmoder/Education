import {View, Text, ViewBase, Image, TextInput, TouchableOpacity, ToastAndroid, Keyboard} from "react-native";
import {useState} from "react";
import {TextInputMask} from "react-native-masked-text";
import ToastManager, {Toast} from "toastify-react-native";
import LoginRequest from "../conection/Login/loginRequest";





export default function Login() {
    const [isFocused, setIsFocused] = useState(false);

    const [success,setSuccess] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const inputFocused = () => {
        setIsFocused(true)
    }
    const inputBlured = () => {
        setIsFocused(false)
    }
    const login = () => {
        Keyboard.dismiss();
        setIsFocused(false)
        if (!phoneNumber && phoneNumber.length < 19) {
            Toast.error('Telefon raqam kiriting', 'top',);
        }
        if (!password) {
            Toast.error('Parolni kiriting', 'top');
        }
        if (phoneNumber && password) {
            const cleanPhoneNumber = phoneNumber.replace(/[+() -]/g, '');
            const body = {
                phone: cleanPhoneNumber,
                password: password
            }
            LoginRequest(body)
            Toast.success('Success', 'top');


            setSuccess(true)

        }
    }
    return (
        <View className={' h-full'}>

                <ToastManager/>

            <View>
                <Image
                    height={isFocused? 100: 350}

                    className={'justify-center w-full  bg-emerald-500'}
                    source='../assets/loginPhoto.jpg' />
            </View>
            <View className={'flex-1 items-center border-1 rounded-t-3xl -mt-5 bg-gray-50 '}>
                <Text className={'mt-12  text-blue-950 text-3xl font-bold -ml-40'}>Xush kelibsiz</Text>
                <View className={'justify-center  w-full'}>
                    <View className={'items-center'}>
                        <Text className={'mt-12 -ml-40 text-blue-950 text-sm '}>Telefon raqamingizni kiriting</Text>
                        <TextInputMask
                            onFocus={inputFocused}
                            onBlur={inputBlured}
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            type={'custom'}
                            inputMode={'numeric'}
                            options={{
                                mask: '+998 (99) 999-99-99'
                            }}
                            className={'border-2 text-2xl pl-5 border-gray-300 justify-center bg-gray-100 rounded-2xl w-11/12 h-12'}
                        />




                    </View>
                    <View className={'items-center'}>

                            <Text className={'mt-3  -ml-64 text-blue-950 '}>Parolni kiriting</Text>

                        <TextInput
                            secureTextEntry={true}
                            onFocus={inputFocused}
                            onBlur={inputBlured}
                            value={password}
                            onChangeText={setPassword}
                            className={'border-2 pl-5 text-2xl border-gray-300 bg-gray-100 rounded-2xl w-11/12 h-12'}
                        />

                    </View>
                    <View className={'items-end'}>
                        <Text className={'mt-2  mr-5  text-blue-950 '}>Parolni unutdingizmi?</Text>
                    </View>


                </View>
                <TouchableOpacity
                    onPress={login}
                    className={'mt-5 bg-emerald-500 w-11/12 h-12  rounded-2xl items-center justify-center'}>
                    <Text className={'text-white text-2xl font-bold'}>Tizimga kirish</Text>
                </TouchableOpacity>

            </View>

        </View>


    )
}