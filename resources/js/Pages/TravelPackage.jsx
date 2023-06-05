import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import Image from "../../images/deutschland-view.jpg";
import Modal from "@/Components/Modal";

const TravelPackage = (props) => {
    const {
        package_name,
        description,
        facilities,
        price,
        discount,
        slug,
        image_1,
        image_2,
        image_3,
        image_4,
        image_5,
    } = props.travelPackage;

    const [showImage, setShowImage] = useState(false);
    const [imgSrc, setImgSrc] = useState("");

    const onClickImage = (e) => {
        setShowImage(true);
        setImgSrc(e.target.src);
    };

    const closeModal = () => {
        setShowImage(false);
    };

    return (
        <div>
            <Head title={`Travel Package | ${package_name} `} />
            <h1 className="font-extrabold text-6xl text-gray-50 px-8 py-5">
                {package_name}
            </h1>
            <div className="w-full flex gap-x-5 pr-8">
                <div className="grid grid-cols-3 gap-3 w-3/5 pl-8">
                    <Modal show={showImage} onClose={closeModal}>
                        <img src={imgSrc} className="w-fit" alt="" />
                    </Modal>
                    <img
                        className="rounded-lg cursor-pointer"
                        src={`${image_1 != null ? "/" + image_1 : Image}`}
                        alt=""
                        onClick={onClickImage}
                    />
                    <img
                        className="rounded-lg cursor-pointer"
                        src={`${image_2 != null ? "/" + image_2 : Image}`}
                        alt=""
                        onClick={onClickImage}
                    />
                    <img
                        className="rounded-lg cursor-pointer"
                        src={`${image_3 != null ? "/" + image_3 : Image}`}
                        alt=""
                        onClick={onClickImage}
                    />
                    <img
                        className="rounded-lg cursor-pointer"
                        src={`${image_4 != null ? "/" + image_4 : Image}`}
                        alt=""
                        onClick={onClickImage}
                    />
                    <img
                        className="rounded-lg cursor-pointer"
                        src={`${image_5 != null ? "/" + image_5 : Image}`}
                        alt=""
                        onClick={onClickImage}
                    />
                </div>
                <div className="relative flex flex-col w-2/6 mx-auto bg-gray-100 rounded-lg">
                    <h3 className="font-bold text-center pt-10 text-lg text-gray-900">
                        Reserve {package_name} Pack Right Now!
                    </h3>
                    <span className="absolute right-0 text-gray-100 bg-[#3F53FE] h-fit rounded-tr-lg rounded-bl-lg px-4 py-2">
                        On Sale!
                    </span>
                    <p className="text-center px-10 text-gray-500">
                        What would you get? {facilities}
                    </p>
                    <p className="pl-10 pt-10">Start From</p>
                    <p className="flex px-10 justify-between items-end">
                        <span className="text-gray-500">
                            $
                            <span className="font-bold text-4xl text-gray-700">
                                {price - price * discount}
                            </span>
                            USD
                        </span>
                        <span className="text-gray-500">Was ${price}</span>
                    </p>
                    <div className="w-full px-7">
                        <Link
                            type="submit"
                            href={route("dashboard.reservation.index", {
                                r: slug,
                            })}
                            className="font-extrabold text-center text-3xl w-full py-6 bg-[#3F53FE] text-gray-100 rounded-full mt-6 hover:bg-[#3F53FE] hover:shadow-xl transition-all"
                        >
                            Book Now!
                        </Link>
                    </div>
                    <input type="hidden" name="travel-package" value={slug} />
                </div>
            </div>
            <div className="flex flex-col gap-y-5 pl-8 pt-8 max-w-3xl">
                <div>
                    <h3 className="font-bold text-2xl">Description</h3>
                    <p className="text-gray-50">{description}</p>
                </div>
                <div>
                    <h3 className="font-bold text-2xl">Facilities</h3>
                    <p className="text-gray-50">{facilities}</p>
                </div>
            </div>
        </div>
    );
};

export default TravelPackage;
