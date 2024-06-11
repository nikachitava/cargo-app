import { FloatingLabel, Button } from "flowbite-react";
import { useForm, SubmitHandler } from "react-hook-form";

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

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <form className="mt-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
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

                    minLength: {
                        value: 8,
                        message: "Minimum lenght 8",
                    },
                    maxLength: {
                        value: 30,
                        message: "Maximum lenght 30",
                    },
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
        </form>
    );
};

export default SingInForm;
