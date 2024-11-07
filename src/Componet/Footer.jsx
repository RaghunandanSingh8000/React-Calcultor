import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer style={footerStyle}>
            <p>&copy; {new Date().getFullYear()} React Calculator. All rights reserved.</p>
        </footer>
    );
}

const footerStyle = {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0'
};

export default Footer;