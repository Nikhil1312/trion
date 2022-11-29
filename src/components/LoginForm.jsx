import { useState } from 'react';
import axios from 'axios';

const projectID = 'eb425b17-30d0-41de-9747-4ab3e664b3f5';

const Modal = ({isLoggedin, setIsLoggedin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const[isLoggedin,setIsLoggedin]=useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      // window.location.reload();
      setError('');
      setIsLoggedin(true)
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  const Logout= ()=>{
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    setIsLoggedin(false)

  }
  const form =  
  <form onSubmit={handleSubmit}>
  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
  <div align="center">
    <button type="submit" className="button">
      <span>Start chatting</span>
    </button>
  </div>
</form>
 
  

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        {form}
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;