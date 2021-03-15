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
        }}
      >
        <div className="">
          <h1>{props.img.user.location}</h1>
          <h2>{props.img.alt_description}</h2>
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
