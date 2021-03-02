import PhotoComp from "../PhotoComp";

const Body = (props) => {
    // can use urls.raw later
    // console.log(props.setPhotos.results.urls.raw);
    
    // how to add to api url params to get orientation in landscape?
    
    return (
        <div>
            <h1>Model S (parallax)</h1>
            <h2>Order Online for Touchless Delivery</h2>
                {props.setPhotos.results.map((image) => (
                    <li key={image.id} className="">
                        {/* <img src={image.urls.regular} /> */}
                        <PhotoComp image={image} />
                    </li>
                ))}
            <div>
                <button>CUNSTOM ORDER</button>
                <button>SOmething SEOMTHING..</button>
            </div>
        </div>
    );
}

export default Body;

