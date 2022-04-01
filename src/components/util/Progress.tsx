import React from "react";

const Progress = ({ percent, className }: {percent: number, className?: string }) => {
    return (
        <div className={className}>
            <div className="w-full h-1 bg-gray-50">
                <div className="h-1 bg-teal-700" style={{ maxWidth: '100%', width: `${percent}%` }}></div>
            </div>
        </div>
    )
}

export default Progress;