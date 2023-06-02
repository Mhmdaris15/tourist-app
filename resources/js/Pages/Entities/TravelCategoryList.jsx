import React, { useState, useEffect, useContext } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import { DashboardContext } from "../Dashboard";

const SingleTravelCategory = (props) => {
    const [
        confirmingTravelCategoryDeletion,
        setConfirmingTravelCategoryDeletion,
    ] = useState(false);
    const [confirmingTravelCategoryUpdate, setConfirmingTravelCategoryUpdate] =
        useState(false);

    const {
        data,
        setData,
        delete: destroy,
        patch,
        processing,
        reset,
        errors,
    } = useForm({
        id: "",
        category_name: props.category_name,
    });

    useEffect(() => {
        setData({
            id: props.id,
        });
    }, [props.id]);

    const confirmTravelCategoryDeletion = () => {
        setConfirmingTravelCategoryDeletion(true);
        setData({
            id: props.id,
        });
    };

    const confirmTravelCategoryUpdate = () => {
        setConfirmingTravelCategoryUpdate(true);
        setData({
            id: props.id,
            category_name: props.category_name,
        });
    };

    const deleteTravelCategory = (e) => {
        // console.log("deleteTravelCategory");
        e.preventDefault();

        destroy(route("dashboard.travel-category.destroy", { id: props.id }), {
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const updateTravelCategory = (e) => {
        e.preventDefault();

        patch(route("dashboard.travel-category.update", { id: props.id }), {
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingTravelCategoryDeletion(false);
        setConfirmingTravelCategoryUpdate(false);
        reset();
    };

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            {/* <figure>
                    <img src={imageURL} alt={props.name + " Image"} />
                </figure> */}
            <td className="px-6 py-4">{props.category_name}</td>
            <td className="px-6 py-4">
                <PrimaryButton
                    className="mr-2"
                    onClick={confirmTravelCategoryUpdate}
                >
                    Edit
                </PrimaryButton>
                <DangerButton onClick={confirmTravelCategoryDeletion}>
                    Delete
                </DangerButton>
            </td>
            <Modal show={confirmingTravelCategoryDeletion} onClose={closeModal}>
                <form onSubmit={deleteTravelCategory} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Delete Account
                    </h2>
                    <p className="my-2 text-sm text-gray-600 dark:text-gray-400">
                        Are you sure you want to delete this travel category?
                        All data that connected with this category will be
                        deleted.
                    </p>
                    <TextInput
                        id="id"
                        type="hidden"
                        name="id"
                        value={data.id}
                    />
                    {/* <input type="hidden" name="id" id="id" value={data.id} /> */}
                    <PrimaryButton
                        className="mr-2"
                        type="reset"
                        onClick={closeModal}
                    >
                        Cancel
                    </PrimaryButton>
                    <DangerButton type="submit" disabled={processing}>
                        Delete
                    </DangerButton>
                </form>
            </Modal>
            <Modal show={confirmingTravelCategoryUpdate} onClose={closeModal}>
                <form onSubmit={updateTravelCategory} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Update Account
                    </h2>
                    <InputLabel
                        htmlFor="category_name"
                        className="mt-4"
                        value="Travel Category Name"
                    />
                    <TextInput
                        id="category_name"
                        type="text"
                        name="category_name"
                        label="Travel Category Name"
                        value={data.category_name}
                        onChange={(e) =>
                            setData("category_name", e.target.value)
                        }
                        error={errors.category_name}
                        className="mb-2"
                    />

                    <PrimaryButton
                        className="mr-2"
                        type="reset"
                        onClick={closeModal}
                    >
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

const TravelCategoryList = (props) => {
    let { travelCategories } = useContext(DashboardContext) ?? {
        travelCategories: [],
    };
    const [confirmingCategoryAdd, setConfirmingCategoryAdd] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        category_name: "",
    });

    const addTravelCategory = (e) => {
        e.preventDefault();

        post(route("dashboard.travel-category.store"), {
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingCategoryAdd(false);
        reset();
    };

    return (
        <>
            <SecondaryButton
                className="ml-4 mb-4"
                onClick={() => {
                    setConfirmingCategoryAdd(true);
                }}
            >
                Add Travel Category
            </SecondaryButton>
            <table className="container mx-2 w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {travelCategories.length > 0 &&
                        travelCategories.map((category) => (
                            <SingleTravelCategory
                                key={category.id}
                                {...category}
                            />
                        ))}
                </tbody>
            </table>
            <Modal show={confirmingCategoryAdd} onClose={closeModal}>
                <form onSubmit={addTravelCategory} className="p-5">
                    <h1 className="text-2xl font-bold">Add Travel Category</h1>
                    <InputLabel htmlFor="name" className="mt-4" value="Name" />
                    <TextInput
                        id="category_name"
                        type="text"
                        name="category_name"
                        label="Travel Category Name"
                        onChange={(e) =>
                            setData("category_name", e.target.value)
                        }
                        value={data.category_name}
                        className="mb-2"
                    />
                    <PrimaryButton
                        className="mr-2"
                        type="reset"
                        onClick={closeModal}
                    >
                        Cancel
                    </PrimaryButton>
                    <PrimaryButton type="submit" disabled={processing}>
                        Add
                    </PrimaryButton>
                </form>
                {Object.keys(errors).map((key) => (
                    <div className="text-red-500 text-sm mt-4" key={key}>
                        {key} :{errors[key]}
                    </div>
                ))}
            </Modal>
        </>
    );
};

export default TravelCategoryList;
