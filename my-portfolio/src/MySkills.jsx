import React from 'react';
import skillsData from './skillsData.json'; // Ensure this file exists and is properly structured.

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <h2 className="skills--section--heading">My Skills</h2>
      
      <div className="skills--section--container">
        {skillsData?.skills && skillsData.skills.length > 0 ? (
          skillsData.skills.map((item) => (
            <div key={item.id} className="skills--section--card">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          ))
        ) : (
          <p>No skills available.</p>
        )}
      </div>
      <br/>
    </section>
  );
}
