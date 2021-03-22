import "./PhotoComp.css";

const PhotoComp = (props) => {
  // end point -> src={props.image.urls.full}
  // text should also change color for better readability based on background img color

  return (
    <>
      <div
        className="imgs"
        style={{
          backgroundImage: `url(${props.img.urls.regular})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
          backgroundAttachment: "fixed",
          fontFamily: "Merriweather, serif"
        }}
      >
        <div className="headerStyles">
          <h1
          style={{
            color: 'white',
            textShadow: '2px 2px 5px rgba(0,0,0,0.300), 5px 5px 10px rgba(0,0,0,0.500), 10px 10px 20px rgba(0,0,0,0.700)'
            
            
          }}
          >{props.img.user.location}</h1>
          <h2
            style={{
              color: 'white',
              textShadow: '2px 2px 5px rgba(0,0,0,0.300), 5px 5px 10px rgba(0,0,0,0.500), 10px 10px 20px rgba(0,0,0,0.700)'

          }}
          >{props.img.alt_description}</h2>
        </div>

        <div className="">
          <button className="btn1">
            <a
              target="_blank"
              href={`https://unsplash.com/@${props.img.user.username}`}
              className=""
              
            >
              {props.img.user.name}
              {console.log(props)}
            </a>
          </button>
          <button className="btn2">Existing Inventory</button>
        </div>
      </div>
    </>
  );
};

export default PhotoComp;
