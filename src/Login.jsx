import { useNavigate } from "react-router";

import { useForm } from 'react-hook-form';
export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    


    async function onSubmit(data) {

        if (!data.email || !data.password) {
            console.log("Fields cannot be empty");
            return;
        }
        const url = 'https://todo-backend-production-444a.up.railway.app/login';

        const options = {
            method: 'POST',
            headers: { accept: 'application/json', 'content-type': 'application/json' },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
             
            })


        };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("token",result.token)
        console.log(result.message); 
          navigate("/FormTodo");
          
      } else {
        console.error(result.error); 
        alert("Login failed: " + result.error);
      }


        } catch (error) {
            console.error(error);
        }
   

    }


  return (
  <div
  className="min-h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat m-0 p-0"
  style={{
    backgroundImage:
      "url('https://t3.ftcdn.net/jpg/05/13/59/72/360_F_513597277_YYqrogAmgRR9ohwTUnOM784zS9eYUcSk.jpg')",
  }}
>
    
    <div className=" inset-0 bg-gradient-to-br from-black/40 to-black/20 -z-10"></div>

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-[700px] mx-auto mt-20 p-10 rounded-2xl bg-[rgba(160,103,70,0.2)] backdrop-blur-md shadow-lg border border-white/40 text-center text-gray-800">
        
        <label className="font-bold block text-left">EMAIL:</label>
        <input
          type="text"
          placeholder="Type the email here"
          {...register("email", { required: "email is required" })}
          className="w-full max-w-[500px] px-4 py-3 mt-2 mb-4 border border-amber-950 rounded-lg text-lg outline-none transition-all duration-300 focus:border-sky-500 focus:shadow-[0_0_8px_rgba(0,170,255,0.3)]"
        />
        <p className="text-red-500 text-sm">{errors.email?.message || ""}</p>

        
        <label className="font-bold block text-left">PASSWORD:</label>
        <input
          type="password"
          placeholder="Type the password here"
          {...register("password", { required: "Password is required" })}
          className="w-full max-w-[500px] px-4 py-3 mt-2 mb-4 border  border-amber-950 rounded-lg text-lg outline-none transition-all duration-300 focus:border-sky-500 focus:shadow-[0_0_8px_rgba(0,170,255,0.3)]"
        />
        <p className="text-red-500 text-sm">{errors.password?.message || ""}</p>

        
        <button
          type="submit"
          className="w-[120px] px-4 py-3 mt-4 bg-gradient-to-br from-[#773204] to-[#0a0704] text-white text-lg font-bold rounded-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
        >
          LOGIN
        </button>
      </div>
    </form>
  </div>
);
}
