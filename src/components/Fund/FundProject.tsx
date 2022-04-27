import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "components/util/ProjectCard";
import FundAPI from "api/fund";
import { URL } from "libs/constants";
import { IoIosArrowForward } from "react-icons/io";

const FundProject = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        FundAPI.topRated(3).then(res => setData(res.data)).catch(err => alert(err.message));
    }, []);

    return (
        <div className="px-3 py-20">
            <div className="flex flex-wrap items-end justify-between gap-3">
                <div className="flex items-center text-2xl font-bold text-black">Featured Projects</div>
                <div className="flex items-center">
                    <Link to={URL.SEARCH} className="pr-3 hover:font-bold">See more</Link>
                    <IoIosArrowForward />
                </div>
            </div>
            <div className="grid gap-6 py-10 sm:grid-cols-2 md:grid-cols-3">
                { data.map((prop, key: number) => <ProjectCard data={prop} key={key} />) }
            </div>
        </div>
    )
}

export default FundProject;