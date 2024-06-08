import { FloatingLabel, Button } from "flowbite-react";

export const SingUpForm = () => {
    return (
        <form className="mt-4 space-y-4">
            <FloatingLabel
                variant="outlined"
                label="Name"
                className="font-montserrat font-semibold"
            />
            <FloatingLabel
                variant="outlined"
                label="Surname"
                className="font-montserrat font-semibold"
            />
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
            <FloatingLabel
                variant="outlined"
                label="Confirm Password"
                className="font-montserrat font-semibold"
            />

            <Button color="blue" className="w-full font-montserrat font-bold">
                REGISTRATION
            </Button>
        </form>
    );
};
