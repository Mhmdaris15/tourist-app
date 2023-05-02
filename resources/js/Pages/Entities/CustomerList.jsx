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

const SingleCustomer = (props) => {
    const [confirmingCustomerDeletion, setconfirmingCustomerDeletion] =
        useState(false);
    const [confirmingCustomerUpdate, setConfirmingCustomerUpdate] =
        useState(false);
    let { users } = useContext(DashboardContext);

    users = users.map((user) => {
        return {
            id: user.id,
            label: user.name,
            value: user.name,
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
        customer_name: props.customer_name,
        phone_number: props.phone_number,
        address: props.address,
        photo: null,
        user_id: props.user_id,
    });

    useEffect(() => {
        setData({
            id: props.id,
        });
    }, [props.id]);

    const confirmCustomerDeletion = () => {
        setconfirmingCustomerDeletion(true);
        setData({
            id: props.id,
        });
    };

    const confirmCustomerUpdate = () => {
        setConfirmingCustomerUpdate(true);
        setData({
            id: props.id,
            customer_name: props.customer_name,
            phone_number: props.phone_number,
            address: props.address,
            photo: props.photo,
            user_id: props.user_id,
        });
    };

    const deleteCustomer = (e) => {
        e.preventDefault();

        destroy(route("dashboard.customer.destroy", { id: props.id }), {
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const updateCustomer = (e) => {
        e.preventDefault();
        console.log("Update Customer :", data);
        post(route("dashboard.customer.update", { id: props.id }), {
            forceFormData: true, // force form data to be sent as multipart/form-data
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setconfirmingCustomerDeletion(false);
        setConfirmingCustomerUpdate(false);
        reset();
    };

    const handleUserData = (user) => {
        setData("user_id", user.id);
    };

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">{props.customer_name}</td>
            <td className="px-6 py-4">{props.phone_number}</td>
            <td className="px-6 py-4">{props.address}</td>

            <td className="px-6 py-4">
                <figure>
                    <img src={"/" + props.photo} alt={props.customer_name} />
                </figure>
            </td>

            <td className="px-6 py-4">
                <PrimaryButton className="mr-2" onClick={confirmCustomerUpdate}>
                    Edit
                </PrimaryButton>
                <DangerButton onClick={confirmCustomerDeletion}>
                    Delete
                </DangerButton>
            </td>
            <Modal show={confirmingCustomerDeletion} onClose={closeModal}>
                <form onSubmit={deleteCustomer} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Delete Account
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Are you sure to delete this Customer? All of your data
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
            <Modal show={confirmingCustomerUpdate} onClose={closeModal}>
                <form
                    onSubmit={updateCustomer}
                    className="p-6 w-full overflow-y-auto"
                >
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Update Account
                    </h2>
                    <InputLabel
                        htmlFor="customer_name"
                        className="mt-4"
                        value="Customer Title"
                    />
                    <TextInput
                        id="customer_name"
                        type="text"
                        name="customer_name"
                        label="Customer Title"
                        value={data.customer_name}
                        onChange={(e) =>
                            setData("customer_name", e.target.value)
                        }
                        error={errors.customer_name}
                        className=""
                    />
                    <InputLabel
                        htmlFor="phone_number"
                        className="mt-4"
                        value="Phone Number"
                    />
                    <TextInput
                        id="phone_number"
                        type="text"
                        name="phone_number"
                        label="Phone Number"
                        value={data.phone_number}
                        onChange={(e) =>
                            setData("phone_number", e.target.value)
                        }
                        error={errors.phone_number}
                        className=""
                    />
                    <InputLabel
                        htmlFor="address"
                        className="mt-4"
                        value="address"
                    />
                    <TextAreaInput
                        id="address"
                        name={"address"}
                        onChange={(e) => setData("address", e.target.value)}
                        value={data.address}
                    />
                    <InputLabel
                        htmlFor="user_id"
                        className="mt-4"
                        value="User ID"
                    />
                    <RadioButton
                        options={users}
                        label="User ID"
                        onData={handleUserData}
                        className="flex gap-2 flex-wrap w-full"
                    />
                    <InputLabel
                        htmlFor="photo"
                        className="mt-4"
                        value="Customer Photo"
                    />
                    <img
                        width={150}
                        src={"/" + props.photo}
                        alt={props.customer_name}
                    />
                    <TextInput
                        id="photo"
                        type="file"
                        name="photo"
                        label="Customer Photo"
                        className=""
                        onChange={(e) => setData("photo", e.target.files[0])}
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

const CustomerList = (props) => {
    let { customers, users } = useContext(DashboardContext);
    const [confirmingCustomerAdd, setconfirmingCustomerAdd] = useState(false);
    const { data, setData, post, processing, errors, reset, progress } =
        useForm({
            customer_name: "",
            phone_number: "",
            address: "",
            photo: "",
            user_id: null,
        });

    users = users.map((user) => {
        return {
            id: user.id,
            label: user.name,
            value: user.name,
        };
    });
    console.log("Users :", users);
    const addCustomer = (e) => {
        e.preventDefault();
        console.log("Add Customer Data : ", data);
        post(route("dashboard.customer.store"), {
            forceFormData: true,
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
            onError: (errors) => console.log(errors),
        });
    };

    const handleUserData = (user) => {
        setData("user_id", user.id);
        console.log("You choose ID :", user.id);
    };

    const closeModal = () => {
        setconfirmingCustomerAdd(false);
        reset();
    };

    return (
        <>
            <SecondaryButton
                className="ml-4 mb-4"
                onClick={() => {
                    setconfirmingCustomerAdd(true);
                }}
            >
                Add New Customer
            </SecondaryButton>
            <table className="container mx-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Customer Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Photo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((item) => (
                        <SingleCustomer key={item.id} {...item} />
                    ))}
                </tbody>
            </table>
            <Modal
                show={confirmingCustomerAdd}
                onClose={closeModal}
                maxWidth="xl"
            >
                <form onSubmit={addCustomer} className="p-5 w-full">
                    <h1 className="text-2xl font-bold">Add Customer</h1>
                    <InputLabel
                        htmlFor="customer_name"
                        className="mt-4"
                        value="Customer Title"
                    />
                    <TextInput
                        id="customer_name"
                        type="text"
                        name="customer_name"
                        label="Customer Title"
                        className=""
                        onChange={(e) =>
                            setData("customer_name", e.target.value)
                        }
                        value={data.customer_name}
                    />
                    <InputLabel
                        htmlFor="phone_number"
                        className="mt-4"
                        value="Phone Number"
                    />
                    <TextInput
                        id="phone_number"
                        type="number"
                        name="phone_number"
                        label="Phone Number"
                        className=""
                        onChange={(e) =>
                            setData("phone_number", e.target.value)
                        }
                        value={data.phone_number}
                    />
                    <InputLabel
                        htmlFor="address"
                        className="mt-4"
                        value="address"
                    />

                    <TextAreaInput
                        id="address"
                        name="address"
                        onChange={(e) => setData("address", e.target.value)}
                        value={data.address}
                    />
                    <InputLabel
                        htmlFor="user_id"
                        className="mt-4"
                        value="User ID"
                    />
                    <RadioButton
                        options={users}
                        label="User ID"
                        onData={handleUserData}
                        className="flex gap-2 flex-wrap w-full"
                    />
                    <InputLabel
                        htmlFor="photo"
                        className="mt-4"
                        value="Customer Photo"
                    />
                    <TextInput
                        id="photo"
                        type="file"
                        name="photo"
                        label="Customer Photo"
                        className=""
                        onChange={(e) => setData("photo", e.target.files[0])}
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

export default CustomerList;
