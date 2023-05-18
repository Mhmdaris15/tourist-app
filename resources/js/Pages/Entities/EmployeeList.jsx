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

const SingleEmployee = (props) => {
    const [confirmingEmployeeDeletion, setconfirmingEmployeeDeletion] =
        useState(false);
    const [confirmingEmployeeUpdate, setConfirmingEmployeeUpdate] =
        useState(false);
    let { users } = useContext(DashboardContext);

    users = users.map((user) => {
        return {
            id: user.id,
            label: user.name,
            value: user.name,
        };
    });

    const positions = [
        {
            id: 0,
            label: "Administrator",
            value: "administrator",
        },
        {
            id: 1,
            label: "Treasurer",
            value: "treasurer",
        },
        {
            id: 2,
            label: "Owner",
            value: "owner",
        },
    ];

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
        name: props.name,
        phone: props.phone,
        address: props.address,
        position: props.position,
        user_id: props.user_id,
    });

    useEffect(() => {
        setData({
            id: props.id,
        });
    }, [props.id]);

    const confirmEmployeeDeletion = () => {
        setconfirmingEmployeeDeletion(true);
        setData({
            id: props.id,
        });
    };

    const confirmEmployeeUpdate = () => {
        setConfirmingEmployeeUpdate(true);
        setData({
            id: props.id,
            name: props.name,
            address: props.address,
            phone: props.phone,
            photo: props.photo,
            position: props.position,
            user_id: props.user_id,
        });
    };

    const deleteEmployee = (e) => {
        e.preventDefault();

        destroy(route("dashboard.employee.destroy", { id: props.id }), {
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const updateEmployee = (e) => {
        e.preventDefault();
        console.log("Update Employee :", data);
        post(route("dashboard.employee.update", { id: props.id }), {
            forceFormData: true, // force form data to be sent as multipart/form-data
            preserveScroll: true, // preserve scroll position on page
            onSuccess: () => closeModal(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setconfirmingEmployeeDeletion(false);
        setConfirmingEmployeeUpdate(false);
        reset();
    };

    const handleUserData = (user) => {
        setData("user_id", user.id);
    };

    const handlePositionData = (position) => {
        setData("position", position.value);
    };

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">{props.name}</td>
            <td className="px-6 py-4">{props.address}</td>
            <td className="px-6 py-4">{props.phone}</td>
            <td className="px-6 py-4">{props.position}</td>
            <td className="px-6 py-4">{props.user_id}</td>
            <td className="px-6 py-4">
                <PrimaryButton className="mr-2" onClick={confirmEmployeeUpdate}>
                    Edit
                </PrimaryButton>
                <DangerButton onClick={confirmEmployeeDeletion}>
                    Delete
                </DangerButton>
            </td>
            <Modal show={confirmingEmployeeDeletion} onClose={closeModal}>
                <form onSubmit={deleteEmployee} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Delete Account
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Are you sure to delete this Employee? All of your data
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
            <Modal show={confirmingEmployeeUpdate} onClose={closeModal}>
                <form
                    onSubmit={updateEmployee}
                    className="p-6 w-full overflow-y-auto"
                >
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Update Account
                    </h2>
                    <InputLabel
                        htmlFor="name"
                        className="mt-4"
                        value="Employee Name"
                    />
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        label="Employee Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        error={errors.name}
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
                        htmlFor="phone"
                        className="mt-4"
                        value="Phone Number"
                    />
                    <TextInput
                        id="phone"
                        type="text"
                        name="phone"
                        label="Phone Number"
                        value={data.phone}
                        onChange={(e) => setData("phone", e.target.value)}
                        error={errors.phone}
                        className=""
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
                        htmlFor="position"
                        className="mt-4"
                        value="Position"
                    />
                    <RadioButton
                        options={positions}
                        label="Position"
                        onData={handlePositionData}
                        className="flex gap-2 flex-wrap w-full"
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

const EmployeeList = (props) => {
    let { employees, users } = useContext(DashboardContext);
    const [confirmingEmployeeAdd, setconfirmingEmployeeAdd] = useState(false);
    const { data, setData, post, processing, errors, reset, progress } =
        useForm({
            name: "",
            phone: "",
            address: "",
            position: "",
            user_id: "",
        });

    users = users.map((user) => {
        return {
            id: user.id,
            label: user.name,
            value: user.name,
        };
    });

    const positions = [
        {
            id: 0,
            label: "Administrator",
            value: "administrator",
        },
        {
            id: 1,
            label: "Treasurer",
            value: "treasurer",
        },
        {
            id: 2,
            label: "Owner",
            value: "owner",
        },
    ];
    const addEmployee = (e) => {
        e.preventDefault();
        console.log("Add Employee :", data);
        post(route("dashboard.employee.store"), {
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
        setconfirmingEmployeeAdd(false);
        reset();
    };

    const handlePositionData = (position) => {
        setData("position", position.value);
    };

    return (
        <>
            <SecondaryButton
                className="ml-4 mb-4"
                onClick={() => {
                    setconfirmingEmployeeAdd(true);
                }}
            >
                Add New Employee
            </SecondaryButton>
            <table className="container mx-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Employee Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Position
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
                    {employees.map((item) => (
                        <SingleEmployee key={item.id} {...item} />
                    ))}
                </tbody>
            </table>
            <Modal
                show={confirmingEmployeeAdd}
                onClose={closeModal}
                maxWidth="xl"
            >
                <form onSubmit={addEmployee} className="p-5 w-full">
                    <h1 className="text-2xl font-bold">Add Employee</h1>
                    <InputLabel className="mt-4" value="Employee Name" />
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        label="Employee Name"
                        className=""
                        onChange={(e) => setData("name", e.target.value)}
                        value={data.name}
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
                        htmlFor="phone"
                        className="mt-4"
                        value="Phone Number"
                    />
                    <TextInput
                        id="phone"
                        type="number"
                        name="phone"
                        label="Phone Number"
                        className=""
                        onChange={(e) => setData("phone", e.target.value)}
                        value={data.phone}
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
                        htmlFor="position"
                        className="mt-4"
                        value="Position"
                    />
                    <RadioButton
                        options={positions}
                        label="User ID"
                        onData={handlePositionData}
                        className="flex gap-2 flex-wrap w-full"
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

export default EmployeeList;
