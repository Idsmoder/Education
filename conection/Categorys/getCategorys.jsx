import {api} from "../../api/axios";

export  function getCategorysRequest(){
    api.get('select/category')

        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(error);
        })
}
