"use client"; // Assuming you need client-side functionality

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CiBellOn } from 'react-icons/ci';
import axios from 'axios'; // Assuming you're using Axios
import NoticeModal from './NoticeModal';

function NoticeBoard() {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Flag for loading state
  const [error, setError] = useState(null); // Track any errors

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear previous errors

      try {
        const response = await axios.get('http://bike-csecu.com:5000/api/notice');
        setNotices(response.data.data.slice(0, 5)); // Adjust path if needed
      } catch (error) {
        console.error('Error fetching notices:', error);
        setError(error); // Store error for handling
      } finally {
        setIsLoading(false); // Set loading state to false regardless of success or failure
      }
    };

    fetchData();
  }, []);

  const handleNoticeClick = (notice) => {
    setSelectedNotice(notice);
  };

  const handleModalClose = () => {
    setSelectedNotice(null);
  };

  return (
    <div className="card">
      <div className="CustomContainer text-center p-1 text-white"><h3>Notice Board</h3></div>
      <div className="p-2">
        {isLoading ? ( // Conditional rendering based on loading state
          <p>Loading notices...</p>
        ) : error ? ( // Handle errors gracefully
          <p>Error fetching notices: {error.message}</p>
        ) : notices.length > 0 ? (
          notices.map((notice) => (
            <div key={notice.notice_id || notice.id} className="border border-secondary m-1 p-1">
              <CiBellOn className="mr-2" size={24} />
              
                <a className="notice-link text-decoration-none"  onClick={() => handleNoticeClick(notice)}>{notice.notice_title}</a>
             
            </div>
          ))
        ) : ( // Display a message if no notices are found
          <p>No notices found.</p>
        )}
        <div className="text-center">
          <button type="button" className="btn btn-primary">
          <p>All Notice</p>
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default NoticeBoard;
