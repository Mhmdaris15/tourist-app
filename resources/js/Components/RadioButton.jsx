import React from "react";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { __isOptionsFunction } from "@tailwindcss/forms";

export default function RadioButton({ options, onData, className = "" }) {
    const [selected, setSelected] = useState(options[0]);

    const updateSelectedOption = (option) => {
        setSelected(option);
        onData(option);
    };

    return (
        <div className="w-full">
            <div className="w-full max-w-md">
                <RadioGroup
                    value={selected}
                    onChange={setSelected}
                    className={"w-full"}
                >
                    <RadioGroup.Label className="sr-only">
                        Server size
                    </RadioGroup.Label>
                    <div className={"space-y-1 " + className}>
                        {options.map((option, index) => (
                            <RadioGroup.Option
                                key={index}
                                value={option.value}
                                onClick={() => updateSelectedOption(option)}
                                className={({ active, checked }) =>
                                    `${
                                        active
                                            ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                                            : ""
                                    }
                  ${
                      checked
                          ? "bg-sky-900 bg-opacity-75 text-white"
                          : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-3 shadow-md focus:outline-none`
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={`font-medium  ${
                                                            checked
                                                                ? "text-white"
                                                                : "text-gray-900"
                                                        }`}
                                                    >
                                                        {option.label}
                                                    </RadioGroup.Label>
                                                </div>
                                            </div>
                                            {checked && (
                                                <div className="shrink-0 text-white">
                                                    <CheckIcon className="h-6 w-6" />
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </div>
    );
}

function CheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
