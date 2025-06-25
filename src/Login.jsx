import { useNavigate } from "react-router";
import './login.css'
import { useForm } from 'react-hook-form';
export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    


    async function onSubmit(data) {

        if (!data.username || !data.password) {
            console.log("Fields cannot be empty");
            return;
        }
        const url = 'https://api.freeapi.app/api/v1/users/login';

        const options = {
            method: 'POST',
            headers: { accept: 'application/json', 'content-type': 'application/json' },
            body: JSON.stringify({
                username: data.username,
                password: data.password,

            })


        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);



        } catch (error) {
            console.error(error);
        }
        navigate("/FormTodo");

    }


    return (
        <><div className="body">

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="login-page">
                    <label >USERNAME: </label>
                    <input

                        className="login-inputs"
                        type="text"
                        placeholder="Type the name here" {...register("username", { required: "Name is required" })}


                    />
                    <p> {errors.username ? errors.username.message : ""}</p>
                    <label>PASSWORD: </label>
                    <input
                        className="login-inputs"
                        type="password"

                        placeholder="Type the password here"{...register("password", { required: "Password is required" })}

                    />
                    <p> {errors.password ? errors.password.message : ""}</p>

                    <button className="login-buttons" type="submit">
                        LOGIN
                    </button>
                </div>
            </form>
        </div>
        </>
    );
}
