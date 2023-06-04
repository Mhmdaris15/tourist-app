import React, { useState, useEffect, useContext } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import Dropdown from "@/Components/Dropdown";
import RadioButton from "@/Components/RadioButton";
import InputLabel from "@/Components/InputLabel";
import TextAreaInput from "@/Components/TextAreaInput";
import { DashboardContext } from "../Dashboard";

const SingleTravelPackage = (props) => {
    const [
        confirmingTravelPackageDeletion,
        setConfirmingTravelPackageDeletion,
    ] = useState(false);
    const [confirmingTravelPackageUpdate, setConfirmingTravelPackageUpdate] =
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
        package_name: props.package_name,
        description: props.description,
        facilities: props.facilities,
        price: props.price,
        discount: props.discount,
        image_1: "Default Image",
        image_2: "Default Image",
        image_3: "Default Image",
        image_4: "Default Image",
        image_5: "Default Image",
    });

    useEffect(() => {
        setData({
            id: props.id,
        });
    }, [props.id]);

    const confirmTravelPackageDeletion = () => {
        setConfirmingTravelPackageDeletion(true);
        setData({
            id: props.id,
        });
    };

    const confirmTravelPackageUpdate = () => {
        setConfirmingTravelPackageUpdate(true);
        setData({
            id: props.id,
            package_name: props.package_name,
            description: props.description,
            facilities: props.facilities,
            price: props.price,
            discount: props.discount,
            image_1: props.image_1,
            image_2: props.image_2,
            image_3: props.image_3,
            image_4: props.image_4,
            image_5: props.image_5,
        });
    };

    const images = [
        { id: 1, name: "Image 1" },
        { id: 2, name: "Image 2" },
        { id: 3, name: "Image 3" },
        { id: 4, name: "Image 4" },
        { id: 5, name: "Image 5" },
    ];

    const deleteTravelPackage = (e) => {
        e.preventDefault();

        destroy(route("dashboard.travel-package.destroy", { id: props.id }), {
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const updateTravelPackage = (e) => {
        e.preventDefault();
        console.log("Update TravelPackage :", data);
        post(route("dashboard.travel-package.update", { id: props.id }), {
            forceFormData: true, // force form data to be sent as multipart/form-data
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingTravelPackageDeletion(false);
        setConfirmingTravelPackageUpdate(false);
        reset();
    };

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">{props.package_name}</td>
            <td className="px-6 py-4">{props.description}</td>
            <td className="px-6 py-4">{props.facilities}</td>
            <td className="px-6 py-4">{props.price}</td>
            <td className="px-6 py-4">{props.discount}</td>

            {images.map((image) => (
                <td className="px-6 py-4">
                    <figure>
                        <img
                            src={"/" + props["image_" + image.id]}
                            alt={props.package_name + " " + image.name}
                        />
                    </figure>
                </td>
            ))}

            <td className="px-6 py-4">
                <PrimaryButton
                    className="mr-2"
                    onClick={confirmTravelPackageUpdate}
                >
                    Edit
                </PrimaryButton>
                <DangerButton onClick={confirmTravelPackageDeletion}>
                    Delete
                </DangerButton>
            </td>
            <Modal show={confirmingTravelPackageDeletion} onClose={closeModal}>
                <form onSubmit={deleteTravelPackage} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Delete Account
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Are you sure to delete this Travel Package? All of your
                        data will be removed.
                    </p>
                    <TextInput
                        id="id"
                        type="hidden"
                        name="id"
                        value={data.id}
                    />
                    <PrimaryButton type="reset" onClick={closeModal}>
                        Cancel
                    </PrimaryButton>
                    <DangerButton type="submit" disabled={processing}>
                        Delete
                    </DangerButton>
                </form>
            </Modal>
            <Modal show={confirmingTravelPackageUpdate} onClose={closeModal}>
                <form
                    onSubmit={updateTravelPackage}
                    className="p-6 w-full overflow-y-auto"
                >
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Update Account
                    </h2>
                    <InputLabel
                        htmlFor="package_name"
                        className="mt-4"
                        value="Travel Package Name"
                    />
                    <TextInput
                        id="package_name"
                        type="text"
                        name="package_name"
                        label="Travel Package Name"
                        value={data.package_name}
                        onChange={(e) =>
                            setData("package_name", e.target.value)
                        }
                        error={errors.package_name}
                        className=""
                    />
                    <InputLabel
                        htmlFor="description"
                        className="mt-4"
                        value="Travel Package Description"
                    />
                    <TextInput
                        id="description"
                        type="text"
                        name="description"
                        label="Travel Package Description"
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
                                    value={"Travel Package " + image.name}
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
                                    label={"Travel Package " + image.name}
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
                    {Object.keys(errors).map((key) => (
                        <div className="text-red-500 text-sm mt-4" key={key}>
                            {key} :{errors[key]}
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

const TravelPackageList = (props) => {
    let { travelPackages } = useContext(DashboardContext);
    const [confirmingTravelPackageAdd, setConfirmingTravelPackageAdd] =
        useState(false);
    const { data, setData, post, processing, errors, reset, progress } =
        useForm({
            package_name: "",
            description: "",
            facilities: "",
            price: "",
            discount: 0,
            image_1: "Default Image",
            image_2: "Default Image",
            image_3: "Default Image",
            image_4: "Default Image",
            image_5: "Default Image",
        });

    const images = [
        { id: 1, name: "Main" },
        { id: 2, name: "Room 1" },
        { id: 3, name: "Room 2" },
        { id: 4, name: "Room 3" },
        { id: 5, name: "Room 4" },
    ];

    const addTravelPackage = (e) => {
        e.preventDefault();
        console.log("Add Travel Package Data : ", data);
        post(route("dashboard.travel-package.store"), {
            forceFormData: true,
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
            onError: (errors) => console.log(errors),
        });
    };

    const closeModal = () => {
        setConfirmingTravelPackageAdd(false);
        reset();
    };

    return (
        <>
            <SecondaryButton
                className="ml-4 mb-4"
                onClick={() => {
                    setConfirmingTravelPackageAdd(true);
                }}
            >
                Add New Travel Package
            </SecondaryButton>
            <table className="container mx-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Travel Package Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Travel Package Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Facilities
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Discount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Travel Package Image 1
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Travel Package Image 2
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Travel Package Image 3
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Travel Package Image 4
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Travel Package Image 5
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {travelPackages.map((item) => (
                        <SingleTravelPackage key={item.id} {...item} />
                    ))}
                </tbody>
            </table>
            <Modal
                show={confirmingTravelPackageAdd}
                onClose={closeModal}
                maxWidth="6xl"
            >
                <form
                    onSubmit={addTravelPackage}
                    className="p-5 w-full grid grid-cols-3 gap-3"
                >
                    <h1 className="text-2xl font-bold">Add Travel Package</h1>
                    <div className="mb-3">
                        <InputLabel
                            htmlFor="package_name"
                            className="mt-4"
                            value="Travel Package Name"
                        />
                        <TextInput
                            id="package_name"
                            type="text"
                            name="package_name"
                            label="Travel Package Name"
                            className="w-full"
                            onChange={(e) =>
                                setData("package_name", e.target.value)
                            }
                            value={data.package_name}
                        />
                    </div>
                    <div className="mb-3">
                        <InputLabel
                            htmlFor="description"
                            className="mt-4"
                            value="Travel Package Description"
                        />
                        <TextInput
                            id="description"
                            type="text"
                            name="description"
                            label="Travel Package Description"
                            className="w-full"
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            value={data.description}
                        />
                    </div>
                    <div className="mb-3">
                        <InputLabel
                            htmlFor="facilities"
                            className="mt-4"
                            value="Facilities"
                        />
                        <TextAreaInput
                            id="facilities"
                            name={"facilities"}
                            onChange={(e) =>
                                setData("facilities", e.target.value)
                            }
                            className={"w-full"}
                            value={data.facilities}
                        />
                    </div>
                    <div className="mb-3">
                        <InputLabel
                            htmlFor="price"
                            className="mt-4"
                            value="Travel Package Price"
                        />
                        <TextInput
                            id="price"
                            type="text"
                            name="price"
                            label="Travel Package Price"
                            className="w-full"
                            onChange={(e) => setData("price", e.target.value)}
                            value={data.price}
                        />
                    </div>
                    <div className="mb-3">
                        <InputLabel
                            htmlFor="discount"
                            className="mt-4"
                            value="Travel Package Discount"
                        />

                        <TextInput
                            id="discount"
                            type="number"
                            step="0.01"
                            name="discount"
                            label="Travel Package Discount"
                            className="w-full"
                            onChange={(e) =>
                                setData("discount", e.target.value)
                            }
                            value={data.discount}
                        />
                    </div>
                    {images.map((image) => (
                        <div className="mb-3" key={image.id}>
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
                                className="w-full"
                                onChange={(e) =>
                                    setData(
                                        `image_${image.id}`,
                                        e.target.files[0]
                                    )
                                }
                            />
                        </div>
                    ))}
                    {Object.keys(errors).map((key) => (
                        <div className="text-red-500 text-sm mt-4" key={key}>
                            {key} :{errors[key]}
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
                    <div className="mb-3">
                        <PrimaryButton type="reset" onClick={closeModal}>
                            Cancel
                        </PrimaryButton>
                        <PrimaryButton type="submit" disabled={processing}>
                            Add
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default TravelPackageList;
