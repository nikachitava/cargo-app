import ServicesCard from "../components/ServicesCard";
import delivery from "../assets/images/delivery.svg";
import call from "../assets/images/call.svg";
import heavy_box from "../assets/images/heavy_box.svg";
import post from "../assets/images/post.svg";

export const Services = () => {
    return (
        <section className="animate__animated animate__bounceInDown max-container padding-x py-8 w-full">
            <h1 className="font-montserrat font-bold mb-4">OUR SERVICES</h1>
            <div className="flex justify-between flex-wrap gap-8">
                <ServicesCard img={delivery} title={"FAST DELIVERY"} />
                <ServicesCard img={call} title={"24/7 HOT LINE"} />
                <ServicesCard img={heavy_box} title={"REAL WEIGHT"} />
                <ServicesCard img={post} title={"POST DELIVERY"} />
            </div>
        </section>
    );
};
