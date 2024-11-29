import React from 'react';
import '../App.css';  // Pastikan Anda sudah membuat styling yang sesuai di file CSS


function MDL({ libraryItems }) {
  return (
    <div className="mdl-section" id="features">
      <div className="container">
        <div className="section-title">
          <small>Mental Health Disorder Library</small>
          <h3>Perpustakaan Gangguan Kesehatan Mental</h3>
        </div>

        <div className="row">
          {libraryItems.map((item) => (
            <div key={item.id} className="col-12 col-lg-4">
              <div className="card features">
                <div className="card-body">
                  <div className="media">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid mr-3"
                      style={{ maxWidth: "100px", borderRadius: "8px" }}
                    />
                    <div className="media-body">
                      <h4 className="card-title">{item.title}</h4>
                      <p className="card-text">{item.description}</p>
                      <a
                        href={item.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Read PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MDL;
