import React from 'react';
import { SiTiktok } from "react-icons/si";
// import { FaFacebook } from "react-icons/fa"; // You can choose any social media icon

const Instagram = ({  iconHref }) => {
  return (
    <div style={styles.container}>
      <a href={iconHref} target="_blank" rel="noopener noreferrer" style={styles.iconWrapper}>
        <SiTiktok style={styles.icon} />
      </a>
       <h2 style={{fontSize: '20px'}}>Find us on Tiktok</h2>  
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
    color: '#1a1917ff', // Twitter blue, change as needed
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '16px',
  },
};

export default Instagram;