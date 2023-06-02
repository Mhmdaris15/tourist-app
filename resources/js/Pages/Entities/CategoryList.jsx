import React, { useState, useEffect, useContext } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import { DashboardContext } from "../Dashboard";

const SingleCategory = (props) => {
    const [confirmingNewsCategoryDeletion, setConfirmingNewsCategoryDeletion] =
        useState(false);
    const [confirmingNewsCategoryUpdate, setConfirmingNewsCategoryUpdate] =
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
        news_category_name: props.news_category_name,
    });

    useEffect(() => {
        setData({
            id: props.id,
        });
    }, [props.id]);

    const confirmNewsCategoryDeletion = () => {
        setConfirmingNewsCategoryDeletion(true);
        setData({
            id: props.id,
        });
    };

    const confirmNewsCategoryUpdate = () => {
        setConfirmingNewsCategoryUpdate(true);
        setData({
            id: props.id,
            news_category_name: props.news_category_name,
        });
    };

    const deleteNewsCategory = (e) => {
        // console.log("deleteNewsCategory");
        e.preventDefault();

        destroy(route("dashboard.news-category.destroy", { id: props.id }), {
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const updateNewsCategory = (e) => {
        e.preventDefault();

        patch(route("dashboard.news-category.update", { id: props.id }), {
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingNewsCategoryDeletion(false);
        setConfirmingNewsCategoryUpdate(false);
        reset();
    };

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            {/* <figure>
                    <img src={imageURL} alt={props.name + " Image"} />
                </figure> */}
            <td className="px-6 py-4">{props.news_category_name}</td>
            <td className="px-6 py-4">
                <PrimaryButton
                    className="mr-2"
                    onClick={confirmNewsCategoryUpdate}
                >
                    Edit
                </PrimaryButton>
                <DangerButton onClick={confirmNewsCategoryDeletion}>
                    Delete
                </DangerButton>
            </td>
            <Modal show={confirmingNewsCategoryDeletion} onClose={closeModal}>
                <form onSubmit={deleteNewsCategory} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Delete Account
                    </h2>
                    <p className="my-2 text-sm text-gray-600 dark:text-gray-400">
                        Are you sure want to delete this news category? All the
                        data that belongs to this news category will be deleted.
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
            <Modal show={confirmingNewsCategoryUpdate} onClose={closeModal}>
                <form onSubmit={updateNewsCategory} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Update Account
                    </h2>
                    <InputLabel
                        htmlFor="news_category_name"
                        className="mt-4"
                        value="Your Full Name"
                    />
                    <TextInput
                        id="news_category_name"
                        type="text"
                        name="news_category_name"
                        label="News Category Name"
                        value={data.news_category_name}
                        onChange={(e) =>
                            setData("news_category_name", e.target.value)
                        }
                        error={errors.news_category_name}
                        className="mb-2"
                    />
                    {Object.keys(errors).map((key) => (
                        <div className="text-red-500 text-sm mt-4" key={key}>
                            {key} :{errors[key]}
                        </div>
                    ))}
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

const CategoryList = (props) => {
    const { categories } = useContext(DashboardContext);
    const [confirmingCategoryAdd, setConfirmingCategoryAdd] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        news_category_name: "",
    });

    const addNewsCategory = (e) => {
        e.preventDefault();

        post(route("dashboard.news-category.store"), {
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
                Add News Category
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
                    {categories.map((category) => (
                        <SingleCategory key={category.id} {...category} />
                    ))}
                </tbody>
            </table>
            <Modal show={confirmingCategoryAdd} onClose={closeModal}>
                <form onSubmit={addNewsCategory} className="p-5">
                    <h1 className="text-2xl font-bold">Add News Category</h1>
                    <InputLabel htmlFor="name" className="mt-4" value="Name" />
                    <TextInput
                        id="news_category_name"
                        type="text"
                        name="news_category_name"
                        label="News Category Name"
                        onChange={(e) =>
                            setData("news_category_name", e.target.value)
                        }
                        value={data.news_category_name}
                        className="mb-2"
                    />
                    {Object.keys(errors).map((key) => (
                        <div className="text-red-500 text-sm mt-4" key={key}>
                            {key} :{errors[key]}
                        </div>
                    ))}
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
            </Modal>
        </>
    );
};

export default CategoryList;
