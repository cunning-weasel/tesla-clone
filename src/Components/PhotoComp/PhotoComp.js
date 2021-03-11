const PhotoComp = (props) => {

    // end point -> src={props.image.urls.full}

    return (
        <>
        <div className="imgs" style={{
            backgroundImage: `url(${props.img.urls.regular})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100vw',
            backgroundAttachment: 'fixed',
            }}>
        </div>
                
            {/* <img src={props.img.urls.regular} className="imgs" />  */}
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

