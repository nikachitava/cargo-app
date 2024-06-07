interface ICustumButtonProps {
    title: string;
    otherStyles?: string;
    onClick?: () => void;
}

const CustomButton: React.FC<ICustumButtonProps> = ({
    title,
    otherStyles,
    onClick,
}) => {
    return (
        <div
            className={`text-center font-montserrat text-sm font-semibold cursor-pointer ${otherStyles}`}
            onClick={onClick}
        >
            {title}
        </div>
    );
};

export default CustomButton;
