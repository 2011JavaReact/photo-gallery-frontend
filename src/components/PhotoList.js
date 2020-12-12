import React from "react";

const PhotoList = (props) => {

    return (
        <div className="container">
            {props.photosArray.map((photo) => {
                    return (
                            <div className="row">
                                <div className="thumbnail">
                                    <a href={photo.address}></a>
                                    <img src={photo.address} style={{ width: '100%' }} />
                                    <div className="caption">
                                        <p>{photo.title}</p>
                                        <p>{photo.contributor}</p>
                                    </div>

                                </div>
                            </div>
                    );
                })
            }
        </div>
    );
};
export default PhotoList;