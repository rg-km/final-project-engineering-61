import create from 'zustand'
import {devtools} from 'zustand/middleware'
import axios from 'axios'

const useApi = create(
    devtools((set) => ({
        api: [],
        fetch: async (url) => {
            const response = await axios.get(url);
            set({api: response.data});
        },
    })) 
);

export default useApi;
