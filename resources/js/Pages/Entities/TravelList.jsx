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

const SingleTravel = (props) => {
    const [confirmingTravelDeletion, setConfirmingTravelDeletion] =
        useState(false);
    const [confirmingTravelUpdate, setConfirmingTravelUpdate] = useState(false);

    let { categories } = useContext(DashboardContext);
    console.log("Props", props);

    categories = categories.map((category) => {
        return {
            id: category.id,
            value: category.category_name,
            label: category.category_name,
        };
    });

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
        travel_title: props.travel_title,
        travel_description: props.travel_description,
        travel_category_id: props.travel_category_id,
        facilities: props.facilities,
        image_1: null,
        image_2: null,
        image_3: null,
        image_4: null,
        image_5: null,
    });

    useEffect(() => {
        setData({
            id: props.id,
        });
    }, [props.id]);

    const confirmTravelDeletion = () => {
        setConfirmingTravelDeletion(true);
        setData({
            id: props.id,
        });
    };

    const confirmTravelUpdate = () => {
        setConfirmingTravelUpdate(true);
        setData({
            id: props.id,
            travel_title: props.travel_title,
            travel_description: props.travel_description,
            travel_category_id: props.travel_category_id,
            facilities: props.facilities,
            image_1: props.image_1,
            image_2: props.image_2,
            image_3: props.image_3,
            image_4: props.image_4,
            image_5: props.image_5,
        });
    };

    const deleteTravel = (e) => {
        // console.log("deleteTravel");
        e.preventDefault();

        destroy(
            route("dashboard.tourist-attraction.destroy", { id: props.id }),
            {
                preserveScroll: true, // preserve scroll position on page
                onSuccess: () => closeModal(),
                onFinish: () => reset(),
            }
        );
    };

    const updateTravel = (e) => {
        e.preventDefault();
        console.log("Update Tourist Attraction :", data);
        post(route("dashboard.tourist-attraction.update", { id: props.id }), {
            forceFormData: true, // force form data to be sent as multipart/form-data
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
            onError: (err) => console.log(err),
        });
    };

    const closeModal = () => {
        setConfirmingTravelDeletion(false);
        setConfirmingTravelUpdate(false);
        reset();
    };

    const handleCategoryData = (category) => {
        setData("travel_category_id", category.id);
    };
    const theCategory = categories.find(
        (category) => category.id === props.travel_category_id
    );
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">{props.travel_title}</td>
            <td className="px-6 py-4">{props.travel_description}</td>
            <td className="px-6 py-4">{theCategory.value}</td>
            <td className="px-6 py-4">{props.facilities}</td>
            <td className="px-6 py-4">
                <figure>
                    <img
                        src={"/" + props.image_1}
                        alt={props.name + " Image"}
                    />
                </figure>
            </td>
            <td className="px-6 py-4">
                <figure>
                    <img
                        src={"/" + props.image_2}
                        alt={props.name + " Image"}
                    />
                </figure>
            </td>
            <td className="px-6 py-4">
                <figure>
                    <img
                        src={"/" + props.image_3}
                        alt={props.name + " Image"}
                    />
                </figure>
            </td>
            <td className="px-6 py-4">
                <figure>
                    <img
                        src={"/" + props.image_4}
                        alt={props.name + " Image"}
                    />
                </figure>
            </td>
            <td className="px-6 py-4">
                <figure>
                    <img
                        src={"/" + props.image_5}
                        alt={props.name + " Image"}
                    />
                </figure>
            </td>
            <td className="px-6 py-4">
                <PrimaryButton className="mr-2" onClick={confirmTravelUpdate}>
                    Edit
                </PrimaryButton>
                <DangerButton onClick={confirmTravelDeletion}>
                    Delete
                </DangerButton>
            </td>
            <Modal show={confirmingTravelDeletion} onClose={closeModal}>
                <form onSubmit={deleteTravel} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Delete Account
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Are you sure to delete this Travel? All of your data
                        will be removed.
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
            <Modal show={confirmingTravelUpdate} onClose={closeModal}>
                <form
                    onSubmit={updateTravel}
                    className="p-6 w-full overflow-y-auto"
                >
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Update Account
                    </h2>
                    <InputLabel
                        htmlFor="travel_title"
                        className="mt-4"
                        value="Travel Title"
                    />
                    <TextInput
                        id="travel_title"
                        type="text"
                        name="travel_title"
                        label="Travel Title"
                        value={data.travel_title}
                        onChange={(e) =>
                            setData("travel_title", e.target.value)
                        }
                        error={errors.travel_title}
                        className=""
                    />
                    <InputLabel
                        htmlFor="travel_description"
                        className="mt-4"
                        value="Travel Description"
                    />
                    <TextInput
                        id="travel_description"
                        type="text"
                        name="travel_description"
                        label="Travel Description"
                        value={data.travel_description}
                        onChange={(e) =>
                            setData("travel_description", e.target.value)
                        }
                        error={errors.travel_description}
                        className=""
                    />
                    <InputLabel
                        htmlFor="travel_category"
                        className="mt-4"
                        value="Travel Category"
                    />
                    <RadioButton
                        options={categories}
                        label="Travel Category"
                        onData={handleCategoryData}
                        className="flex gap-2 flex-wrap w-full"
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
                    <div className="flex gap-x-5 items-center">
                        <InputLabel
                            htmlFor="image_1"
                            className="mt-4"
                            value="Travel Image 1"
                        />
                        <img
                            width={150}
                            src={"/" + props.image_1}
                            alt={props.name + " Image 1"}
                        />
                        <TextInput
                            id="image_1"
                            type="file"
                            name="image_1"
                            label="Travel Image 1"
                            className=""
                            onChange={(e) =>
                                setData("image_1", e.target.files[0])
                            }
                        />
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <InputLabel
                            htmlFor="image_2"
                            className="mt-4"
                            value="Travel Image 2"
                        />
                        <img
                            width={150}
                            src={"/" + props.image_2}
                            alt={props.name + " Image 2"}
                        />
                        <TextInput
                            id="image_2"
                            type="file"
                            name="image_2"
                            label="Travel Image 2"
                            className=""
                            onChange={(e) =>
                                setData("image_2", e.target.files[0])
                            }
                        />
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <InputLabel
                            htmlFor="image_3"
                            className="mt-4"
                            value="Travel Image 3"
                        />
                        <img
                            width={150}
                            src={"/" + props.image_3}
                            alt={props.name + " Image 3"}
                        />
                        <TextInput
                            id="image_3"
                            type="file"
                            name="image_3"
                            label="Travel Image 3"
                            className=""
                            onChange={(e) =>
                                setData("image_3", e.target.files[0])
                            }
                        />
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <InputLabel
                            htmlFor="image_4"
                            className="mt-4"
                            value="Travel Image 4"
                        />
                        <img
                            width={150}
                            src={"/" + props.image_4}
                            alt={props.name + " Image 4"}
                        />
                        <TextInput
                            id="image_4"
                            type="file"
                            name="image_4"
                            label="Travel Image 4"
                            className=""
                            onChange={(e) =>
                                setData("image_4", e.target.files[0])
                            }
                        />
                    </div>
                    <div className="flex gap-x-5 items-center">
                        <InputLabel
                            htmlFor="image_5"
                            className="mt-4"
                            value="Travel Image 5"
                        />
                        <img
                            width={150}
                            src={"/" + props.image_5}
                            alt={props.name + " Image 5"}
                        />
                        <TextInput
                            id="image_5"
                            type="file"
                            name="image_5"
                            label="Travel Image 5"
                            className=""
                            onChange={(e) =>
                                setData("image_5", e.target.files[0])
                            }
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

const TravelList = (props) => {
    let { travels, categories } = useContext(DashboardContext);
    const [confirmingTravelAdd, setConfirmingTravelAdd] = useState(false);
    const { data, setData, post, processing, errors, reset, progress } =
        useForm({
            travel_title: "",
            travel_description: "",
            travel_category_id: "",
            facilities: "",
            image_1: null,
            image_2: null,
            image_3: null,
            image_4: null,
            image_5: null,
        });

    categories = categories.map((category) => {
        return {
            id: category.id,
            value: category.category_name,
            label: category.category_name,
        };
    });

    const addTravel = (e) => {
        e.preventDefault();
        console.log("Add Travel Data : ", data);
        post(route("dashboard.tourist-attraction.store"), {
            forceFormData: true,
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
            onError: (errors) => console.log(errors),
        });
    };

    const closeModal = () => {
        setConfirmingTravelAdd(false);
        reset();
    };

    const handleCategoryData = (category) => {
        setData("travel_category_id", category.id);
    };

    return (
        <>
            <SecondaryButton
                className="ml-4 mb-4"
                onClick={() => {
                    setConfirmingTravelAdd(true);
                }}
            >
                Add New Tourist Attraction
            </SecondaryButton>
            <table className="container mx-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Travel Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Travel Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Travel Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Facilities
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Travel Image 1
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Travel Image 2
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Travel Image 3
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Travel Image 4
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Travel Image 5
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {travels.map((item) => (
                        <SingleTravel key={item.id} {...item} />
                    ))}
                </tbody>
            </table>
            <Modal
                show={confirmingTravelAdd}
                onClose={closeModal}
                maxWidth="xl"
            >
                <form onSubmit={addTravel} className="p-5 w-full">
                    <h1 className="text-2xl font-bold">
                        Add Tourist Attraction
                    </h1>
                    <InputLabel
                        htmlFor="travel_title"
                        className="mt-4"
                        value="Travel Title"
                    />
                    <TextInput
                        id="travel_title"
                        type="text"
                        name="travel_title"
                        label="Travel Title"
                        className=""
                        onChange={(e) =>
                            setData("travel_title", e.target.value)
                        }
                        value={data.travel_title}
                    />
                    <InputLabel
                        htmlFor="travel_description"
                        className="mt-4"
                        value="Travel Description"
                    />
                    <TextInput
                        id="travel_description"
                        type="text"
                        name="travel_description"
                        label="Travel Description"
                        className=""
                        onChange={(e) =>
                            setData("travel_description", e.target.value)
                        }
                        value={data.travel_description}
                    />
                    <InputLabel
                        htmlFor="travel_category"
                        className="mt-4"
                        value="Travel Category"
                    />
                    <RadioButton
                        options={categories}
                        label="Travel Category"
                        onData={handleCategoryData}
                        className="flex gap-2 flex-wrap w-full"
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
                    <InputLabel
                        htmlFor="image_1"
                        className="mt-4"
                        value="Travel Image 1"
                    />
                    <TextInput
                        id="image_1"
                        type="file"
                        name="image_1"
                        label="Travel Image 1"
                        className=""
                        onChange={(e) => setData("image_1", e.target.files[0])}
                    />
                    <InputLabel
                        htmlFor="image_2"
                        className="mt-4"
                        value="Travel Image 2"
                    />
                    <TextInput
                        id="image_2"
                        type="file"
                        name="image_2"
                        label="Travel Image 2"
                        className=""
                        onChange={(e) => setData("image_2", e.target.files[0])}
                    />
                    <InputLabel
                        htmlFor="image_3"
                        className="mt-4"
                        value="Travel Image 3"
                    />
                    <TextInput
                        id="image_3"
                        type="file"
                        name="image_3"
                        label="Travel Image 3"
                        className=""
                        onChange={(e) => setData("image_3", e.target.files[0])}
                    />
                    <InputLabel
                        htmlFor="image_4"
                        className="mt-4"
                        value="Travel Image 4"
                    />
                    <TextInput
                        id="image_4"
                        type="file"
                        name="image_4"
                        label="Travel Image 4"
                        className=""
                        onChange={(e) => setData("image_4", e.target.files[0])}
                    />
                    <InputLabel
                        htmlFor="image_5"
                        className="mt-4"
                        value="Travel Image 5"
                    />
                    <TextInput
                        id="image_5"
                        type="file"
                        name="image_5"
                        label="Travel Image 5"
                        className=""
                        onChange={(e) => setData("image_5", e.target.files[0])}
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
                        Add
                    </PrimaryButton>
                </form>
            </Modal>
        </>
    );
};

export default TravelList;
