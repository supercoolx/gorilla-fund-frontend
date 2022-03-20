import React from "react";

const StepBar = ({step, length}: {step: number, length: number}) => {
    return (
        <div className="flex w-full h-1 gap-2 mt-16">
            {
                Array.from({ length: length }, (_, i) =>
                    i + 1 <= step
                    ? <div className="flex-1 bg-teal-700"></div>
                    : <div className="flex-1 bg-gray-200"></div>
                )
            }
        </div>
    )
}

export default StepBar;