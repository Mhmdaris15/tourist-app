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

const SingleHostelry = (props) => {
    const [confirmingHostelryDeletion, setConfirmingHostelryDeletion] =
        useState(false);
    const [confirmingHostelryUpdate, setConfirmingHostelryUpdate] =
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
        hostelry_title: props.hostelry_title,
        hostelry_description: props.hostelry_description,
        facilities: props.facilities,
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

    const confirmHostelryDeletion = () => {
        setConfirmingHostelryDeletion(true);
        setData({
            id: props.id,
        });
    };

    const confirmHostelryUpdate = () => {
        setConfirmingHostelryUpdate(true);
        setData({
            id: props.id,
            hostelry_title: props.hostelry_title,
            hostelry_description: props.hostelry_description,
            facilities: props.facilities,
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

    const deleteHostelry = (e) => {
        e.preventDefault();

        destroy(route("dashboard.hostelry.destroy", { id: props.id }), {
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const updateHostelry = (e) => {
        e.preventDefault();
        console.log("Update Hostelry :", data);
        post(route("dashboard.hostelry.update", { id: props.id }), {
            forceFormData: true, // force form data to be sent as multipart/form-data
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingHostelryDeletion(false);
        setConfirmingHostelryUpdate(false);
        reset();
    };

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">{props.hostelry_title}</td>
            <td className="px-6 py-4">{props.hostelry_description}</td>
            <td className="px-6 py-4">{props.facilities}</td>

            {images.map((image) => (
                <td className="px-6 py-4">
                    <figure>
                        <img
                            src={"/" + props["image_" + image.id]}
                            alt={props.hostelry_title + " " + image.name}
                        />
                    </figure>
                </td>
            ))}

            <td className="px-6 py-4">
                <PrimaryButton className="mr-2" onClick={confirmHostelryUpdate}>
                    Edit
                </PrimaryButton>
                <DangerButton onClick={confirmHostelryDeletion}>
                    Delete
                </DangerButton>
            </td>
            <Modal show={confirmingHostelryDeletion} onClose={closeModal}>
                <form onSubmit={deleteHostelry} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Delete Account
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Are you sure to delete this Hostelry? All of your data
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
            <Modal show={confirmingHostelryUpdate} onClose={closeModal}>
                <form
                    onSubmit={updateHostelry}
                    className="p-6 w-full overflow-y-auto"
                >
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Update Account
                    </h2>
                    <InputLabel
                        htmlFor="hostelry_title"
                        className="mt-4"
                        value="Hostelry Title"
                    />
                    <TextInput
                        id="hostelry_title"
                        type="text"
                        name="hostelry_title"
                        label="Hostelry Title"
                        value={data.hostelry_title}
                        onChange={(e) =>
                            setData("hostelry_title", e.target.value)
                        }
                        error={errors.hostelry_title}
                        className=""
                    />
                    <InputLabel
                        htmlFor="hostelry_description"
                        className="mt-4"
                        value="Hostelry Description"
                    />
                    <TextInput
                        id="hostelry_description"
                        type="text"
                        name="hostelry_description"
                        label="Hostelry Description"
                        value={data.hostelry_description}
                        onChange={(e) =>
                            setData("hostelry_description", e.target.value)
                        }
                        error={errors.hostelry_description}
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
                                    value={"Hostelry " + image.name}
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
                                    label={"Hostelry " + image.name}
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

const HostelryList = (props) => {
    let { hostelries, categories } = useContext(DashboardContext);
    const [confirmingHostelryAdd, setConfirmingHostelryAdd] = useState(false);
    const { data, setData, post, processing, errors, reset, progress } =
        useForm({
            hostelry_title: "",
            hostelry_description: "",
            facilities: "",
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

    const addHostelry = (e) => {
        e.preventDefault();
        console.log("Add Hostelry Data : ", data);
        post(route("dashboard.hostelry.store"), {
            forceFormData: true,
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
            onError: (errors) => console.log(errors),
        });
    };

    const closeModal = () => {
        setConfirmingHostelryAdd(false);
        reset();
    };

    return (
        <>
            <SecondaryButton
                className="ml-4 mb-4"
                onClick={() => {
                    setConfirmingHostelryAdd(true);
                }}
            >
                Add New Hostelry
            </SecondaryButton>
            <table className="container mx-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Hostelry Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Hostelry Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Facilities
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Hostelry Image 1
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Hostelry Image 2
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Hostelry Image 3
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Hostelry Image 4
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Hostelry Image 5
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {hostelries.map((item) => (
                        <SingleHostelry key={item.id} {...item} />
                    ))}
                </tbody>
            </table>
            <Modal
                show={confirmingHostelryAdd}
                onClose={closeModal}
                maxWidth="xl"
            >
                <form onSubmit={addHostelry} className="p-5 w-full">
                    <h1 className="text-2xl font-bold">Add Hostelry</h1>
                    <InputLabel
                        htmlFor="hostelry_title"
                        className="mt-4"
                        value="Hostelry Title"
                    />
                    <TextInput
                        id="hostelry_title"
                        type="text"
                        name="hostelry_title"
                        label="Hostelry Title"
                        className=""
                        onChange={(e) =>
                            setData("hostelry_title", e.target.value)
                        }
                        value={data.hostelry_title}
                    />
                    <InputLabel
                        htmlFor="hostelry_description"
                        className="mt-4"
                        value="Hostelry Description"
                    />
                    <TextInput
                        id="hostelry_description"
                        type="text"
                        name="hostelry_description"
                        label="Hostelry Description"
                        className=""
                        onChange={(e) =>
                            setData("hostelry_description", e.target.value)
                        }
                        value={data.hostelry_description}
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

export default HostelryList;
