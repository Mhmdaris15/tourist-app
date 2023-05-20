import { Link, Head } from "@inertiajs/react";
import Header from "./Landing/Header";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { IoTicket } from "react-icons/io5";
import { GiCommercialAirplane } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import AlpenMountain from "../../images/alpine-mountain.jpg";
import Colosseum from "../../images/colloseum-view.jpg";
import CardDestination from "./Landing/CardDestination";
import { useEffect, useState } from "react";

// list of images from folder

export default function Welcome(props) {
    const natureDestinations = [
        {
            name: "Mount Bromo",
            location: "East Java, Indonesia",
            description:
                "Mount Bromo, is an active volcano and part of the Tengger massif, in East Java, Indonesia. At 2,329 metres it is not the highest peak of the massif, but is the best known. The massif area is one of the most visited tourist attractions in East Java, Indonesia. The volcano belongs to the Bromo Tengger Semeru National Park. The name of Bromo derived from Javanese pronunciation of Brahma, the Hindu creator god.",
            rating: 4.5,
        },
        {
            name: "Borobudur Temple",
            location: "Magelang, Central Java, Indonesia",
            description:
                "Borobudur, also transcribed Barabudur is a 9th-century Mahayana Buddhist temple in Magelang Regency, not far from the town of Muntilan, in Central Java, Indonesia. It is the world's largest Buddhist temple. The temple consists of nine stacked platforms, six square and three circular, topped by a central dome. The temple is decorated with 2,672 relief panels and 504 Buddha statues. The central dome is surrounded by 72 Buddha statues, each seated inside a perforated stupa.",
            rating: 5,
        },
        {
            name: "Great Wall of China",
            location: "Beijing, China",
            description:
                "The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were being built from as early as the 7th century BC by ancient Chinese states; selective stretches were later joined together by Qin Shi Huang (220–206 BC), the first Emperor of China. Little of the Qin wall remains.",
            rating: 3.5,
        },
        {
            name: "The Bund",
            location: "Shanghai, China",
            description:
                "The Bund or Waitan is a waterfront area in central Shanghai. The area centers on a section of Zhongshan Road within the former Shanghai International Settlement, which runs along the western bank of the Huangpu River in the eastern part of Huangpu District. The area along the river faces the modern skyscrapers of Lujiazui in the Pudong District. The Bund usually refers to the buildings and wharves on this section of the road, as well as some adjacent areas. It is one of the most famous tourist destinations in Shanghai. Building heights are restricted in this area.",
            rating: 2.5,
        },
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const ServiceImage = [AlpenMountain, Colosseum];
    const switchImage = (e) => {
        if (currentImage == 0) {
            setCurrentImage(1);
        } else {
            setCurrentImage(0);
        }
    };

    const popularDestinations = [
        {
            name: "Borobudur Temple",
            location: "Magelang, Central Java, Indonesia",
            description:
                "Borobudur, also transcribed Barabudur is a 9th-century Mahayana Buddhist temple in Magelang Regency, not far from the town of Muntilan, in Central Java, Indonesia. It is the world's largest Buddhist temple. The temple consists of nine stacked platforms, six square and three circular, topped by a central dome. The temple is decorated with 2,672 relief panels and 504 Buddha statues. The central dome is surrounded by 72 Buddha statues, each seated inside a perforated stupa.",
            rating: 5,
        },
        {
            name: "Great Wall of China",
            location: "Beijing, China",
            description:
                "The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were being built from as early as the 7th century BC by ancient Chinese states; selective stretches were later joined together by Qin Shi Huang (220–206 BC), the first Emperor of China. Little of the Qin wall remains.",
            rating: 3.5,
        },
        {
            name: "The Bund",
            location: "Shanghai, China",
            description:
                "The Bund or Waitan is a waterfront area in central Shanghai. The area centers on a section of Zhongshan Road within the former Shanghai International Settlement, which runs along the western bank of the Huangpu River in the eastern part of Huangpu District. The area along the river faces the modern skyscrapers of Lujiazui in the Pudong District. The Bund usually refers to the buildings and wharves on this section of the road, as well as some adjacent areas. It is one of the most famous tourist destinations in Shanghai. Building heights are restricted in this area.",
            rating: 2.5,
        },
        {
            name: "Fuji Mountain",
            location: "Honshu Island, Japan",
            description:
                "Fuji Mountain is the highest mountain in Japan. It is located on Honshu Island, about 100 kilometers southwest of Tokyo. It is an active volcano that last erupted in 1707–08. Mount Fuji is a distinctive feature of the geography of Japan. It stands 3,776.24 m (12,389 ft) high and is one of Japan's Three Holy Mountains.",
            rating: 4,
        },
        {
            name: "Pyramid of Giza",
            location: "Giza, Egypt",
            description:
                "The Great Pyramid of Giza is the oldest and largest of the pyramids in the Giza pyramid complex bordering present-day Giza in Greater Cairo, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.",
            rating: 4.5,
        },
        {
            name: "Cordoba Mosque",
            location: "Cordoba, Spain",
            description:
                "The Mosque–Cathedral of Córdoba, officially known by its ecclesiastical name of Cathedral of Our Lady of the Assumption, is the cathedral of the Roman Catholic Diocese of Córdoba dedicated to the Assumption of Mary and located in the Spanish region of Andalusia.",
            rating: 4.5,
        },
    ];
    return (
        <div className="scroll-smooth bg-white">
            <Head title="Welcome" />
            <div className="w-screen box-border m-0">
                <Header {...props} />

                {/* Nature Destination */}
                <div className="relative h-fit mt-32 mx-0">
                    <h1 className="font-extrabold mb-5 text-center text-3xl md:text-6xl">
                        Nature Destination
                    </h1>
                    <div className="absolute right-8 -translate-y-20 lg:flex gap-x-3 hidden">
                        <BsFillArrowLeftCircleFill
                            className="text-green-300 hover:text-green-200 transition-all ease-in cursor-pointer"
                            size={50}
                        />
                        <BsFillArrowRightCircleFill
                            className="text-green-300 hover:text-green-200 transition-all ease-in cursor-pointer"
                            size={50}
                        />
                    </div>
                    <div className="w-[90%] flex md:mx-auto mx-5 items-stretch lg:gap-5 gap-2 justify-center flex-wrap">
                        {natureDestinations.map((destination, index) => (
                            <CardDestination key={index} {...destination} />
                        ))}
                    </div>
                </div>

                {/* Popular Destination */}
                <div className="relative h-fit mt-16 mx-0">
                    <h1 className="font-extrabold mb-5 text-center text-3xl md:text-6xl">
                        Popular Destination
                    </h1>

                    <div className="w-[90%] flex md:mx-auto mx-5 items-stretch lg:gap-5 gap-2 justify-center flex-wrap">
                        {popularDestinations.map((destination, index) => (
                            <CardDestination key={index} {...destination} />
                        ))}
                    </div>
                </div>

                {/* Our Services */}
                <div className="relative grid md:grid-cols-2 grid-rows-4 md:grid-rows-1 h-fit md:mt-16 mt-40 mx-0">
                    <div
                        className="cursor-pointer md:h-full h-fit flex place-content-center place-items-center"
                        onClick={switchImage}
                    >
                        <img
                            className="absolute md:w-96 md:h-80 w-72 h-64 rounded-3xl object-cover"
                            src={ServiceImage[currentImage]}
                            alt="Alpine Mountain"
                        />
                        <img
                            className="absolute md:w-96 md:h-80 w-72 h-64 rounded-3xl outline outline-gray-50 outline-8 transition-all object-cover translate-x-10 translate-y-10"
                            src={ServiceImage[Number(!currentImage)]}
                            alt="Colosseum Italy"
                        />
                    </div>
                    <div className="md:w-2/3 w-5/6 mx-auto md:mx-0 flex flex-col md:rows-span1 row-span-3 gap-y-7 items-center md:items-start">
                        <h1 className="font-extrabold text-3xl">
                            We Offer Best Services
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Harum voluptas corrupti corporis! Dolorem,
                            autem commodi delectus doloremque ipsam nam rem.
                            Molestias dicta nostrum fugit atque ad rem dolores
                            magni dignissimos.
                        </p>
                        <div className="flex flex-col gap-y-10 mt-5">
                            <div className="flex items-center gap-x-10">
                                <span className="bg-gray-200 p-3 block rounded-full h-fit w-fit">
                                    <IoTicket size={50} />
                                </span>
                                <span>
                                    <h2 className="font-bold text-xl">
                                        Instant Ticket
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Esse commodi
                                        voluptatem officiis, minus tempore quas!
                                    </p>
                                </span>
                            </div>
                            <div className="flex items-center gap-x-10">
                                <span className="bg-gray-200 p-3 block rounded-full h-fit w-fit">
                                    <GiCommercialAirplane size={50} />
                                </span>
                                <span>
                                    <h2 className="font-bold text-xl">
                                        Worldwide Flight
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Ipsam neque fugit
                                        numquam labore quod esse alias
                                        accusantium?
                                    </p>
                                </span>
                            </div>
                            <div className="flex items-center gap-x-10">
                                <span className="bg-gray-200 p-3 block rounded-full h-fit w-fit">
                                    <VscWorkspaceTrusted size={50} />
                                </span>
                                <span>
                                    <h2 className="font-bold text-xl">
                                        Trusted Booking
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Molestias reiciendis
                                        tenetur incidunt adipisci, aliquam nam
                                        quis minima!
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
