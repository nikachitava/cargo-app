import { FloatingLabel, Button } from "flowbite-react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    username: string;
    surname: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const SingUpForm = () => {
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
                label="Name"
                className="font-montserrat font-semibold"
                {...register("username", {
                    required: "Username is required",
                    minLength: {
                        value: 3,
                        message: "Minimum lenght 8",
                    },
                    maxLength: {
                        value: 30,
                        message: "Maximum lenght 30",
                    },
                })}
                color={errors.username ? "error" : "default"}
            />

            {errors.username && (
                <span className="text-xs font-montserrat text-red-600">
                    {errors.username.message}
                </span>
            )}

            <FloatingLabel
                variant="outlined"
                label="Surname"
                className="font-montserrat font-semibold"
                {...register("surname", {
                    required: "surname is required",
                    minLength: {
                        value: 3,
                        message: "Minimum lenght 8",
                    },
                    maxLength: {
                        value: 30,
                        message: "Maximum lenght 30",
                    },
                })}
                color={errors.surname ? "error" : "default"}
            />

            {errors.surname && (
                <span className="text-xs font-montserrat text-red-600">
                    {errors.surname.message}
                </span>
            )}

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
                    required: "password is required",
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

            <FloatingLabel
                variant="outlined"
                label="Confirm Password"
                className="font-montserrat font-semibold"
                {...register("confirmPassword", {
                    required: "Password confirmation is required",
                })}
                color={errors.confirmPassword ? "error" : "default"}
            />

            {errors.confirmPassword && (
                <span className="text-xs font-montserrat text-red-600">
                    {errors.confirmPassword.message}
                </span>
            )}

            <Button
                type="submit"
                color="blue"
                className="w-full font-montserrat font-bold"
            >
                REGISTRATION
            </Button>
        </form>
    );
};

export default SingUpForm;
