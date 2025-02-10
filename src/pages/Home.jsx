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
                                                href="https://1067-103-49-68-8.ngrok-free.app "
                                        
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
                    <h2>Mental Health Disorder Library</h2>
                        <p>Fitur eBook dalam aplikasi HaloSani dirancang untuk memberikan akses kepada pengguna ke berbagai sumber informasi berkualitas yang relevan dengan kesehatan mental. Fitur ini memungkinkan pengguna untuk memperluas wawasan mereka, mendukung penelitian, dan meningkatkan pemahaman mereka tentang berbagai topik kesehatan mental.</p>

                            <ol>
                                <br/>
                                <li>Akses Mudah ke Materi Berkualitas dimana Pengguna dapat mengakses koleksi eBook yang tersedia kapan saja dan di mana saja melalui aplikasi. Materi yang disediakan mencakup berbagai topik seperti pengelolaan stres, kesehatan mental anak, dan teknik mindfulness.</li>
                                <li>Tampilan yang Responsif dan User-Friendly dimana Halaman eBook dirancang dengan antarmuka modern dan responsif, membuat pengalaman membaca menjadi nyaman, baik di perangkat seluler maupun desktop. Gambar ilustratif dan desain profesional turut memperkaya pengalaman pengguna.</li>
                                <li>Sumber untuk Penelitian dan Pembelajaran Konten eBook dirancang untuk mendukung mereka yang ingin melakukan penelitian atau sekadar memahami lebih dalam tentang topik kesehatan mental. Dengan koleksi materi dari berbagai pakar, fitur ini menjadi salah satu alat yang sangat bermanfaat bagi pelajar dan profesional.</li>
                            </ol>

                    </div>
                    <img src="./assets/images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                </div>
            </div>

            <div className="tab-pane fade" id="messages">
                <div className="d-flex flex-column flex-lg-row">
                    <img src="./assets/images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                    <div>
                    <h2>Event</h2>
                        <p>Fitur Event dalam aplikasi HaloSani dirancang untuk mempermudah pengguna mengetahui dan mengikuti berbagai acara yang berkaitan dengan kesehatan mental. Dengan fitur ini, pengguna dapat tetap terhubung dengan komunitas, memperluas wawasan, serta mendapatkan dukungan langsung melalui acara yang relevan.</p>

                            <ol>
                                <br/>
                                <li>Informasi Terpusat dan Mudah Diakses Pengguna dapat melihat jadwal acara kesehatan mental seperti seminar, lokakarya, kelas mindfulness, atau pelatihan secara langsung melalui aplikasi, tanpa perlu mencari informasi di berbagai platform.</li>
                                <li>Rincian Acara yang Lengkap Setiap event dilengkapi dengan informasi penting seperti tanggal, waktu, lokasi (online/offline), deskripsi acara, narasumber, dan cara pendaftaran, sehingga pengguna dapat merencanakan keikutsertaan dengan mudah.</li>
                                <li>Meningkatkan Keterlibatan dalam Komunitas Dengan menghadiri acara, pengguna dapat bertemu dengan sesama individu yang peduli terhadap kesehatan mental, menjalin relasi, dan berbagi pengalaman dalam suasana yang mendukung dan inklusif.</li>
                            </ol>

                    </div>
                </div>
            </div>

            <div className="tab-pane fade" id="livechat">
                <div className="d-flex flex-column flex-lg-row">
                    <div>
                    <h2>Live Chat Community</h2>
                        <p>Fitur Live Chat Community dalam aplikasi HaloSani dirancang untuk menciptakan ruang interaksi yang inklusif dan mendukung, di mana pengguna dapat berbagi pengalaman, bertanya, dan mendapatkan motivasi dari komunitas yang peduli terhadap kesehatan mental.</p>

                            <ol>
                                <br/>
                                <li>Interaksi Langsung dengan Komunitas Pengguna dapat berkomunikasi secara langsung dengan individu lain yang memiliki minat serupa terkait kesehatan mental. Diskusi dapat mencakup berbagai topik, mulai dari tips manajemen stres hingga berbagi cerita inspiratif.</li>
                                <li>Berbagi dan Mendapatkan Dukungan Emosional Dalam komunitas ini, pengguna dapat berbagi pengalaman pribadi, mendengarkan cerita orang lain, dan saling memberikan dukungan moral yang sangat dibutuhkan, terutama bagi mereka yang mungkin merasa kesepian atau terisolasi.</li>
                                <li>Kolaborasi dengan Profesional Moderator atau konselor profesional juga dapat bergabung dalam diskusi tertentu untuk memberikan panduan atau menjawab pertanyaan, sehingga pengguna mendapatkan wawasan yang valid dan dapat dipercaya.</li>
                            </ol>

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
