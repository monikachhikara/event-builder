function MoreInviteeQuestions({onClose}){

    const handleOnClose = ()=>{
        onClose();
    }

    return (
        
        <div className="container modal-overlay">
            <div className="modal-container">
                <div className="card modal-card">
                    <form>
                        <h6>New Question</h6>
                        <div className="m-3">
                            <label className="form-label">Question:</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="m-3">
                            <label className="form-label">Answer:</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="m-3">
                            <button className="btn btn-outline-primary" onClick={handleOnClose}>Close</button>
                            <button className="btn btn-outline-primary buttonRight">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     
    )
}

export default MoreInviteeQuestions;