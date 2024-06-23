import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="container">
  
            <div className="contents">
                <div className="review-box">
                    <p>Review Status</p>
                </div>
                <div className="submission-box">
                    <p>Submissions</p>
                </div>
                <div className="Calender-box">
                    <p>Calender</p>
                </div>
                <div className="Upcomingevents-box">
                    <p>Upcoming Events</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
