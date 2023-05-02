import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";

const SwitchToggle = () => {
    const [enabled, setEnabled] = useState(false);

    const toggleTheme = () => {
        if (enabled) {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
    };

    return (
        <div>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                onClick={toggleTheme}
                className={`${
                    enabled ? "bg-vintage-300" : "bg-vintage-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
                <span className="sr-only">Enable notifications</span>
                <span
                    className={`${
                        enabled ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
            </Switch>
        </div>
    );
};

export default SwitchToggle;
