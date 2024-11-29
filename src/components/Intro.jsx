import React from 'react';
import '../App.css';  // Pastikan Anda sudah membuat styling yang sesuai di file CSS

function Intro() {
  return (
<div className="intro-section" id='intro'>
  <div className="container">
    <div className="row align-items-center">
      {/* Text Column */}
      <div className="col-lg-6 order-lg-1 order-2">
        <h1>Welcome to <span className="highlight">HaloSani</span> - Your Mental Health Support Platform</h1>
        <p>
          In today’s fast-paced world, mental health has become a crucial aspect of overall well-being.
          At <strong>HaloSani</strong>, we understand the challenges individuals face in managing mental health,
          and we are here to provide a supportive and accessible environment. Whether you're dealing with stress,
          anxiety, depression, or any other mental health issues, <strong>HaloSani</strong> is your reliable companion
          on the journey to better mental health.
        </p>
        <p>
          <strong>HaloSani</strong> offers a variety of tools and resources to help you stay informed and supported:
        </p>
        <ul>
          <li><strong>Mental Health Tracking:</strong> Keep track of your mood, progress, and mental health status with personalized tracking features.</li>
          <li><strong>AI-based NLP Chatbot:</strong> Consult with an AI-driven chatbot that can provide instant support and advice for your mental health concerns.</li>
          <li><strong>Mental Health Disorder Library:</strong> Access a comprehensive library of mental health resources, including research papers, articles, and PDFs to help you understand different disorders and how to manage them effectively.</li>
          <li><strong>Expert Mentorship:</strong> Connect with professional mentors who can offer expert advice and guidance tailored to your needs.</li>
          <li><strong>Community Support:</strong> Join a community of people who understand your journey, share experiences, and offer peer support in a safe and confidential space.</li>
        </ul>
        <p>
          Our goal is to help you not only understand your mental health but also to take the necessary steps to improve it,
          with the support of experts and technology. <strong>HaloSani</strong> is here to guide you towards a balanced, healthy,
          and fulfilled life.
        </p>
      </div>

      {/* Image Column */}
      <div className="col-lg-6 order-lg-2 order-1">
        <div className="img-holder">
          <img
            src="./assets/images/HALOSANI.png"
            className="img-fluid"
            alt="Mental Health Support"
          />
        </div>
      </div>
    </div>
  </div>
</div>



  );
}

export default Intro;
