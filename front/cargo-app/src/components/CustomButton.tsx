interface ICustumButtonProps {
    title: string;
    fullWidth?: boolean;
}

const CustomButton: React.FC<ICustumButtonProps> = ({ title, fullWidth }) => {
    return (
        <div
            className={`text-center font-montserrat text-sm font-semibold rounded-full bg-coral-red px-7 py-4 cursor-pointer text-white ${
                fullWidth && "w-full"
            }`}
        >
            {title}
        </div>
    );
};

export default CustomButton;
