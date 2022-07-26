import { useState } from 'react';
import './App.css';
import Links from './components/Links';
import mail from './icons/mail.svg'

function App() {
  const [redirect, setRedirect] = useState('Job')

  return (
    <div className="App">
      <div id='head'>
        <div className='head-info'>
          <div className='head-info-title'>
            <div className='head-info-title-2'>
              <h1>Mehmet Alemdar</h1>
              <h1>Full Stack & Mobile Developer</h1>
            </div>
          </div>
          <div className='head-info-mail'>
            <a href='mailto:alemdarmehmet6@gmail.com'>mail: alemdarmehmet6@gmail.com</a>
            <a href='mailto:alemdarmehmet6@gmail.com'>
              <img className='head-info-mailIcon' src={mail} alt="send a mail."  />
            </a>
          </div>
        </div>
        <div className='head-redirect'>
          <button 
            onClick={() => setRedirect('Job')}
            style={(redirect === 'Job') ? {borderBottom: '1px solid #171717'} : {borderBottom: 'none'}}
          >
            Job
          </button>
          <button 
            onClick={() => setRedirect('Art')}
            style={(redirect === 'Art') ? {borderBottom: '1px solid #171717'} : {borderBottom: 'none'}}
          >
            Art
          </button>
          <button 
            onClick={() => setRedirect('Social')}
            style={(redirect === 'Social') ? {borderBottom: '1px solid #171717'} : {borderBottom: 'none'}}
          >
            Social
          </button>
        </div>
      </div>
      <div id='links'>
        <Links name={redirect}/>
      </div>
    </div>
  );
}

export default App;
