import React from "react";

const Card = ({icon, title, desc}) => {

    return (
        <div className="flex flex-col gap-4 items-center w-[350px] shadow-lg p-10 rounded-xl">
            <img src={icon} alt="PHOTO" />
            <h3 className="font-bold text-[24px]">{title}</h3>
            <p className="font-light text-[#7D7987] text-[16px]">{desc}</p>
        </div>
    )
}

export default Card