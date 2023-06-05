import React, { useState, useEffect, useContext, useRef } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Modal from "@/Components/Modal";
import { useForm, usePage } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
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
    const {
        props: {
            auth: {
                user: { id: user_id },
            },
        },
    } = usePage();

    console.log(user_id);
    const priceRef = useRef(null);
    const discountRef = useRef(null);
    const discountValueRef = useRef(null);
    const totalPriceRef = useRef(null);

    const [rParam, setRParam] = useState(null);
    const { data, setData, post, processing, errors, reset, progress } =
        useForm({
            date_of_reservation: Date.now(),
            number_of_people: parseInt(0),
            price: parseFloat(0),
            discount: parseFloat(0),
            discount_value: parseFloat(0),
            total_price: parseFloat(0),
            proof_of_payment: "",
            status: "Pending",
            travel_package_id: parseInt(0),
            customer_id: user_id,
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

    const travel_packages_transformed = travel_packages.map((travel, index) => {
        return {
            id: travel.id,
            value: travel.package_name,
            label: travel.package_name,
            ...travel,
        };
    });

    const statuses = [
        { value: "Pending", label: "Pending" },
        { value: "Approved", label: "Approved" },
        { value: "Rejected", label: "Rejected" },
    ];

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

    const handleStatus = (status) => {
        setData("status", status.value);
    };

    const handleTravelPackages = (travel_package) => {
        priceRef.current.value = travel_package.price;
        discountRef.current.value = travel_package.discount;
        discountValueRef.current.value =
            priceRef.current.value *
            discountRef.current.value *
            data.number_of_people;
        totalPriceRef.current.value =
            priceRef.current.value * data.number_of_people -
            discountValueRef.current.value;

        setData("price", parseInt(priceRef.current.value));
        setData("discount", parseInt(discountRef.current.value));
        setData("discount_value", parseInt(discountValueRef.current.value));
        setData("total_price", parseInt(totalPriceRef.current.value));
        setData("travel_package_id", parseInt(travel_package.id));
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
                    <h1 className="text-4xl font-bold">Add Reservation</h1>
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
                            step={0.1}
                            type="number"
                            name="price"
                            label="Reservation Price"
                            className="w-full"
                            disabled={true}
                            ref={priceRef}
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
                            disabled={true}
                            ref={discountRef}
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
                            disabled={true}
                            ref={discountValueRef}
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
                            step={0.1}
                            name="total_price"
                            label="Reservation Price"
                            className="w-full"
                            disabled={true}
                            ref={totalPriceRef}
                        />
                    </div>

                    <div className="mb-3 col-span-2 w-full">
                        <InputLabel
                            htmlFor="travel_package"
                            className="mt-4"
                            value="Travel Package"
                        />
                        <RadioButton
                            options={travel_packages_transformed}
                            label="Travel Packages"
                            onData={handleTravelPackages}
                            className="flex gap-2 flex-wrap w-full"
                        />
                    </div>
                    <div className="mb-3">
                        <InputLabel
                            htmlFor="proof_of_payment"
                            className="mt-4"
                            value="Proof Of Payment"
                        />
                        <TextInput
                            id="proof_of_payment"
                            type="file"
                            name="proof_of_payment"
                            label="Proof of Payment"
                            className="w-full"
                            onChange={(e) =>
                                setData("proof_of_payment", e.target.files[0])
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <InputLabel
                            htmlFor="status"
                            className="mt-4"
                            value="Status of Payment"
                        />
                        <RadioButton
                            options={statuses}
                            label="Status of Payment"
                            onData={handleStatus}
                            className="flex gap-2 flex-wrap w-full"
                        />
                    </div>
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
                    <div className="mb-3 flex gap-3 items-end">
                        <PrimaryButton
                            type="reset"
                            className="w-fit h-fit mt-3"
                            onClick={closeModal}
                        >
                            Cancel
                        </PrimaryButton>
                        <PrimaryButton
                            type="submit"
                            className="w-fit h-fit mt-3"
                            disabled={processing}
                        >
                            Add
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default ReservationList;
