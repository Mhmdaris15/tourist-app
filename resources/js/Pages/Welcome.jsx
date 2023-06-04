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
    const { travel_packages } = props;
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
    ];

    const artDestinations = [
        {
            name: "The Bund",
            location: "Shanghai, China",
            description:
                "The Bund or Waitan is a waterfront area in central Shanghai. The area centers on a section of Zhongshan Road within the former Shanghai International Settlement, which runs along the western bank of the Huangpu River in the eastern part of Huangpu District. The area along the river faces the modern skyscrapers of Lujiazui in the Pudong District. The Bund usually refers to the buildings and wharves on this section of the road, as well as some adjacent areas. It is one of the most famous tourist destinations in Shanghai. Building heights are restricted in this area.",
            rating: 2.5,
        },
        {
            name: "Little Petra",
            location: "Ma'an Governorate, Jordan",
            description: `Little Petra, also known as Siq al-Barid, is an archaeological site located north of Petra and the town of Wadi Musa in the Ma'an Governorate of Jordan. Like Petra, it is a Nabataean site, with buildings carved into the walls of the sandstone canyons. As its name suggests, it is much smaller, consisting of three wider open areas connected by a 450-metre (1,480 ft) canyon. It is part of the Petra Archeological Park, though accessed separately from the main site. It is often visited by tourists in conjunction with Petra itself, since it is free and usually less crowded.`,
            rating: 4,
        },
        {
            name: "Castello",
            location: "Venice, Italy",
            description: `The Castello district of Venice, Italy is the largest of the six sestieri of Venice, Italy. The district grew up from the thirteenth century around a naval dockyard on what was originally the Isole Gemini, although there had been small settlements of the islands of San Pietro di Castello (for which the sestiere is named), also called Isola d'Olivolo, since at least the eighth century. The district became divided between the Arsenale, then the largest naval complex in Europe, and the monasteries in the north of the quarter. It was later altered by Napoleon, who planned what are now the Bienniale Gardens, and still more recently the island of Sant'Elena has been created, and land drained at other extremities of the quarter. Other attractions in Castello include the Scuola di San Marco, the Church of Santi Giovanni e Paolo, the Scuola of San Giorgio degli Schiavoni, the church of San Giorgio dei Greci, the Campo Santa Maria Formosa, the Church of La Pietà and the Church of San Zaccaria.`,
            rating: 4.5,
        },
    ];
    const cityDestinations = [
        {
            name: "Brandenburg Gate",
            location: "Berlin, Germany",
            description: `The Brandenburg Gate is an 18th-century neoclassical monument in Berlin, built on the orders of Prussian king Frederick William II after the successful restoration of order during the early Batavian Revolution. One of the best-known landmarks of Germany, it was built on the site of a former city gate that marked the start of the road from Berlin to the town of Brandenburg an der Havel, which used to be capital of the Margraviate of Brandenburg.`,
            rating: 4.5,
        },
        {
            name: "Eiffel Tower",
            location: "Paris, France",
            description:
                "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.",
            rating: 5,
        },
        {
            name: "Jungfraujoch",
            location: "Bernese Alps, Switzerland",
            description:
                "Jungfraujoch is a glacier saddle connecting the two four-thousander peaks Jungfrau and Mönch, at an elevation of 3,466 metres above sea level. It is a glacier pass, on the upper snows of the Aletsch Glacier, and part of the Jungfrau-Aletsch area, situated on the boundary between the cantons of Bern and Valais, halfway between Interlaken and Fiesch.",
            rating: 4,
        },
    ];

    const destinations = [
        natureDestinations,
        artDestinations,
        cityDestinations,
    ];

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
    const [titleDestination, setTitleDestination] = useState("Nature");
    const [currentDestination, setCurrentDestination] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const ServiceImage = [AlpenMountain, Colosseum];

    useEffect(() => {
        setCurrentDestination(natureDestinations);
    }, []);

    const switchImage = (e) => {
        if (currentImage == 0) {
            setCurrentImage(1);
        } else {
            setCurrentImage(0);
        }
    };

    const handleSwitchDestination = (e) => {
        const id = e.target.id;
        if (id == "1") {
            setCurrentDestination(natureDestinations);
            setTitleDestination("Nature");
        } else if (id == "2") {
            setCurrentDestination(artDestinations);
            setTitleDestination("Art");
        } else {
            setCurrentDestination(cityDestinations);
            setTitleDestination("City");
        }
    };
    return (
        <div className="scroll-smooth bg-white">
            <Head title="Welcome" />
            <div className="w-screen box-border m-0">
                <Header
                    auth={props.auth}
                    onChange={handleSwitchDestination}
                    titleDestination={titleDestination}
                />

                {/* Nature Destination */}
                <div className="relative h-fit mt-32 mx-0">
                    <h1 className="font-extrabold mb-5 text-center text-3xl md:text-6xl">
                        {titleDestination} Destination
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
                        {/* {currentDestination.map((destination, index) => (
                            <CardDestination key={index} {...destination} />
                        ))} */}
                    </div>
                </div>

                {/* Popular Destination */}
                <div className="relative h-fit mt-16 mx-0">
                    <h1 className="font-extrabold mb-5 text-center text-3xl md:text-6xl">
                        Popular Destination
                    </h1>

                    <div className="w-[90%] flex md:mx-auto mx-5 items-stretch lg:gap-5 gap-2 justify-center flex-wrap">
                        {travel_packages.map((destination, index) => (
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
