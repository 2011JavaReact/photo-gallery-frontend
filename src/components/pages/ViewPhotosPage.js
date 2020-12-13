// import React, { useState, useEffect } from "react";
// import Axios from "axios";
// import ViewPhotos from "./ViewPhotos";

// const ViewPhotosPage = () => {
//   const [photos, setPhotos] = useState([]);
//   const getPhotos = async () => {
//     const resp = await Axios.get("http://localhost:8080/photo-gallery/photos?for=all");
//     console.log("response", resp);
//     setPhotos(resp.data);
//   };

//   const refreshPhotos = () => getPhotos();

//   useEffect(() => {
//     getPhotos();
//   }, []);

//   return (
//     <ViewPhotos
//       photos={photos}
//       refreshPhotos={refreshPhotos}
//     />
//   )
// }

// export default ViewPhotosPage
