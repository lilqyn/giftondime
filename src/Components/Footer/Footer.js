import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px 0',
      textAlign: 'center',
      position: 'flex',
      bottom: 0,
      width: '100%'
    }}>
      <p>&copy; {new Date().getFullYear()} Gift On Dime. All rights reserved.</p>
      <div>
        <a href="#facebook" style={{ margin: '0 10px', color: '#fff' }}>Facebook</a>
        <a href="#instagram" style={{ margin: '0 10px', color: '#fff' }}>Instagram</a>
        <a href="#twitter" style={{ margin: '0 10px', color: '#fff' }}>Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
