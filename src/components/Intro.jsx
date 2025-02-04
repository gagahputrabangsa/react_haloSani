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
        Di dunia yang serba cepat saat ini, kesehatan mental telah menjadi aspek penting dari kesejahteraan keseluruhan.
        <strong>HaloSani</strong>,kami memahami tantangan yang dihadapi individu dalam mengelola kesehatan mental, dan kami hadir untuk menyediakan lingkungan yang suportif dan mudah diakses. Baik Anda berurusan dengan stres, kecemasan, depresi, atau masalah kesehatan mental lainnya,
        <strong>HaloSani</strong> adalah teman terpercaya Anda dalam perjalanan menuju kesehatan mental yang lebih baik.
        </p>
        <p>
          <strong>HaloSani</strong>menyediakan berbagai alat dan sumber daya untuk membantu Anda tetap terinformasi dan didukung:
        </p>
        <ul>
          <li><strong>AI-based NLP Chatbot:</strong> Konsultasikan dengan chatbot berbasis AI yang dapat memberikan dukungan dan saran instan untuk masalah kesehatan mental Anda.</li>
          <li><strong>Mental Health Disorder Library:</strong> Akses perpustakaan lengkap sumber daya kesehatan mental, termasuk makalah penelitian, artikel, dan PDF untuk membantu
           Anda memahami berbagai gangguan dan cara mengelolanya secara efektif.</li>
          <li><strong>Community Support:</strong> Berkomunikasi dengan orang-orang yang memahami perjalanan Anda, berbagi pengalaman, dan menawarkan dukungan sebaya dalam ruang yang aman dan rahasia.</li>
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
