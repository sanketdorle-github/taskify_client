
// src/components/Layout/Navbar.jsx
import React, { useEffect ,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({})
  const logout = () => {
    // localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login')
  };
  useEffect(()=>{
        const user = localStorage.getItem("user")
       setUser(user);
  },[])

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/">Home</Link>
      <div className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        {
            user ?
            <button onClick={logout}>Logout</button>:<> <Button><Link to="/login">login</Link> </Button> <Button><Link to="/register">register</Link> </Button></>
        }
        
        
      </div>
    </nav>
  );
};
export default Navbar;
