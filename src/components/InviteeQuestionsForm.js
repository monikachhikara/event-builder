import {Link} from 'react-router-dom';
import MoreInviteeQuestions from './MoreInviteeQuestions';


function InviteeQuestionsForm({onModalOpen}){

    const handlLinkClick = (e)=>{
        e.preventDefault();
        onModalOpen();
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
                        <label for="comment">Share anything for the meeting:</label>
                        <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
                    </div>
                    <div className='m-3'>
                        <Link to="#" onClick={handlLinkClick} >Add new Question</Link>
                    </div>
                </form>
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-primary buttonNext">Finish</button>
                </div>
            </div>
        </div>
    )
}

export default InviteeQuestionsForm;