import React from 'react';

const ButtonFetchUsers = props => {
  return (
    <button style={{
      padding: '10px 20px',
      border: '2px solid black',
      backgroundColor: 'white',
      margin: '20px auto',
      display: 'block'
    }}
      onClick={props.click}>Add users</button>
  );
}

export default ButtonFetchUsers;