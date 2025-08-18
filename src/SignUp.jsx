
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
export default function SignUp(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
   async   function onSubmit(data) {
         if (!data.email || !data.password || !data.name) {
            console.log("Fields cannot be empty");
            return;
            
        }
        const url = 'http://localhost:4000/signup';
const options = {
  method: 'POST',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
   body: JSON.stringify({
      email: data.email,
                password: data.password,
                 name: data.name,
               
            })
};
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            if(response.ok){
                localStorage.setItem("token",result.token)
                  navigate("/FormTodo")
            }
                   
        } catch (error) {
            console.error(error);
        }
       
     
    }
    


return (
  <>
    <div
  className="min-h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat m-0 p-0"
  style={{
    backgroundImage:
      "url('https://t3.ftcdn.net/jpg/05/13/59/72/360_F_513597277_YYqrogAmgRR9ohwTUnOM784zS9eYUcSk.jpg')",
  }}
>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto mt-20 p-10  rounded-3xl  text-center bg-[rgba(160,103,70,0.2)] backdrop-blur-md text-gray-800">
     
        <label className='flex font-bold' >EMAIL:</label>
        
        <input
          className="w-full p-3 border border-amber-950 rounded-lg "
          type="text"
          placeholder="Type the email here"
          {...register("email", { required: "email is required" })}
        />
        <p className="text-red-600 text-sm">{errors.email?.message}</p>

        <label className='flex font-bold' >PASSWORD:</label>
        <input
          className="w-full p-3  border border-amber-950 rounded-lg "
          type="password"
          placeholder="Type the password here"
          {...register("password", { required: "Password is required" })}
        />
        <p className="text-red-600 text-sm">{errors.password?.message}</p>

       

        <label className='flex  font-bold'>USERNAME:</label>
        <input
          className="w-full p-3 border border-amber-950 rounded-lg "
          type="text"
          placeholder="Type the username here"
          {...register("name", { required: "username is required" })}
        />
        <p className="text-red-600 text-sm">{errors.name?.message}</p>

        <div className="flex justify-center gap-4 pt-4">
          <button type="submit" className="bg-gradient-to-r from-orange-800 to-black text-white px-6 py-3 rounded-lg font-bold hover:scale-105 ">
            SIGN UP
          </button>
          </div>
          <div>
            
          <span>Have An Account ?</span>
          <Link 
  to="/login" 
  className="text-orange-800 font-semibold hover:underline hover:text-black transition-colors duration-200"
>
  LOGIN
</Link>
</div>
        
   
    </form>
    </div>
    </>
  );
 
}
