import { FaTree } from "react-icons/fa6";
import { GiFarmer } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { PiWindBold } from "react-icons/pi";

const ProductCard = ({ title, subtitle, Icon, color, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-white border border-[#E6EDFF] rounded-xl shadow-lg hover:shadow-2xl transition-shadow no-underline"
        >
            <Icon className={`text-${color}-500 text-3xl mr-4`} />
            <div className="flex flex-row items-center">
                <div className="font-medium text-black text-lg md:text-xl lg:text-xl">
                    {title}
                </div>
                {subtitle && (
                    <div className="font-medium text-black ml-2 text-lg md:text-xl lg:text-xl">
                        {subtitle}
                    </div>
                )}
            </div>
        </a>
    );
};

export const UserProducts = () => {
    return (
        <div className="mt-16 p-4 md:p-6 lg:p-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ProductCard
                    title="Tree"
                    subtitle="Plantation"
                    Icon={FaTree}
                    color="green"
                    link="/Tree"
                />
                <ProductCard
                    title="Air"
                    subtitle="Pollution"
                    Icon={PiWindBold}
                    color="red"
                    link="/Air"
                />
                <ProductCard
                    title="Agriculture"
                    Icon={GiFarmer}
                    color="violet"
                    link="/Agri"
                />
                <ProductCard
                    title="Water"
                    subtitle="Management"
                    Icon={IoIosWater}
                    color="blue"
                    link="/Water"
                />
            </div>
        </div>
    );
};
