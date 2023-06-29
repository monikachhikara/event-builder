import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OneOnOne(){
    const[seletedDate, setSelectedDate] = useState('');
    const[selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const navigate =  useNavigate();

    const timeSlots = [
        '9:00 AM',
        '10:00 AM',
        '11:00 AM',
        '12:00 PM',
        "1:00 PM",
        '2:00 PM'
    ];

    const handleDateChange = (event)=>{
        console.log(event.target.value)
        setSelectedDate(event.target.value);
    }

    const handleTimeSlotChange= (event)=>{
        setSelectedTimeSlot(event.target.value);
    }

    const generatedTimeSlotOptions =  timeSlots.map((timeslot, index)=>(
         <option key={index} value={timeslot}>
         {timeslot}
        </option>
    )) 
    
    const handleNextClick = () =>{
        navigate('/inviteequestionsform');
    }

    return (
        <div className="container">
        <h3 className="heading">Let's create a One-On-One Event</h3>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="m-3">
                            <label className="form-label">Name:</label>
                            <input type="text" className="form-control"  placeholder="Enter Name" />
                        </div>
                        <div className="m-3">
                            <label className="form-label">Description:</label>
                            <textarea rows={3} className="form-control" placeholder="Enter description" />
                        </div>
                        <div className="m-3">
                            <label className="form-label">Date:</label>
                            <input type="date" className="form-control" placeholder="Enter your dates" value={seletedDate} onChange={handleDateChange}/>
                        </div>
                        <div className="m-3">
                            <label className="form-label">Select a time slot:</label>
                            <select value={selectedTimeSlot} onChange={handleTimeSlotChange} >
                                {generatedTimeSlotOptions}
                            </select>
                        </div>
          
                    </form>
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-primary buttonNext" onClick={handleNextClick}>Next</button>
                </div>
        </div>
        </div>
    )
}

export default OneOnOne;