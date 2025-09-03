import React from 'react';
import { SiFacebook } from 'react-icons/si'; // You can choose any social media icon

const Facebook = ({ iconHref }) => {
  return (
    <div style={styles.container}>
      <a href={iconHref} target="_blank" rel="noopener noreferrer" style={styles.iconWrapper}>
        <SiFacebook style={styles.icon} />
      </a>
      <h2 style={{fontSize: '20px'}}>Become a fun on Facebook</h2> 
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%', // or any desired width
  },
  iconWrapper: {
    marginRight: '8px',
    textDecoration: 'none',
  },
  icon: {
    fontSize: '30px',
    color: '#1DA1F2', // Twitter blue, change as needed
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '16px',
  },
};

export default Facebook;