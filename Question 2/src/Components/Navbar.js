import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <nav style={styles.navbar}>
      <button
        style={styles.segment}
        onClick={() => handleNavigate('/')}
      >
        Popular
      </button>
      <button
        style={styles.segment}
        onClick={() => handleNavigate('/topusers')}
      >
        TOp_users
      </button>
      <button
        style={styles.segment}
        onClick={() => handleNavigate('/feed')}
      >
        Feed
      </button>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#333',
    color: 'white',
  },
  segment: {
    cursor: 'pointer',
    padding: '10px 20px',
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    textAlign: 'center',
    transition: 'background-color 0.3s',
  },
};

export default Navbar;
