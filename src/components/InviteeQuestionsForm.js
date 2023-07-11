import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function InviteeQuestionsForm({onModalOpen}){
    const navigate = useNavigate();

    const handlLinkClick = (e)=>{
        e.preventDefault();
        onModalOpen();
    }
   
    const handleUrlGenerate = (e)=>{
        e.preventDefault();
        const uniqueURL= generatedURL();

        navigate(`/uniqueURL?url=${encodeURIComponent(uniqueURL)}`);
    }

    const generatedURL= ()=>{
        const timeStamp = Date.now().toString();
        const randomString = Math.random().toString(36).substring(2,5);

        const uniqueURL = `https://eventsBuilder.com/meeting/${timeStamp}-${randomString}`;
        return uniqueURL;
    }

    return(
        <div className="container">
            <div className="card mt-5">
                <div className="card-header">
                    <h6>Invitee Questions</h6>
                </div>
                <div className="card-body">
                    <form>
                    <div className="m-3">
                        <label className="form-label">Name:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="m-3">
                        <label className="form-label">Email:</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="m-3">
                        <label className="form-label">Phone Number:</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="m-3">
                        <label>Share anything for the meeting:</label>
                        <textarea className="form-control" rows="5" id="comment" name="text"></textarea>
                    </div>
                    <div className='m-3'>
                        <Link to="#" onClick={handlLinkClick} >Add new Question</Link>
                    </div>
                </form>
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-primary buttonRight" onClick={handleUrlGenerate}>Finish</button>
                </div>
            </div>
        </div>
    )
}

export default InviteeQuestionsForm;