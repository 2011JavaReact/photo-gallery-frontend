import React from 'react';

const Photo = ({ photo }) => {
    return (
        <div className="col-md-4">
            <div className="thumbnail">
                <a href={photo.address} >
                    <img src={photo.address} alt="Lights" style={{ width: '100%' }} />
                    <div className="caption">
                        <p>{photo.title} </p>
                    </div>
                </a>
            </div>
        </div>
    )
}