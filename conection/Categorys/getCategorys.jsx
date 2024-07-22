import {api} from "../../api/axios";

export default function getCategorysRequest(){
    return api.get('select/category')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(error);
        })
}
