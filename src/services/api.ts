import axios from "axios";
import DataI from "../modal/dataI";

const getsData = () => {
    return axios.get<DataI[]>( `http://localhost:3000/items` )
        .then( response => response.data );
}
const postsData = ( formData: Omit<DataI, "id"> ) => {
    return axios.post<DataI>( `http://localhost:3000/items`, formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    } ).then( response => response.data );
}
export { getsData, postsData };