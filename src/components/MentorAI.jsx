// // components/MentorAI.jsx
// import React, { useState, useEffect } from "react";

// function MentorAI() {
//     const [mentorMessage, setMentorMessage] = useState("");

//     useEffect(() => {
//         fetch("http://localhost:3000/api/mentor")
//             .then((response) => response.json())
//             .then((data) => {
//                 setMentorMessage(data.message);
//             })
//             .catch((error) => console.error("Error fetching data:", error));
//     }, []);

//     return (
//         <div>
//             <h2>Mentor AI</h2>
//             <p>{mentorMessage}</p>
//         </div>
//     );
// }

// export default MentorAI;

// pages/mentor.js in your Next.js project
import React, { useState, useEffect } from 'react';

function MentorAI() {
  const [mentorMessage, setMentorMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/mentor')
      .then((response) => response.json())
      .then((data) => setMentorMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Mentor AI</h1>
      <p>{mentorMessage}</p>
    </div>
  );
}

export default MentorAI;
