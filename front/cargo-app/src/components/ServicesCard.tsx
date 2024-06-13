import { IServicesCardProps } from "../interfaces/IServicesCardProps";
import CustomButton from "./CustomButton";

const ServicesCard: React.FC<IServicesCardProps> = ({ img, title }) => {
    return (
        <div className="w-[400px] px-8 py-16 bg-slate-gray rounded-lg max-lg:w-full">
            <img src={img} alt="delivery" className="w-[400px] h-[200px]" />
            <div className="mt-5 text-center">
                <p className="mb-4 font-montserrat font-semibold text-white-400">
                    {title}
                </p>
                <CustomButton
                    title={"MORE"}
                    otherStyles="bg-coral-red p-4 rounded-lg hover:bg-white"
                />
            </div>
        </div>
    );
};

export default ServicesCard;
