import React from 'react';
import './CoursesHighlight.css'
import clock from "./../../../Images/alarm-clock.png";
import teacher from "./../../../Images/online-lesson.png";
import books from "./../../../Images/bookshelf.png";

const CoursesHighlight = () => {
    return (
        <div className="items container">
        <div className="item">
          <img src={books} alt="" />
          <div>
            <h4>60+ UX courses</h4>
            <p>The automated process all your website tasks</p>
          </div>
        </div>
        <div className="item">
          <img src={teacher} alt="" />
          <div>
            <h4>Expert instructors</h4>
            <p>The automated process all your website tasks</p>
          </div>
        </div>
        <div className="item">
          <img src={clock} alt="" />
          <div>
            <h4>Life Time access</h4>
            <p>The automated process all your website tasks</p>
          </div>
        </div>
      </div>
    );
};

export default CoursesHighlight;