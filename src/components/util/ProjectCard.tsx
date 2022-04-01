import React from "react";
import { Link } from "react-router-dom";
import Progress from "components/util/Progress";
import { URL } from "libs/constants";
import { nFormatter, timeAgoFormat } from "libs/utils";

const ProjectCard = ({data, className}: {data: any, className?: string}) => {
    return (
        <Link to={URL.FUND.replace(':uid', data.uid)} className={"flex flex-col text-sm text-gray-500 bg-white " + className}>
            <img src={data.image} className="object-cover h-44" alt="" />
            <div className="flex flex-col px-4 py-5">
                <div className="text-lg font-bold text-black line-clamp-1">{data.headline}</div>
                <div className="pt-2 text-justify line-clamp-4">{data.description}</div>
                <div className="pt-10 pb-3">{"Last donation is " + timeAgoFormat(data.createdAt)}</div>
                <Progress percent={40} />
                <div className="flex justify-between pt-5">
                    <div className="font-bold text-black">$0M raised</div>
                    <div>${nFormatter(data.amount, 1)} Goal</div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard;