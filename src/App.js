import './App.css';
import Event from './components/Event';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OneOnOne from './components/OneOnOne';
import InviteeQuestionsForm from './components/InviteeQuestionsForm';
import {useState} from 'react';
import MoreInviteeQuestions from './components/MoreInviteeQuestions';
import ShowGeneratedURL from './components/ShowGeneratedURL';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = ()=>{
      setIsOpen(true);
  }

  const handleModalClose = ()=>{
    setIsOpen(false);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/one-on-one" element={<OneOnOne />} />
        <Route path="/event" element={<Event />} />
        <Route 
        path='/inviteequestionsform' 
        element={
          <>
          <InviteeQuestionsForm onModalOpen={handleModalOpen} />
          {isOpen && <MoreInviteeQuestions onClose={handleModalClose} />}
          </>
        }
        />
        <Route path='/uniqueURL' element={<ShowGeneratedURL />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
