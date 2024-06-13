import axios from "axios";
import { FloatingLabel, Button } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Inputs {
    name: string;
    surname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SingUpForm = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit = (data: Inputs) => {
        axios
            .post("http://localhost:3000/auth/singup", data)
            .then((response) => {
                console.log(response.data);
                window.location.reload();
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage(
                        "An error occurred while processing your request."
                    );
                }
            });
    };

    return (
        <form className="mt-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <FloatingLabel
                variant="outlined"
                label="Name"
                className="font-montserrat font-semibold"
                {...register("name", {
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
                color={errors.name ? "error" : "default"}
            />

            {errors.name && (
                <span className="text-xs font-montserrat text-red-600">
                    {errors.name.message}
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
            {errorMessage && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errorMessage}
                </p>
            )}
        </form>
    );
};

export default SingUpForm;
