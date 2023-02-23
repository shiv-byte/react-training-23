
function InfoBlog (props){
 return (
    <div>
        <div className="container">
            <img src={props.imageSrc} alt="" />
            <div className="container-heading">
                <h3><b>{props.title}</b></h3>
                <p>{props.content}</p>
            </div>
        </div>
    </div>
);

}

export default InfoBlog;