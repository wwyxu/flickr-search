import React from "react";

interface Pictures {
    pictures: string[];
}

const Pictures = ({ pictures }: Pictures) => {
    return (
        <>
            {pictures.map((picture, index) => (
                <img
                    className="format-img"
                    src={picture}
                    alt={`img number` + index}
                />
            ))}
        </>
    )
}

export default Pictures;
