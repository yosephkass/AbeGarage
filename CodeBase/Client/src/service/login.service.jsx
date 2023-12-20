import axios from '../util/axios'


const loginService = { 
   logIn: async (data)=> { 
      const response= (await axios.post('api/login',data));
      if(response.data.success){    
         alert(data.data.message)
         localStorage.setItem({'employee':response.data.token})
      }
      console.log(response );
   
  
   
   }


}


export default loginService;
