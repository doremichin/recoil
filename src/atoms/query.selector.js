import {selector, selectorFamily} from "recoil";
import axios from "axios";
// key : 9uH0ga_2N_JoXWka26ApbWbNp2nELHC8CMtPKi6B7AA
export const getPhotosQuery = selector({
    key: 'GetPhotosQuery',
    get: async ({get}) => {
        const config = {
            headers: {
                Authorization: 'Client-ID 9uH0ga_2N_JoXWka26ApbWbNp2nELHC8CMtPKi6B7AA'
            },
            url: 'https://api.unsplash.com/photos',
            params: {}
        }

        const {data} = await axios(config);
        return data
    }
});

export const getPhotosByIdQuery = selectorFamily({
    key: 'GetPhotosByIdQuery',
    get: (query) => async () => {
        const config = {
            headers: {
                Authorization: 'Client-ID 9uH0ga_2N_JoXWka26ApbWbNp2nELHC8CMtPKi6B7AA'
            },
            url: `https://api.unsplash.com/search/photos/`,
            params: {
                query
            }
        }

        const {data} = await axios(config);

        return data
    },
});
