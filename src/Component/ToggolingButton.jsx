'use client'
import { Button } from '@heroui/react';
import React, { useState } from 'react';
import DeleveryCard from './DeleveryCard';

const state = [
    { key: "delayed", label: "Delayed" },
    { key: "deliveredNotReceived", label: "Not-Receive" },
    { key: "notAvailable", label: "Tracking Not Available" },
];

const ToggolingButton = ({ data }) => {
    const [activeKey, setActiveKey] = useState("delayed");
    return (
        <div className="px-4">
            <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-2 sm:gap-3 mb-4">
                {state.map((s) => (
                    <Button
                        key={s.key}
                        variant="outline"
                        onClick={() => setActiveKey(s.key)}
                        className={`rounded-md text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap ${
                            activeKey === s.key
                                ? 'border-blue-600 bg-blue-50 text-blue-700'
                                : 'border-blue-300'
                        }`}
                    >
                        {s.label}
                    </Button>
                ))}
            </div>

            <div>
                <div>
                    <DeleveryCard data={data[activeKey]}></DeleveryCard>
                </div>
            </div>
        </div>
    );
};

export default ToggolingButton;