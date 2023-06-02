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
import { DashboardContext } from "../Dashboard";

const SingleNews = (props) => {
    const [confirmingNewsDeletion, setConfirmingNewsDeletion] = useState(false);
    const [confirmingNewsUpdate, setConfirmingNewsUpdate] = useState(false);

    let { categories } = useContext(DashboardContext);

    categories = categories.map((category) => {
        return {
            id: category.id,
            value: category.news_category_name,
            label: category.news_category_name,
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
        news_title: props.news_title,
        news_content: props.news_content,
        news_date: props.news_date,
        news_category_id: props.news_category_id,
        news_image: null,
    });

    useEffect(() => {
        setData({
            id: props.id,
        });
    }, [props.id]);

    const confirmNewsDeletion = () => {
        setConfirmingNewsDeletion(true);
        setData({
            id: props.id,
        });
    };

    const confirmNewsUpdate = () => {
        setConfirmingNewsUpdate(true);
        setData({
            id: props.id,
            news_title: props.news_title,
            news_content: props.news_content,
            news_date: props.news_date,
            news_category_id: props.news_category_id,
            news_image: props.news_image,
        });
    };

    const deleteNews = (e) => {
        // console.log("deleteNews");
        e.preventDefault();

        destroy(route("dashboard.news.destroy", { id: props.id }), {
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const updateNews = (e) => {
        e.preventDefault();
        console.log("Update News :", data);
        post(route("dashboard.news.update", { id: props.id }), {
            forceFormData: true, // force form data to be sent as multipart/form-data
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingNewsDeletion(false);
        setConfirmingNewsUpdate(false);
        reset();
    };

    const handleCategoryData = (category) => {
        setData("news_category_id", category.id);
    };
    const theCategory = categories.find(
        (category) => category.id === props.news_category_id
    );
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">{props.news_title}</td>
            <td className="px-6 py-4">{props.news_content}</td>
            <td className="px-6 py-4">{props.news_date}</td>
            <td className="px-6 py-4">{theCategory.value}</td>
            <td className="px-6 py-4">
                <figure>
                    <img
                        src={"/" + props.news_image}
                        alt={props.name + " Image"}
                    />
                </figure>
            </td>
            <td className="px-6 py-4">
                <PrimaryButton className="mr-2" onClick={confirmNewsUpdate}>
                    Edit
                </PrimaryButton>
                <DangerButton onClick={confirmNewsDeletion}>
                    Delete
                </DangerButton>
            </td>
            <Modal show={confirmingNewsDeletion} onClose={closeModal}>
                <form onSubmit={deleteNews} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Delete Account
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted
                    </p>
                    <TextInput
                        id="id"
                        type="hidden"
                        name="id"
                        value={data.id}
                    />
                    {/* <input type="hidden" name="id" id="id" value={data.id} /> */}
                    <PrimaryButton type="reset" onClick={closeModal}>
                        Cancel
                    </PrimaryButton>
                    <DangerButton type="submit" disabled={processing}>
                        Delete
                    </DangerButton>
                </form>
            </Modal>
            <Modal show={confirmingNewsUpdate} onClose={closeModal}>
                <form onSubmit={updateNews} className="p-6 w-full">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Update Account
                    </h2>
                    <InputLabel
                        htmlFor="news_title"
                        className="mt-4"
                        value="News Title"
                    />
                    <TextInput
                        id="news_title"
                        type="text"
                        name="news_title"
                        label="News Title"
                        value={data.news_title}
                        onChange={(e) => setData("news_title", e.target.value)}
                        error={errors.news_title}
                        className=""
                    />
                    <InputLabel
                        htmlFor="news_content"
                        className="mt-4"
                        value="News Content"
                    />
                    <TextInput
                        id="news_content"
                        type="text"
                        name="news_content"
                        label="News Content"
                        value={data.news_content}
                        onChange={(e) =>
                            setData("news_content", e.target.value)
                        }
                        error={errors.news_content}
                        className=""
                    />
                    <InputLabel
                        htmlFor="news_date"
                        className="mt-4"
                        value="News Date"
                    />
                    <TextInput
                        id="news_date"
                        type="date"
                        name="news_date"
                        label="News Date"
                        className=""
                        onChange={(e) => setData("news_date", e.target.value)}
                        value={data.news_date}
                    />
                    <InputLabel
                        htmlFor="news_category"
                        className="mt-4"
                        value="News Category"
                    />
                    <RadioButton
                        options={categories}
                        label="News Category"
                        onData={handleCategoryData}
                        className="flex gap-2 flex-wrap w-full"
                    />
                    <InputLabel
                        htmlFor="news_image"
                        className="mt-4"
                        value="News Image"
                    />
                    <img
                        className="h-auto max-w-xs"
                        src={"/" + data.news_image}
                        alt={"News Image " + data.news_title}
                    ></img>
                    <TextInput
                        id="news_image"
                        type="file"
                        name="news_image"
                        label="News Image"
                        onChange={(e) =>
                            setData("news_image", e.target.files[0])
                        }
                        error={errors.news_image}
                        className=""
                    />
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

const NewsList = (props) => {
    // const news = props.news;
    let { news, categories } = useContext(DashboardContext);
    const [confirmingNewsAdd, setConfirmingNewsAdd] = useState(false);
    const { data, setData, post, processing, errors, reset, progress } =
        useForm({
            news_title: "",
            news_content: "",
            news_date: "",
            news_category_id: "",
            news_image: null,
        });

    categories = categories.map((category) => {
        return {
            id: category.id,
            value: category.news_category_name,
            label: category.news_category_name,
        };
    });

    const addNews = (e) => {
        e.preventDefault();
        console.log("Add News Data : ", data);
        post(route("dashboard.news.store"), {
            forceFormData: true,
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingNewsAdd(false);
        reset();
    };

    const handleCategoryData = (category) => {
        setData("news_category_id", category.id);
    };

    return (
        <>
            <SecondaryButton
                className="ml-4 mb-4"
                onClick={() => {
                    setConfirmingNewsAdd(true);
                }}
            >
                Add News
            </SecondaryButton>
            <table className="container mx-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            News Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            News Content
                        </th>
                        <th scope="col" className="px-6 py-3">
                            News Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            News Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            News Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {news.map((item) => (
                        <SingleNews key={item.id} {...item} />
                    ))}
                </tbody>
            </table>
            <Modal show={confirmingNewsAdd} onClose={closeModal} maxWidth="xl">
                <form onSubmit={addNews} className="p-5 w-full">
                    <h1 className="text-2xl font-bold">Add News</h1>
                    <InputLabel
                        htmlFor="news_title"
                        className="mt-4"
                        value="News Title"
                    />
                    <TextInput
                        id="news_title"
                        type="text"
                        name="news_title"
                        label="News Title"
                        className=""
                        onChange={(e) => setData("news_title", e.target.value)}
                        value={data.news_title}
                    />
                    <InputLabel
                        htmlFor="news_content"
                        className="mt-4"
                        value="News Content"
                    />
                    <TextInput
                        id="news_content"
                        type="text"
                        name="news_content"
                        label="News Content"
                        className=""
                        onChange={(e) =>
                            setData("news_content", e.target.value)
                        }
                        value={data.news_content}
                    />
                    <InputLabel
                        htmlFor="news_date"
                        className="mt-4"
                        value="News Date"
                    />
                    <TextInput
                        id="news_date"
                        type="date"
                        name="news_date"
                        label="News Date"
                        className=""
                        onChange={(e) => setData("news_date", e.target.value)}
                        value={data.news_date}
                    />
                    <InputLabel
                        htmlFor="news_category"
                        className="mt-4"
                        value="News Category"
                    />
                    <RadioButton
                        options={categories}
                        label="News Category"
                        onData={handleCategoryData}
                        className="flex gap-2 flex-wrap w-full"
                    />
                    <InputLabel
                        htmlFor="news_image"
                        className="mt-4"
                        value="News Image"
                    />
                    <TextInput
                        id="news_image"
                        type="file"
                        name="news_image"
                        label="News Image"
                        className=""
                        onChange={(e) =>
                            setData("news_image", e.target.files[0])
                        }
                        // value={data.news_image ?? ""}
                    />
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
                        Add
                    </PrimaryButton>
                </form>
            </Modal>
        </>
    );
};

export default NewsList;
