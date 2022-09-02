import axios from 'axios';
import { DOMAIN ,TOKEN} from '../Util/config';

const axiosClient = axios.create({
    baseURL: `${DOMAIN}`,
   headers :{
     tokenByClass: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzEiLCJIZXRIYW5TdHJpbmciOiIyOS8xMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NzIyNzIwMDAwMDAiLCJuYmYiOjE2NDU5ODEyMDAsImV4cCI6MTY3MjQxOTYwMH0.SZe3CJl1OkNH-0zfzqOV0CSC8WZ6q2hw64UykpCytT0'
   }

})

axiosClient.interceptors.request.use(config =>{
   if (config.headers) {
    const token = localStorage.getItem(TOKEN) || null
    
    if(token){
      config.headers.token = `${JSON.parse(token)}`
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`
      
    }
  }

  return config;
})
axiosClient.interceptors.response.use((response)=>{
     if (response.status === 200) {
      // console.log(response.data);
       return response.data
       
      }
   
     
},
(error)=>{
    
  //  return error.response.data
  console.log(error)
}
)
export default axiosClient;