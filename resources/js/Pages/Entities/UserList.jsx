import axios from "axios";
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

const SingleUser = (props) => {
    const [imageURL, setImageURL] = useState("");
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [confirmingUserUpdate, setConfirmingUserUpdate] = useState(false);

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
        name: props.name,
        email: props.email,
        role: props.role,
        password: "",
    });

    useEffect(() => {
        setData({
            id: props.id,
        });
        // console.log("useEffect", data);
    }, [props.id]);

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
        setData({
            id: props.id,
        });
        // console.log("confirmUserDeletion", data);
        // console.log(route("dashboard.destroy", { id: pro     ps.id }));
    };

    const confirmUserUpdate = () => {
        setConfirmingUserUpdate(true);
        setData({
            id: props.id,
            name: props.name,
            email: props.email,
            role: props.role,
            password: "",
        });
    };

    const deleteUser = (e) => {
        // console.log("deleteUser");
        e.preventDefault();

        destroy(route("dashboard.user.destroy", { id: props.id }), {
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const updateUser = (e) => {
        e.preventDefault();

        patch(route("dashboard.user.update", { id: props.id }), {
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        setConfirmingUserUpdate(false);
        reset();
    };

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            {/* <figure>
                    <img src={imageURL} alt={props.name + " Image"} />
                </figure> */}
            <td className="px-6 py-4">{props.name}</td>
            <td className="px-6 py-4">{props.email}</td>
            <td className="px-6 py-4">{props.role}</td>
            <td className="px-6 py-4">
                <PrimaryButton className="mr-2" onClick={confirmUserUpdate}>
                    Edit
                </PrimaryButton>
                <DangerButton onClick={confirmUserDeletion}>
                    Delete
                </DangerButton>
            </td>
            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
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
            <Modal show={confirmingUserUpdate} onClose={closeModal}>
                <form onSubmit={updateUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Update Account
                    </h2>
                    <InputLabel
                        htmlFor="name"
                        className="mt-4"
                        value="Your Full Name"
                    />
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        label="Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        error={errors.name}
                        className=""
                    />
                    <InputLabel
                        htmlFor="email"
                        className="mt-4"
                        value="Your Email Address"
                    />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        label="Email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        error={errors.email}
                        className=""
                    />
                    <InputLabel
                        htmlFor="role"
                        className="mt-4"
                        value="Your Role"
                    />
                    <Dropdown className="">
                        <Dropdown.Trigger>
                            <span className="inline-flex rounded-md shadow-sm">
                                <button
                                    type="button"
                                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700"
                                    id="role"
                                    aria-label="Options"
                                    aria-haspopup="true"
                                    aria-expanded="true"
                                >
                                    {data.role
                                        ? data.role.charAt(0).toUpperCase() +
                                          data.role.slice(1)
                                        : "Select Role"}
                                    <svg
                                        className="w-5 h-5 ml-2 -mr-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </Dropdown.Trigger>
                        <Dropdown.Content align="left">
                            <Dropdown.Menu>
                                <button
                                    type="button"
                                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600"
                                    onClick={() => setData("role", "admin")}
                                >
                                    Admin
                                </button>
                            </Dropdown.Menu>
                            <Dropdown.Menu>
                                <button
                                    type="button"
                                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600"
                                    onClick={() => setData("role", "user")}
                                >
                                    User
                                </button>
                            </Dropdown.Menu>
                            <Dropdown.Menu>
                                <button
                                    type="button"
                                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600"
                                    onClick={() => setData("role", "treasurer")}
                                >
                                    Treasurer
                                </button>
                            </Dropdown.Menu>
                            <Dropdown.Menu>
                                <button
                                    type="button"
                                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600"
                                    onClick={() => setData("role", "customer")}
                                >
                                    Customer
                                </button>
                            </Dropdown.Menu>
                            <Dropdown.Menu>
                                <button
                                    type="button"
                                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600"
                                    onClick={() => setData("role", "owner")}
                                >
                                    Owner
                                </button>
                            </Dropdown.Menu>
                        </Dropdown.Content>
                    </Dropdown>
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

const UserList = (props) => {
    // const users = props.users;
    const { users } = useContext(DashboardContext);
    const [confirmingUserAdd, setConfirmingUserAdd] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        role: "",
        password: "",
    });

    const addUser = (e) => {
        e.preventDefault();

        post(route("dashboard.user.store"), {
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserAdd(false);
        reset();
    };

    const handleRoleData = (role) => {
        setData("role", role.value);
        console.log(data);
    };

    return (
        <>
            <SecondaryButton
                className="ml-4 mb-4"
                onClick={() => {
                    setConfirmingUserAdd(true);
                }}
            >
                Add User
            </SecondaryButton>
            <table className="container mx-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Role
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <SingleUser key={user.id} {...user} />
                    ))}
                </tbody>
            </table>
            <Modal show={confirmingUserAdd} onClose={closeModal}>
                <form onSubmit={addUser} className="p-5">
                    <h1 className="text-2xl font-bold">Add User</h1>
                    <InputLabel htmlFor="name" className="mt-4" value="Name" />
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        label="Name"
                        className=""
                        onChange={(e) => setData("name", e.target.value)}
                        value={data.name}
                    />
                    <InputLabel
                        htmlFor="email"
                        className="mt-4"
                        value="Email"
                    />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        label="Email"
                        className=""
                        onChange={(e) => setData("email", e.target.value)}
                        value={data.email}
                    />
                    <InputLabel
                        htmlFor="password"
                        className="mt-4"
                        value="Password"
                    />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        label="Password"
                        className=""
                        onChange={(e) => setData("password", e.target.value)}
                        value={data.password}
                    />
                    <InputLabel htmlFor="role" className="mt-4" value="Role" />
                    <RadioButton
                        options={[
                            { id: "1", value: "admin", label: "Admin" },
                            { id: "2", value: "user", label: "User" },
                            { id: "3", value: "treasurer", label: "Treasurer" },
                            { id: "4", value: "customer", label: "Customer" },
                            { id: "5", value: "owner", label: "Owner" },
                        ]}
                        label="Role"
                        onData={handleRoleData}
                    />
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

export default UserList;
