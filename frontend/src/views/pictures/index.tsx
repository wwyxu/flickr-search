import React from "react";

const Pictures = ({pictures}) => {
    return (
        <>
            {pictures.map((picture, index) => (
                <img
                    className="format-img"
                    src={picture}
                    alt="picture"
                />
            ))}
        </>
    )
}

export default Pictures;
