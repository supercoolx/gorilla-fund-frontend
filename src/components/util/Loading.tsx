import React from "react";
import { VscLoading } from "react-icons/vsc";

const Loading = ({ size, className }: { size?: number, className?: "" }) => (
    <div className="flex w-full my-10 item-center">
        <VscLoading size={size || 40} className={"animate-spin mx-auto text-teal-700 " + ( className || "" )} />
    </div>
);

export default Loading;