import PhotoComp from "../PhotoComp/PhotoComp";
import { useEffect, useState } from "react";
import "./Body.css";

const Body = (props) => {
  // end point - props.setPhotos.results.urls.full;
  
  // can useContext for all this state shenanigans - and import func for fetching for different pages/ sub-pages
  
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    if (props.setPhotos === null) {
      return;
    }
    const arrRandom = [...props.setPhotos.results];
    const arrStore = [];
    for (let i = 0; i < 4; i++) {
      const index = Math.random();
      const randomNum = Math.floor(index * arrRandom.length);
      arrStore.push(arrRandom.splice(randomNum, 1)[0]);
    }
    // console.log(arrStore);
    setPhotos(arrStore);
  }, [props.setPhotos]);

  // set condition to show user loading screen if data isn't loaded
  if (props.setPhotos === null) {
    return <div className="loader">...Loading mate...</div>;
  } else {
    return (
      <>
      <div className="body-container">
        <h1>Model S (parallax)</h1>
        <h2>Order Online for Touchless Delivery</h2>
        {photos.map((img) => (
          <li key={img.id} className="img">
            {/* <img src={img.urls.regular} /> */}
            <PhotoComp img={img} />
          </li>
        ))}
        </div>
        <div>
          <button>CUNSTOM ORDER</button>
          <button>Something Something..</button>
        </div>
      </>
    );
  }
};

export default Body;
