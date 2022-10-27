import React from "react";

interface PicturesTypes {
    pictures: string[];
}

const Pictures = ({ pictures }: PicturesTypes) => {
    return (
        <>
            {pictures.map((picture, index) => (
                <img
                    className="format-img"
                    src={picture}
                    key={`img:` + index}
                    alt={`img number:` + index}
                />
            ))}
        </>
    )
}

export default Pictures;
