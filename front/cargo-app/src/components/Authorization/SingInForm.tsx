import { FloatingLabel, Button } from "flowbite-react";

export const SingInForm = () => {
    return (
        <form className="mt-4 space-y-4">
            <FloatingLabel
                variant="outlined"
                label="Email"
                className="font-montserrat font-semibold"
            />
            <FloatingLabel
                variant="outlined"
                label="Password"
                className="font-montserrat font-semibold"
            />

            <span className="text-sm text-slate-gray font-montserrat">
                Forgot password?
            </span>

            <Button color="blue" className="w-full font-montserrat font-bold">
                LOGIN
            </Button>
        </form>
    );
};
