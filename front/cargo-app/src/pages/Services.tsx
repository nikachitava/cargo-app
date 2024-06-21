import ServicesCard from "../components/ServicesCard";
import delivery from "../assets/images/delivery.svg";
import call from "../assets/images/call.svg";
import heavy_box from "../assets/images/heavy_box.svg";
import post from "../assets/images/post.svg";

import { useEffect, useState } from "react";
import axios from "axios";

export const Services = () => {
    const [services, setServices] = useState<IServicesData[]>();

    const fetchServicesData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/services");
            setServices(response.data);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    useEffect(() => {
        fetchServicesData();
    }, []);

    return (
        <section className="max-container animate__animated animate__bounceInDown padding-x py-8 w-full dark:bg-dark-dark ">
            <h1 className="font-montserrat font-bold mb-4 dark:text-white">
                OUR SERVICES
            </h1>

            <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-1">
                {services &&
                    services.map((service) => (
                        <ServicesCard
                            img={service.title}
                            title={service.title}
                        />
                    ))}
                <ServicesCard img={delivery} title={"FAST DELIVERY"} />
                <ServicesCard img={call} title={"24/7 HOT LINE"} />
                <ServicesCard img={heavy_box} title={"REAL WEIGHT"} />
                <ServicesCard img={post} title={"POST DELIVERY"} />
            </div>
        </section>
    );
};
