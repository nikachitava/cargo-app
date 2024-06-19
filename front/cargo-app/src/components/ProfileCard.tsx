import { IProfileCardProps } from "../interfaces/IProfileCardProps";

const ProfileCard: React.FC<IProfileCardProps> = ({
    icon,
    text_1,
    text_2,
    onClick,
}) => {
    return (
        <div
            className="flex items-center gap-4 shadow-md px-4 py-8 hover:cursor-pointer"
            onClick={onClick}
        >
            <div>{icon}</div>
            <div>
                <p>{text_1}</p>
                <p>{text_2}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
