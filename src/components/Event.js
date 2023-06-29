import {useNavigate} from 'react-router-dom';

function Event(){
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate('/one-on-one');
    }

    return (
        <div className="container">
            <h1 className="heading">Choose the type of event you want to create</h1>
                <div className="card cardList">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between aligns-item-center ">One-On-One<button className="btn btn-outline-primary" onClick={handleClick}>Create</button></li>
                        <li className="list-group-item d-flex justify-content-between aligns-item-center">Group Event<button className="btn btn-outline-primary">Create</button></li>
                        <li className="list-group-item d-flex justify-content-between aligns-item-center">Round Robin Event<button className="btn btn-outline-primary">Create</button></li>
                    </ul>
                </div>
        </div>
    )
}

export default Event;