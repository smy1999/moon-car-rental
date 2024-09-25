import React from 'react';

const ToastMessage = ({msg}: any) => {
  return (
    <div className="toast toast-top toast-end">
      <div className="alert alert-success">
        <span>{msg}</span>
      </div>
    </div>
  );
};

export default ToastMessage;