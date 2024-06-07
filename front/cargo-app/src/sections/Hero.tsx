import shooping_1 from "../assets/images/shopping_1.svg";
import CustomButton from "../components/CustomButton";

const Hero = () => {
    return (
        <section className="padding-x py-8 w-full">
            <div className="flex justify-between items-center max-lg:flex-col max-lg:space-y-5">
                <div className="space-y-8">
                    <h1 className="uppercase font-montserrat text-6xl font-bold text-left">
                        ShopPing without leaving{" "}
                        <span className="text-coral-red">home</span>
                    </h1>
                    <div className="flex items-center space-x-7 mt-10 max-lg:mt-5 ">
                        <CustomButton
                            title="Start Shopping"
                            otherStyles={
                                "bg-coral-red rounded-full px-7 py-4 text-white"
                            }
                        />
                        <CustomButton
                            title="Sing Up"
                            otherStyles={
                                "bg-coral-red rounded-full px-7 py-4 text-white"
                            }
                        />
                    </div>
                </div>
                <div className="">
                    <img src={shooping_1} alt={shooping_1} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
