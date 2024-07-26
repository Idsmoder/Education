import {api} from "../../api/axios";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import {router} from "expo-router";

function LoginRequest(props) {

    api.post('login', props)
        .then(function (response) {
            if (response.status === 200){
                async function setToken() {
                    await asyncStorage.setItem('access_token', response.data.access_token);
                }
                async function setRole() {
                    await asyncStorage.setItem('role', response.data.role);
                }
                setToken();
                setRole();
                router.push('home');
            }
        })
        .catch(function (error) {
            console.log(error,'error');
        });

}
export default LoginRequest;