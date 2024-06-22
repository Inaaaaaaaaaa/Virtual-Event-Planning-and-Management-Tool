import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="container">
  
            <div className="contents">
                <div className="review-box">
                    <p>Review Status</p>
                </div>
                <div className="events-box">
                    <p>Upcoming Events</p>
                </div>
                <div className="messages-box">
                    <p>Messages</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
