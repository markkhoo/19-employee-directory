import axios from 'axios';

const API = {
    getEmployees: () => {
        return axios.get("https://randomuser.me/api/?results=4&nat=us")
    }
}

export default API;