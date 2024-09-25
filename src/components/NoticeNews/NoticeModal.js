import React from 'react';

const NoticeModal = ({ notice, onClose }) => (
  <div className="modal">
    <div className="modal-content">
      <h2>{notice.notice_title}</h2>
      <p>{notice.notice_description}</p>
      <button onClick={onClose}>Cancel</button>
    </div>
  </div>
);
export default NoticeModal;

