import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
// import { FaFacebook } from "react-icons/fa"; // You can choose any social media icon

const Instagram = ({  iconHref }) => {
  return (
    <div style={styles.container}>
      <a href={iconHref} target="_blank" rel="noopener noreferrer" style={styles.iconWrapper}>
        <SlSocialInstagram style={styles.icon} />
      </a>
       <h2 style={{fontSize: '20px'}}>Follow us om Instagram</h2>  
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
    color: '#f1ca1aff', // Twitter blue, change as needed
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '16px',
  },
};

export default Instagram;