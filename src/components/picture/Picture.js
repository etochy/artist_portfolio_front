import { useState } from "react";
import "./Picture.css"

export function Picture({ picture, cle }) {

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
            <img src={picture?.path} alt={picture?.description} className="fullPicture" />
        </div>
    );

    return (
        <>
            <div className="container_img" onClick={openPicture}>
                <img src={picture?.path} alt={picture?.title} className="picture" />
                <div className="text_picture">
                    <span>
                        {picture?.title}
                    </span>
                    <span>
                        {picture?.description}
                    </span>
                </div>
            </div>
            {isOpen ? (
                fullPicture
            ) : (<></>)}
        </>
    );
}