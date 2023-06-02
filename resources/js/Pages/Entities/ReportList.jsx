import React from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";

const ReportList = () => {
    return (
        <div className="">
            <table className="container mx-2 w-max-w-8xl text-sm text-left text-gray-500 dark:text-gray-400">
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
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-4">User Report</td>
                        <td className="px-6 py-4">
                            <PrimaryButton className="mr-2">Edit</PrimaryButton>
                            <DangerButton>Delete</DangerButton>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ReportList;
