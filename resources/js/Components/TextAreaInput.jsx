import React from "react";

const TextAreaInput = ({ className, id, name, onChange, value }) => {
    return (
        <textarea
            id={id}
            name={name}
            rows="4"
            onChange={onChange}
            value={value}
            className={
                "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " +
                className
            }
            placeholder="Write your thoughts here..."
        ></textarea>
    );
};

export default TextAreaInput;
