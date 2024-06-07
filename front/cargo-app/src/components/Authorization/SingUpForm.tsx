import { FloatingLabel, Button } from "flowbite-react";

export const SingUpForm = () => {
    return (
        <form className="mt-4">
            <h2>SING UP</h2>
            <FloatingLabel variant="outlined" label="Label" />
            <FloatingLabel variant="outlined" label="Label" />
            <Button color="blue" className="w-full">
                Blue
            </Button>
        </form>
    );
};
