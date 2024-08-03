import React from 'react';

const CustomAlert = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div style={styles.alertContainer}>
      <div style={styles.alertBox}>
        <span>{message}</span>
        <button onClick={onClose} style={styles.closeButton}>X</button>
      </div>
    </div>
  );
};

const styles = {
  alertContainer: {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
  },
  alertBox: {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '10px 20px',
    border: '1px solid #f5c6cb',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginLeft: '20px',
  }
};

export default CustomAlert;
