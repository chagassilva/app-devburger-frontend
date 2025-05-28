import axios from 'axios';


export const api =  axios.create({
    baseURL:'https://app-devburger-backend-production.up.railway.app/',
});

//interceptors para colocar o token no header

api.interceptors.request.use(

    (config) => {
       
       const userData = localStorage.getItem('devburger:userdata');
       const Token = userData && JSON.parse(userData).Token;
       config.headers.Authorization = `Bearer ${Token}`;
       return config;      

   } )

  