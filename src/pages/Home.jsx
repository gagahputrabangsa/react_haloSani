import React, { useEffect } from 'react';

function Home() {
   
    return (
        <>
            <div className="nav-menu fixed-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-dark navbar-expand-lg">
                                <a className="navbar-brand" href="index.html">
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
                                            <a className="nav-link" href="#gallery">
                                                MENTOR AI
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#contact">
                                                CONTACT
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="login.html" className="btn btn-outline-light my-3 my-sm-0 ml-lg-3">
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

            <div>
                <header className="bg-gradient" id="home">
                    <div className="container mt-5">
                        <h1>Welcome to HaloSani</h1>
                        <p className="tagline">
                            HaloSani is a platform for someone who is concerned about <b>Mental Health</b>
                        </p>
                    </div>
                    <div className="img-holder mt-3">
                        <img src="./assets/images/samsung.png" alt="phone" className="img-fluid" />
                    </div>
                </header>
            </div>
            <div className="section light-bg" id="features">


<div className="container">

    <div className="section-title">
        <small>HIGHLIGHTS</small>
        <h3>Fitur yang mungkin kamu suka</h3>
    </div>


    <div className="row">
        <div className="col-12 col-lg-4">
            <div className="card features">
                <div className="card-body">
                    <div className="media">
                        <span className="ti-face-smile gradient-fill ti-3x mr-3"></span>
                        <div className="media-body">
                            <h4 className="card-title">Simple</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 col-lg-4">
            <div className="card features">
                <div className="card-body">
                    <div className="media">
                        <span className="ti-settings gradient-fill ti-3x mr-3"></span>
                        <div className="media-body">
                            <h4 className="card-title">Easy to Use</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 col-lg-4">
            <div className="card features">
                <div className="card-body">
                    <div className="media">
                        <span className="ti-lock gradient-fill ti-3x mr-3"></span>
                        <div className="media-body">
                            <h4 className="card-title">Secure</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</div>


{/* images */}
<div className="section">

<div className="container">
    <div className="row">
        <div className="col-lg-6 offset-lg-6">
            <div className="box-icon"><span className="ti-mobile gradient-fill ti-3x"></span></div>
            <h2>Discover our App</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel exercitationem eveniet vero maxime ratione </p>
            <a href="#" className="btn btn-primary">Read more</a>
        </div>
    </div>
    <div className="perspective-phone">
        <img src="./assets/images/samsung_r.png" alt="perspective phone" className="img-fluid"/>
    </div>
</div>
</div>

{/* end section */}

<div className="section light-bg">
    <div className="container">
        <div className="section-title">
            <small>FEATURES</small>
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
                        <h2>Curious about Mental Health?</h2>
                        <p className="lead">Uniquely</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla congue tincidunt ac a nibh.
                            Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,
                        </p>
                        <p>
                            malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.
                        </p>
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

<div className="section">

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="./assets/images/samsung_dual.png" alt="dual phone" className="img-fluid"/>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <div className="box-icon"><span className="ti-rocket gradient-fill ti-3x"></span></div>
                        <h2>Launch your App</h2>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel exercitationem eveniet vero maxime ratione </p>
                        <a href="#" className="btn btn-primary">Read more</a></div>
                </div>
            </div>

        </div>

    </div>

{/* endsection */}
<div className="section light-bg">
    <div className="container">
        <div className="row">
            <div className="col-md-8 d-flex align-items-center">
                <ul className="list-unstyled ui-steps">
                    <li className="media">
                        <div className="circle-icon mr-4">1</div>
                        <div className="media-body">
                            <h5>Create an Account</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem
                            </p>
                        </div>
                    </li>
                    <li className="media my-4">
                        <div className="circle-icon mr-4">2</div>
                        <div className="media-body">
                            <h5>Share with friends</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem eveniet
                            </p>
                        </div>
                    </li>
                    <li className="media">
                        <div className="circle-icon mr-4">3</div>
                        <div className="media-body">
                            <h5>Enjoy your life</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col-md-4">
                <img src="./assets/images/samsung.png" alt="iphone" className="img-fluid" />
            </div>
        </div>
    </div>
</div>

{/* end section */}
<div className="section">
    <div className="container">
        <div className="section-title">
            <small>TESTIMONIALS</small>
            <h3>What our Customers Say</h3>
        </div>

        <div className="testimonials owl-carousel">
            <div className="testimonials-single">
                <img src="./assets/images/client.png" alt="client" className="client-img" />
                <blockquote className="blockquote">
                    Uniquely streamline highly efficient scenarios and 24/7 initiatives. Conveniently embrace multifunctional ideas through proactive customer service. Distinctively conceptualize 2.0 intellectual capital via user-centric partnerships.
                </blockquote>
                <h5 className="mt-4 mb-2">Crystal Gordon</h5>
                <p className="text-primary">United States</p>
            </div>
            <div className="testimonials-single">
                <img src="./assets/images/client.png" alt="client" className="client-img" />
                <blockquote className="blockquote">
                    Uniquely streamline highly efficient scenarios and 24/7 initiatives. Conveniently embrace multifunctional ideas through proactive customer service. Distinctively conceptualize 2.0 intellectual capital via user-centric partnerships.
                </blockquote>
                <h5 className="mt-4 mb-2">Crystal Gordon</h5>
                <p className="text-primary">United States</p>
            </div>
            <div className="testimonials-single">
                <img src="./assets/images/client.png" alt="client" className="client-img" />
                <blockquote className="blockquote">
                    Uniquely streamline highly efficient scenarios and 24/7 initiatives. Conveniently embrace multifunctional ideas through proactive customer service. Distinctively conceptualize 2.0 intellectual capital via user-centric partnerships.
                </blockquote>
                <h5 className="mt-4 mb-2">Crystal Gordon</h5>
                <p className="text-primary">United States</p>
            </div>
        </div>
    </div>
</div>

{/* end section */}

<div className="section light-bg" id="gallery">
    <div className="container">
        <div className="section-title">
            <small>GALLERY</small>
            <h3>App Screenshots</h3>
        </div>

        <div className="img-gallery owl-carousel owl-theme">
            <img src="./assets/images/screen1.jpg" alt="screen1" />
            <img src="./assets/images/screen2.jpg" alt="screen2" />
            <img src="./assets/images/screen3.jpg" alt="screen3" />
            <img src="./assets/images/screen1.jpg" alt="screen4" />
        </div>
    </div>
</div>

<div className="section pt-0">
    <div className="container">
        <div className="section-title">
            <small>FAQ</small>
            <h3>Frequently Asked Questions</h3>
        </div>

        <div className="row pt-4">
            <div className="col-md-6">
                <h4 className="mb-3">Apakah aplikasi ini gratis?</h4>
                <p className="light-font mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.</p>
                <h4 className="mb-3">Apa sebenarnya tujuan aplikasi ini?</h4>
                <p className="light-font mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.</p>
            </div>
            <div className="col-md-6">
                <h4 className="mb-3">Apakah bisa minta resep obat disini?</h4>
                <p className="light-font mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.</p>
                <h4 className="mb-3">Apakah HaloSani ini buatan mahasiswa?</h4>
                <p className="light-font mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.</p>
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
