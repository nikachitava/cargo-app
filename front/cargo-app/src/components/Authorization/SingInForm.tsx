import { FloatingLabel, Button } from "flowbite-react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/authContext";
import { useContext, useState } from "react";

interface ILoginData {
    email: string;
    password: string;
}

type Inputs = {
    email: string;
    password: string;
};

const SingInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const [err, setErr] = useState<any>();

    const { login, errorMessage } = useContext(AuthContext);

    const onSubmit = async (data: ILoginData) => {
        try {
            await login(data);
        } catch (error) {
            setErr(error);
        }
    };

    return (
        <form className="mt-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {err && <h1>{err}</h1>}
            <FloatingLabel
                variant="outlined"
                label="Email"
                className="font-montserrat font-semibold"
                {...register("email", {
                    required: "Email address is required",
                    pattern: {
                        value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
                        message: "Enter correct email address",
                    },
                })}
                color={errors.email ? "error" : "default"}
            />

            {errors.email && (
                <span className="text-xs font-montserrat text-red-600">
                    {errors.email.message}
                </span>
            )}

            <FloatingLabel
                variant="outlined"
                label="Password"
                className="font-montserrat font-semibold"
                {...register("password", {
                    required: "Password is required",
                })}
                color={errors.password ? "error" : "default"}
            />

            {errors.password && (
                <span className="text-xs font-montserrat text-red-600">
                    {errors.password.message}
                </span>
            )}

            <div className="">
                <span className="text-sm text-slate-gray font-montserrat">
                    Forgot password?
                </span>
            </div>

            <Button
                type="submit"
                color="blue"
                className="w-full font-montserrat font-bold"
            >
                LOGIN
            </Button>
            {errorMessage && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errorMessage}
                </p>
            )}
        </form>
    );
};

export default SingInForm;
