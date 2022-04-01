import React from "react";
import Switch from "react-switch";

const Toggle = ({onChange, checked}) => {
    return (
        <Switch
            onChange={onChange}
            checked={checked}
            checkedIcon={false}
            uncheckedIcon={false}
            activeBoxShadow="0px 0px 1px 10px rgba(15, 118, 110, 0.3)"
            height={20}
            width={36}
            handleDiameter={16}
            onColor="#0f736e"
            offColor="#dddddd"
        />
    )
}

export default Toggle;