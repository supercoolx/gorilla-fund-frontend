import React from "react";

const Progress = ({ percent, className }: {percent: number, className?: string }) => {
    return (
        <div className={className}>
            <div className="w-full h-1 bg-gray-100 rounded-full">
                <div className="h-1 bg-teal-700 rounded-full" style={{ maxWidth: '100%', width: `${percent}%` }}></div>
            </div>
        </div>
    )
}

export default Progress;