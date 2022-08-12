import {createApi , fetchBaseQuery   } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders ={
    'X-RapidAPI-Key': '31ad5fc5a0msha52262d5332b059p115de6jsn749aafa02a4f',
     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseURL = 'https://coinranking1.p.rapidapi.com' 

const createRequest = (url)=>({url , headers : cryptoApiHeaders  })
export const cryptoApi = createApi({
    reducerPath :'cryptoApi' ,
    baseQuery : fetchBaseQuery({baseURL}) , 
    endpoints : (builder) =>({
        getCryptos :builder.query({
            query :()=> createRequest('/coins')
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;  

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '31ad5fc5a0msha52262d5332b059p115de6jsn749aafa02a4f',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };