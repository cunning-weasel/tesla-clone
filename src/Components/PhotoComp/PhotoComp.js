const PhotoComp = (props) => {

    // end point -> src={props.image.urls.full}

    return (
        <>
            <img src={props.img.urls.regular} className="imgs" />
                <a
                    target="_blank"
                    href={`https://unsplash.com/@${props.img.user.username}`}
                    className=""
                >
                    {/* {props.img.user.name} */}
                </a>
        </>
    )
}

export default PhotoComp;

