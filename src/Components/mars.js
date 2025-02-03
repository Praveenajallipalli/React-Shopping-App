import { useState, useEffect } from "react";

export default function DataBindingComponent(){
    useEffect(() => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response => response.json())
        .then(data => {
            setMars(data);
        })
    },[])
    
    const [mars, setMars] = useState({photos: []});
    return ( 
        <div className="container">

            <h2>Mars photos</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo ID</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                        <th>Preview</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mars.photos.map(photo => 
                            <tr>
                                <td>{photo.id}</td>
                                <td>{photo.camera.full_name}</td>
                                <td>{photo.rover.name}</td>
                                <td>
                                    <img src={photo.img_src} width="100" height="100" />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div className="d-flex flex-wrap">
                {
                    mars.photos.map(photo => 
                        <div className="card p-2 m-2">
                            <img  src={photo.img_src} className="card-img" height="150" />
                            <div className="card-header">
                                <h2>{photo.camera.full_name}</h2>
                            </div>
                            <div className="card-body">
                                {photo.rover.name}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}