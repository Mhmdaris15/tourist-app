import React, { useState, useEffect, useContext } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Modal from "@/Components/Modal";
import { useForm, usePage } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import Dropdown from "@/Components/Dropdown";
import RadioButton from "@/Components/RadioButton";
import InputLabel from "@/Components/InputLabel";
import TextAreaInput from "@/Components/TextAreaInput";
import { DashboardContext } from "../Dashboard";

const SingleReservation = (props) => {
    const [confirmingReservationDeletion, setConfirmingReservationDeletion] =
        useState(false);
    const [confirmingReservationUpdate, setConfirmingReservationUpdate] =
        useState(false);

    const {
        data,
        setData,
        delete: destroy,
        post,
        patch,
        processing,
        reset,
        errors,
        progress,
    } = useForm({
        id: props.id,
        customer_id: props.customer_id,
        travel_package_id: props.travel_package_id,
        date_of_reservation: props.date_of_reservation,
        price: props.price,
        number_of_people: props.number_of_people,
        discount: props.discount,
        discount_value: props.discount_value,
        total_price: props.total_price,
        proof_of_payment: props.proof_of_payment,
        status: props.status,
    });

    useEffect(() => {
        setData({
            id: props.id,
        });
    }, [props.id]);

    const confirmReservationDeletion = () => {
        setConfirmingReservationDeletion(true);
        setData({
            id: props.id,
        });
    };

    const confirmReservationUpdate = () => {
        setConfirmingReservationUpdate(true);
        setData({
            id: props.id,
            customer_id: props.customer_id,
            travel_package_id: props.travel_package_id,
            date_of_reservation: props.date_of_reservation,
            price: props.price,
            number_of_people: props.number_of_people,
            discount: props.discount,
            discount_value: props.discount_value,
            total_price: props.total_price,
            proof_of_payment: props.proof_of_payment,
            status: props.status,
        });
    };

    const images = [
        { id: 1, name: "Image 1" },
        { id: 2, name: "Image 2" },
        { id: 3, name: "Image 3" },
        { id: 4, name: "Image 4" },
        { id: 5, name: "Image 5" },
    ];

    const deleteReservation = (e) => {
        e.preventDefault();

        destroy(route("dashboard.reservation.destroy", { id: props.id }), {
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const updateReservation = (e) => {
        e.preventDefault();
        console.log("Update Reservation :", data);
        post(route("dashboard.reservation.update", { id: props.id }), {
            forceFormData: true, // force form data to be sent as multipart/form-data
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingReservationDeletion(false);
        setConfirmingReservationUpdate(false);
        reset();
    };

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">{props.id}</td>
            <td className="px-6 py-4">{props.customer_id} </td>
            <td className="px-6 py-4">{props.travel_package_id} </td>
            <td className="px-6 py-4">{props.date_of_reservation} </td>
            <td className="px-6 py-4">{props.price} </td>
            <td className="px-6 py-4">{props.number_of_people} </td>
            <td className="px-6 py-4">{props.discount} </td>
            <td className="px-6 py-4">{props.discount_value} </td>
            <td className="px-6 py-4">{props.total_price} </td>
            <td className="px-6 py-4">{props.proof_of_payment} </td>
            <td className="px-6 py-4">{props.status} </td>

            <td className="px-6 py-4">
                <PrimaryButton
                    className="mr-2"
                    onClick={confirmReservationUpdate}
                >
                    Edit
                </PrimaryButton>
                <DangerButton onClick={confirmReservationDeletion}>
                    Delete
                </DangerButton>
            </td>
            <Modal show={confirmingReservationDeletion} onClose={closeModal}>
                <form onSubmit={deleteReservation} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Delete Account
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Are you sure to delete this Reservation? All of your
                        data will be removed.
                    </p>
                    <TextInput
                        id="id"
                        type="hidden"
                        name="id"
                        value={data.id}
                    />
                    {Object.keys(errors).map((key) => (
                        <div className="text-red-500 text-sm mt-4" key={key}>
                            {key} :{errors[key]}
                        </div>
                    ))}
                    <PrimaryButton type="reset" onClick={closeModal}>
                        Cancel
                    </PrimaryButton>
                    <DangerButton type="submit" disabled={processing}>
                        Delete
                    </DangerButton>
                </form>
            </Modal>
            <Modal show={confirmingReservationUpdate} onClose={closeModal}>
                <form
                    onSubmit={updateReservation}
                    className="p-6 w-full overflow-y-auto"
                >
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Update Reservation
                    </h2>
                    <InputLabel
                        htmlFor="date_of_reservation"
                        className="mt-4"
                        value="Reservation Name"
                    />
                    <TextInput
                        id="date_of_reservation"
                        type="text"
                        name="date_of_reservation"
                        label="Reservation Name"
                        value={data.date_of_reservation}
                        onChange={(e) =>
                            setData("date_of_reservation", e.target.value)
                        }
                        error={errors.date_of_reservation}
                        className=""
                    />
                    <InputLabel
                        htmlFor="description"
                        className="mt-4"
                        value="Reservation Description"
                    />
                    <TextInput
                        id="description"
                        type="text"
                        name="description"
                        label="Reservation Description"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        error={errors.description}
                        className=""
                    />
                    <InputLabel
                        htmlFor="facilities"
                        className="mt-4"
                        value="Facilities"
                    />
                    <TextAreaInput
                        id="facilities"
                        name={"facilities"}
                        onChange={(e) => setData("facilities", e.target.value)}
                        value={data.facilities}
                    />
                    {images.map((image) => (
                        <>
                            <div className="flex gap-x-5 items-center">
                                <InputLabel
                                    htmlFor={"image_" + image.id}
                                    className="mt-4"
                                    value={"Reservation " + image.name}
                                />
                                <img
                                    width={150}
                                    src={"/" + props["image_" + image.id]}
                                    alt={props.name + " " + image.name}
                                />
                                <TextInput
                                    id={"image_" + image.id}
                                    type="file"
                                    name={"image_" + image.id}
                                    label={"Reservation " + image.name}
                                    className=""
                                    onChange={(e) =>
                                        setData(
                                            "image_" + image.id,
                                            e.target.files[0]
                                        )
                                    }
                                />
                            </div>
                        </>
                    ))}
                    {progress && (
                        <div className="w-full h-2 bg-gray-200 rounded">
                            <div
                                className="h-2 bg-blue-500 rounded"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    )}

                    <PrimaryButton type="reset" onClick={closeModal}>
                        Cancel
                    </PrimaryButton>
                    <PrimaryButton type="submit" disabled={processing}>
                        Update
                    </PrimaryButton>
                </form>
            </Modal>
        </tr>
    );
};

const ReservationList = (props) => {
    let { reservations, travel_packages } = useContext(DashboardContext);
    const [confirmingReservationAdd, setConfirmingReservationAdd] =
        useState(false);
    const [rParam, setRParam] = useState(null);
    const { data, setData, post, processing, errors, reset, progress } =
        useForm({
            customer_id: "",
            travel_package_id: "",
            date_of_reservation: "",
            price: 0,
            number_of_people: 0,
            discount: 0,
            discount_value: 0,
            total_price: 0,
            proof_of_payment: "",
            status: "",
        });

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const rParam = urlParams.get("r");
        setRParam(rParam);
        if (rParam) {
            setConfirmingReservationAdd(true);
            console.log(travel_packages);
        }
    }, []);
    const images = [
        { id: 1, name: "Main" },
        { id: 2, name: "Room 1" },
        { id: 3, name: "Room 2" },
        { id: 4, name: "Room 3" },
        { id: 5, name: "Room 4" },
    ];

    const travel_packages_transformed = travel_packages.map((travel, index) => {
        return {
            id: travel.id,
            value: travel.package_name,
            label: travel.package_name,
            ...travel,
        };
    });

    const addReservation = (e) => {
        e.preventDefault();
        console.log("Add Reservation Data : ", data);
        post(route("dashboard.reservation.store"), {
            forceFormData: true,
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
            onError: (errors) => console.log(errors),
        });
    };

    const closeModal = () => {
        setConfirmingReservationAdd(false);
        reset();
    };

    const [discountValue, setDiscountValue] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const onChangePriceOrDiscount = (e) => {
        setData(e.target.name, e.target.value);
        console.log(data.price * data.discount);
        setDiscountValue(data.price * data.discount * 10);
        setTotalPrice(data.price - discountValue);
    };

    const handleTravelPackages = (travel_package) => {
        setData("travel_package_id", travel_package.id);
        console.log(data);
    };

    return (
        <>
            <SecondaryButton
                className="ml-4 mb-4"
                onClick={() => {
                    setConfirmingReservationAdd(true);
                }}
            >
                Add New Reservation
            </SecondaryButton>
            <table className="container mx-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Customer Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Travel Package Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date of Reservation
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Number of People
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Discount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Discount Value
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Proof of Payment
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((item) => (
                        <SingleReservation key={item.id} {...item} />
                    ))}
                </tbody>
            </table>
            <Modal
                show={confirmingReservationAdd}
                onClose={closeModal}
                className="gap-5"
                maxWidth="6xl"
            >
                <form
                    onSubmit={addReservation}
                    className="p-5 w-full grid grid-cols-3"
                >
                    <h1 className="text-2xl font-bold">Add Reservation</h1>
                    <div className="mb-5">
                        <InputLabel
                            htmlFor="date_of_reservation"
                            className="mt-4"
                            value="Date Of Reservation"
                        />
                        <TextInput
                            id="date_of_reservation"
                            type="date"
                            name="date_of_reservation"
                            label="Reservation Name"
                            className="w-full"
                            onChange={(e) =>
                                setData("date_of_reservation", e.target.value)
                            }
                            value={data.date_of_reservation}
                        />
                    </div>
                    <div className="mb-5">
                        <InputLabel
                            htmlFor="price"
                            className="mt-4"
                            value="Reservation Price"
                        />
                        <TextInput
                            id="price"
                            type="number"
                            name="price"
                            label="Reservation Price"
                            className="w-full"
                            onChange={onChangePriceOrDiscount}
                            value={data.price}
                        />
                    </div>
                    <div className="mb-5">
                        <InputLabel
                            htmlFor="number_of_people"
                            className="mt-4"
                            value="Number Of People"
                        />
                        <TextInput
                            id="number_of_people"
                            type="number"
                            name="number_of_people"
                            label="Number Of People"
                            className="w-full"
                            onChange={(e) =>
                                setData("number_of_people", e.target.value)
                            }
                            value={data.number_of_people}
                        />
                    </div>
                    <div className="mb-5">
                        <InputLabel
                            htmlFor="discount"
                            className="mt-4"
                            value="Discount"
                        />
                        <TextInput
                            id="discount"
                            type="number"
                            step={0.01}
                            name="discount"
                            label="Discount"
                            className="w-full"
                            onChange={onChangePriceOrDiscount}
                            value={data.discount}
                        />
                    </div>
                    <div className="mb-5">
                        <InputLabel
                            htmlFor="discount_value"
                            className="mt-4"
                            value="Discount Value"
                        />
                        <TextInput
                            id="discount_value"
                            type="number"
                            step={0.01}
                            name="discount_value"
                            label="Discount Value"
                            className="w-full"
                            onChange={(e) =>
                                setData("discount_value", e.target.value)
                            }
                            value={discountValue}
                        />
                    </div>
                    <div className="mb-3">
                        <InputLabel
                            htmlFor="total_price"
                            className="mt-4"
                            value="Reservation Price"
                        />
                        <TextInput
                            id="total_price"
                            type="number"
                            name="total_price"
                            label="Reservation Price"
                            className="w-full"
                            onChange={onChangePriceOrDiscount}
                            value={totalPrice}
                        />
                    </div>

                    <div className="mb-3">
                        <RadioButton
                            options={travel_packages_transformed}
                            label="Travel Packages"
                            onData={handleTravelPackages}
                            className="flex gap-2 flex-wrap w-full"
                        />
                    </div>

                    {images.map((image) => (
                        <div key={image.id}>
                            <InputLabel
                                htmlFor={`image_${image.id}`}
                                className="mt-4"
                                value={image.name}
                            />
                            <TextInput
                                id={`image_${image.id}`}
                                type="file"
                                name={`image_${image.id}`}
                                label={image.name}
                                className=""
                                onChange={(e) =>
                                    setData(
                                        `image_${image.id}`,
                                        e.target.files[0]
                                    )
                                }
                            />
                        </div>
                    ))}
                    {progress && (
                        <div className="w-full h-2 bg-gray-200 rounded">
                            <div
                                className="h-2 bg-blue-500 rounded"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    )}
                    {Object.keys(errors).map((key) => (
                        <div className="text-red-500 text-sm mt-4" key={key}>
                            {key} :{errors[key]}
                        </div>
                    ))}
                    <PrimaryButton
                        type="reset"
                        className="w-fit mt-3"
                        onClick={closeModal}
                    >
                        Cancel
                    </PrimaryButton>
                    <PrimaryButton
                        type="submit"
                        className="w-fit mt-3"
                        disabled={processing}
                    >
                        Add
                    </PrimaryButton>
                </form>
            </Modal>
        </>
    );
};

export default ReservationList;
