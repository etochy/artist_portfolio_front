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
            <img src={picture?.illustration?.path} alt={picture?.illustration?.description} className="fullPicture" />
        </div>
    );

    return (
        <>
            <div className="container_img" onClick={openPicture}>
                <img src={picture?.illustration?.path} alt={picture?.illustration?.description} className="picture" />
                <div className="text_picture">
                    <span>
                        {picture?.illustration?.title}
                    </span>
                    <span>
                        {picture?.illustration?.description}
                    </span>
                </div>
            </div>
            {isOpen ? (
                fullPicture
            ) : (<></>)}
        </>
    );
}