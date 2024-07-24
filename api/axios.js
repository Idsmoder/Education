import axios from "axios";
import {router} from "expo-router";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

const api = axios.create({
    baseURL:"https://api.edu.imedic.uz/api/",
    });

api.interceptors.request.use(
    async (config) => {
        async function getAccessToken() {
            return await asyncStorage.getItem("access_token");
        }
        const access_token = await getAccessToken();
        config.headers = {
            Authorization: `Bearer ${access_token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
            ...config.headers,
        };

        return config;

    },

    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (!error.response) {
            error["response"] = {
                data: {
                    errors: [
                        {
                            message:
                                "Проверьте подключение к Интернету или Сервер не отвечает",
                        },
                    ],
                },
            };
            return Promise.reject(error);
        }
        if (error.response.status === 401) {
            asyncStorage.removeItem("access_token");
            router.push("/login");
        } else {
            return Promise.reject(error);
        }
    }
);

export { api };

