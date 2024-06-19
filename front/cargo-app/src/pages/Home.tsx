import shooping_1 from "../assets/images/shopping_1.svg";
import CustomButton from "../components/CustomButton";
import "animate.css";

export const Home = () => {
    return (
        <>
            <section className="padding-x py-8 w-full animate__animated animate__zoomIn">
                <div className="flex justify-between py-16 items-center max-lg:flex-col max-lg:space-y-5 max-lg:py-0">
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
        </>
    );
};
