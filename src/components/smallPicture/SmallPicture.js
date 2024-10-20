import { useEffect, useState } from "react";
import "./SmallPicture.css"

export function SmallPicture({ picture, cle }) {

    const [isOpen, setOpen] = useState(false);

    function openPicture() {
        setOpen(true);
    }

    function closePicture() {
        if (isOpen) {
            setOpen(false);
        }
    }

    const fullPicture = (
        <div className="fullPictureContainer" onClick={closePicture}>
            <img src={picture.illustration} alt={picture.description} className="fullPicture" />
        </div>
    );


    return (
        <>
            <div className="container_img" onClick={openPicture}>
                <img src={picture.illustration} alt={picture.description} className="small_picture" />
                <div className="text_picture">
                    <span>
                        {picture.name}
                    </span>
                    <span>
                        {picture.description}
                    </span>
                </div>
            </div>
            {isOpen ? (
                fullPicture
            ) : (<></>)}
        </>
    );
}