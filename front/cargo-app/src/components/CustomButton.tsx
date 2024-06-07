interface ICustumButtonProps {
    title: string;
    otherStyles?: string;
}

const CustomButton: React.FC<ICustumButtonProps> = ({ title, otherStyles }) => {
    return (
        <div
            className={`text-center font-montserrat text-sm font-semibold rounded-full bg-coral-red px-7 py-4 cursor-pointer text-white ${otherStyles}`}
        >
            {title}
        </div>
    );
};

export default CustomButton;
