
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
export default function SignUp(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()
   async   function onSubmit(data) {
         if (!data.email || !data.password || !data.role || !data.username) {
            console.log("Fields cannot be empty");
            return;
            
        }
        const url = 'https://api.freeapi.app/api/v1/users/register';
const options = {
  method: 'POST',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
   body: JSON.stringify({
      email: data.email,
                 role: data.role,
                password: data.password,
                 username: data.username,
               
            })
};


        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
               
            
        
        } catch (error) {
            console.error(error);
        }
       
       navigate("/FormTodo")
    }
    


return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto mt-20 p-10  rounded-3xl  text-center bg-white/10 backdrop-blur-md text-gray-800">
     
        <label className='flex ' >EMAIL:</label>
        
        <input
          className="w-full p-3 border border-gray-300 rounded-lg "
          type="text"
          placeholder="Type the email here"
          {...register("email", { required: "email is required" })}
        />
        <p className="text-red-600 text-sm">{errors.email?.message}</p>

        <label className='flex ' >PASSWORD:</label>
        <input
          className="w-full p-3 border border-gray-300 rounded-lg "
          type="password"
          placeholder="Type the password here"
          {...register("password", { required: "Password is required" })}
        />
        <p className="text-red-600 text-sm">{errors.password?.message}</p>

        <label className='flex '>ROLE:</label>
        <input
          className="w-full p-3 border border-gray-300 rounded-lg "
          type="text"
          placeholder="Type the role here"
          {...register("role", { required: "role is required" })}
        />
        <p className="text-red-600 text-sm">{errors.role?.message}</p>

        <label className='flex '>USERNAME:</label>
        <input
          className="w-full p-3 border border-gray-300 rounded-lg "
          type="text"
          placeholder="Type the username here"
          {...register("username", { required: "username is required" })}
        />
        <p className="text-red-600 text-sm">{errors.username?.message}</p>

        <div className="flex justify-center gap-4 pt-4">
          <button type="submit" className="bg-gradient-to-r from-orange-800 to-black text-white px-6 py-3 rounded-lg font-bold hover:scale-105 ">
            SIGN UP
          </button>
          <Link to="/login" className="bg-gradient-to-r from-orange-800 to-black text-white px-6 py-3 rounded-lg font-bold hover:scale-105 ">
            LOGIN
          </Link>
        </div>
   
    </form>
  );
}
