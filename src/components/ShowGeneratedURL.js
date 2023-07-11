import { useLocation, useNavigate } from "react-router-dom";

function ShowGeneratedURL(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const generatedURL = queryParams.get('url');
    const navigate = useNavigate();

    const handleBackEvent = (e)=>{
        e.preventDefault();
        navigate('/one-on-one');
    }

    return (
        <div className="container">
        <div className="card mt-5">
            <div className="card-header">
                <h3 className="text-center">This is your unique generated URL for the meeting</h3>
            </div>
            <div className="card-body">
                <p className="text-center">{generatedURL} </p>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-primary buttonRight" onClick={handleBackEvent}>Back to Event</button>
            </div>
        </div>
            
            
        </div>
    )
}


export default ShowGeneratedURL;