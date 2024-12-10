import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import Intro from "../components/Intro"; // Make sure the path is correct
import MDL from "../components/MDL"; // Import the MDL component
// import MentorAI from '../components/MentorAI'; 

function Home() {
    const [mentorMessage, setMentorMessage] = useState("");
    const [carouselItems, setCarouselItems] = useState([]);  // Ensure this line exists
    const [libraryItems, setLibraryItems] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3000/api/mentor")
            .then((response) => response.json())
            .then((data) => {
                setMentorMessage(data.message);
            })
            .catch((error) => console.error("Error fetching data:", error));

        fetch("/mentalHealthLibrary.json")
            .then((response) => response.json())
            .then((data) => setLibraryItems(data))
            .catch((error) => console.error("Error fetching data:", error));

        // Fetch carousel data (replace with your API endpoint or JSON file path)
        fetch("/carouselData.json")
            .then((response) => response.json())
            .then((data) => {
                setCarouselItems(data);  // Update state here
            })
            .catch((error) => console.error("Error fetching carousel data:", error));
    }, []);
    
    // Line trail logic
    useEffect(() => {
        const lineContainer = document.createElement("div");
        lineContainer.id = "line-container";
        document.body.appendChild(lineContainer);

        let lastX = null;
        let lastY = null;

        const handleMouseMove = (event) => {
            const x = event.clientX;
            const y = event.clientY;

            if (lastX !== null && lastY !== null) {
                const deltaX = x - lastX;
                const deltaY = y - lastY;
                const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

                const line = document.createElement("div");
                line.className = "line";
                line.style.width = `${length}px`;
                line.style.left = `${lastX}px`;
                line.style.top = `${lastY}px`;
                line.style.transform = `rotate(${angle}deg)`;
                lineContainer.appendChild(line);

                setTimeout(() => {
                    line.remove();
                }, 500);
            }

            lastX = x;
            lastY = y;
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.body.removeChild(lineContainer);
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
            <div className="section light-bg">
                <div className="container"> 
                    <div className="section-title">
                        <h3>Event</h3>
                    </div>
                    <Slider {...settings} className="carousel-container">
                        {carouselItems.map((item) => (
                            <div key={item.id} className="carousel-slide">
                                <a href={item.href} target="_blank" rel="noopener noreferrer">
                                    <img src={item.image} alt={item.title} />
                                </a>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>

            {/* NAV */}
            <div className="nav-menu fixed-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-dark navbar-expand-lg">
                                <a className="navbar-brand" href="#">
                                    <img src="./assets/images/hals.png" className="img-fluid" alt="logo" />
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbar"
                                    aria-controls="navbar"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbar">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#home">
                                                HOME <span className="sr-only">(current)</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#features">
                                                MDL
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="http://localhost:3000/mentor"
                                        
                                                rel="noopener noreferrer"
                                            >
                                                MENTOR AI
                                            </a>
                                        </li> 
                                        <li className="nav-item">
                                            <a className="nav-link" href="#contact">
                                                FAQ
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#intro" className="btn btn-outline-light my-3 my-sm-0 ml-lg-3">
                                                Get Started
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* END NAV */}

        {/* INTRO */}
        <Intro />


     
        {/* END INTRO */}
        <MDL libraryItems={libraryItems} /> {/* Pass library items as prop */}





           
{/* end section */}

<div className="section light-bg">
    <div className="container">
        <div className="section-title">
            <small>About Our FEATURES</small>
            <h3>Do more with our app</h3>
        </div>

        <ul className="nav nav-tabs nav-justified" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#communication">
                    Mentor AI
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#schedule">
                    MDL
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#messages">
                    Event
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#livechat">
                    Live Chat
                </a>
            </li>
        </ul>

        <div className="tab-content">
            <div className="tab-pane fade show active" id="communication">
                <div className="d-flex flex-column flex-lg-row">
                    <img src="./assets/images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                    <div>
                        <h2>Tentang Mentor AI?</h2>
                        <p>Mentor AI adalah fitur berbasis kecerdasan buatan yang menggunakan teknologi Large Language Model (LLM) untuk memberikan dukungan, wawasan, dan saran terkait kesehatan mental. Model LLM dirancang untuk memahami, memproses, dan menghasilkan respons berbasis teks yang mendekati kemampuan komunikasi manusia. </p>

                            <ol>
                                <br/>
                                <li>Aksesibilitas 24/7: Mentor AI tersedia kapan saja, memberikan bantuan instan tanpa batasan waktu atau lokasi.</li>
                                <li>Privasi Terjamin: Pengguna dapat berbagi pengalaman mereka secara anonim, tanpa khawatir privasi terganggu.</li>
                                <li>Berbasis Bukti: Model LLM dapat diprogram untuk memberikan informasi yang valid dan akurat, menghindari self-diagnosis yang berbahaya.</li>
                                <li>Peningkatan Literasi Mental: Mentor AI membantu meningkatkan pemahaman pengguna tentang kesehatan mental dengan menjelaskan konsep secara sederhana namun informatif.</li>
                            </ol>

                    </div>
                </div>
            </div>

            <div className="tab-pane fade" id="schedule">
                <div className="d-flex flex-column flex-lg-row">
                    <div>
                        <h2>Want to do some Research?</h2>
                        <p className="lead">Uniquely</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,
                        </p>
                        <p>
                            malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.
                        </p>
                    </div>
                    <img src="./assets/images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                </div>
            </div>

            <div className="tab-pane fade" id="messages">
                <div className="d-flex flex-column flex-lg-row">
                    <img src="./assets/images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                    <div>
                        <h2>Have interest in their activity?</h2>
                        <p className="lead">Uniquely</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,
                        </p>
                        <p>
                            malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.
                        </p>
                    </div>
                </div>
            </div>

            <div className="tab-pane fade" id="livechat">
                <div className="d-flex flex-column flex-lg-row">
                    <div>
                        <h2>Live chat when you need it</h2>
                        <p className="lead">Uniquely</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,
                        </p>
                        <p>
                            malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.
                        </p>
                    </div>
                    <img src="./assets/images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                </div>
            </div>
        </div>
    </div>
</div>

{/* end section */}


<div className="section pt-0">
    <div className="container">
        <div className="section-title">
            <small>FAQ</small>
            <h3>Frequently Asked Questions</h3>
        </div>

        <div className="row pt-4">
            <div className="col-md-6">
                <h4 className="mb-3">Apakah aplikasi ini gratis?</h4>
                <p className="light-font mb-5">Ya, aplikasi ini sepenuhnya gratis untuk seluruh masyarakat Indonesia. Fokus utamanya adalah memberikan edukasi terkait kesehatan mental secara mudah dan dapat diakses oleh semua kalangan.</p>
                <h4 className="mb-3">Apa sebenarnya tujuan aplikasi ini?</h4>
                <p className="light-font mb-5">Tujuan utama HaloSani adalah untuk memberikan edukasi kesehatan mental serta membantu pengguna dalam melakukan diagnosa awal. Aplikasi ini dirancang untuk menjadi sumber informasi yang terpercaya dan mudah dipahami.</p>
            </div>
            <div className="col-md-6">
                <h4 className="mb-3">Apakah bisa minta resep obat di sini?</h4>
                <p className="light-font mb-5">Tidak, HaloSani tidak menyediakan layanan untuk meminta resep obat. Aplikasi ini lebih berfokus pada edukasi dan dukungan untuk diagnosa awal saja, bukan untuk pengobatan medis.</p>
                <h4 className="mb-3">Apakah HaloSani ini buatan mahasiswa?</h4>
                <p className="light-font mb-5">Ya, HaloSani adalah aplikasi yang dikembangkan oleh mahasiswa Universitas Trisakti dengan tujuan memberikan kontribusi positif dalam bidang kesehatan mental di Indonesia.</p>
            </div>
        </div>

    </div>
</div>



<div className="light-bg py-5" id="contact">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 text-center text-lg-left">
                <p className="mb-2">
                    <span className="ti-location-pin mr-2"></span> Jl.Mampang Prapatan II No.24A
                </p>
                <div className="d-block d-sm-inline-block">
                    <p className="mb-2">
                        <span className="ti-email mr-2"></span>
                        <a className="mr-4" href="mailto:halosani@gmail.com">halosani@gmail.com</a>
                    </p>
                </div>
                <div className="d-block d-sm-inline-block">
                    <p className="mb-0">
                        <span className="ti-headphone-alt mr-2"></span>
                        <a href="tel:081908370510">0819-0837-0510</a>
                    </p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="social-icons">
                    <a href="#"><span className="ti-facebook"></span></a>
                    <a href="#"><span className="ti-twitter-alt"></span></a>
                    <a href="https://instagram.com/anitomochi"><span className="ti-instagram"></span></a>
                </div>
            </div>
        </div>
    </div>

    {/* Mini logo that serves as the button */}


    {/* Chatango box */}
    <div id="chatango-box">
        <button id="close-btn">X</button>
    </div>
</div>



        </>
    );
}

export default Home;
