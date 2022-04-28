import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import { FeaturesCard } from "../../component/FeaturesCard/FeaturesCard.jsx";
import Fade from "react-reveal/Fade";

const Landing = () => {
  return (
    <div className="landing-container bg-white">
      <div className="landing-banner d-flex flex-column justify-content-center align-items-center">
        <div className="landing-banner-title">
          <h1 className="banner-title text-white ms-3">
            Happiness is also trained
          </h1>
          <Link
            to="/register/customer"
            className="cta-join ms-3 ps-3 pe-3 pt-2 pb-2"
          >
            Get started!
          </Link>
        </div>
      </div>

      <div className="landing-features row flex-column flex-lg-row gap-3 gap-md-0 gap-4 m-auto mt-2 mb-5 pt-5">
        <h2 className="mb-2 text-center">All in one place</h2>
        <h5 className="mb-5 text-center">Welcome to feel good</h5>
        <FeaturesCard
          icon="https://res.cloudinary.com/duxnadmyt/image/upload/v1649772245/salud_dvhwu5.png"
          title="We care about you"
          text="Physiotherapy services for you to feel better and walk around with less pain"
        />
        <FeaturesCard
          icon="https://res.cloudinary.com/duxnadmyt/image/upload/v1649772244/nutricion_ge8mbn.png"
          title="We help you"
          text="Complement your sessions with advice for a healthy and balanced diet"
        />
        <FeaturesCard
          icon="https://res.cloudinary.com/duxnadmyt/image/upload/v1649772244/calendario_siub4d.png"
          title="We adapt to you"
          text="Schedule your workouts and reschedule them when you need it"
        />
        <FeaturesCard
          icon="https://res.cloudinary.com/duxnadmyt/image/upload/v1649772244/mancuerna_nsf3tn.png"
          title="We provide you what you need"
          text="Our equipment is always up to date and in optimal conditions"
        />
        <FeaturesCard
          icon="https://res.cloudinary.com/duxnadmyt/image/upload/v1649772244/rendimiento_pm6e0n.png"
          title="We teach you"
          text="How to improve your sports performance with the resources you have"
        />
        <FeaturesCard
          icon="https://res.cloudinary.com/duxnadmyt/image/upload/v1649772244/app_obqtnz.png"
          title="We listen to you"
          text="You can communicate directly with our professionals through our app"
        />
      </div>

      <div className="landing-banner-bottom d-flex flex-column justify-content-center align-items-center">
        <div className="landing-banner-title">
          <h1 className="banner-title text-white ms-3">
            Invest in your well-being
          </h1>
          <Link
            to="/register/customer"
            className="cta-join ms-3 ps-3 pe-3 pt-2 pb-2"
          >
            Join us
          </Link>
        </div>
      </div>

      <section className="landing-testimonial">
        <div className="container-fluid pt-3">
          <div className="row d-flex justify-content-center testimonial-pos">
            <div className="col-md-12 d-flex justify-content-center">
              <h2>Still doubt? What our users say</h2>
            </div>
          </div>
        </div>
        <section className="landing-testimonial-bottom mb-3">
          <div className="container testimonial-inner">
            <div className="row d-flex justify-content-center">
              <div className="col-md-4 style-3">
                <div className="tour-item ">
                  <div className="tour-desc bg-white">
                    <div className="tour-text color-testimonial text-center">
                      “In Train in touch I found the training that fits my
                      schedule perfectly. Its staff is highly qualified and help
                      you with everything you need. ”
                    </div>
                    <div className="d-flex justify-content-center pt-2 pb-2">
                      <img
                        className="tm-people"
                        src="https://res.cloudinary.com/duxnadmyt/image/upload/v1649772456/testimonio1_d1zgxf.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-name fw-bold d-flex justify-content-center">
                      Sarah Wilson
                    </div>
                    <div className="d-flex justify-content-center mt-2 text-warning">
                      <i className="fas fa-star me-1"></i>
                      <i className="fas fa-star me-1"></i>
                      <i className="fas fa-star me-1"></i>
                      <i className="fas fa-star me-1"></i>
                      <i className="fas fa-star me-1"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 style-3">
                <div className="tour-item ">
                  <div className="tour-desc bg-white">
                    <div className="tour-text color-testimonial text-center">
                      “I really recommend this place! They have an amazing staff
                      that are super serious and makes you reach your goals with
                      a smile on their faces”
                    </div>
                    <div className="d-flex justify-content-center pt-2 pb-2">
                      <img
                        className="tm-people"
                        src="https://res.cloudinary.com/duxnadmyt/image/upload/v1649772456/testimonio2_ngwkgk.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-name fw-bold d-flex justify-content-center">
                      Matthew Scott
                    </div>
                    <div className="d-flex justify-content-center mt-2 text-warning">
                      <i className="fas fa-star me-1"></i>
                      <i className="fas fa-star me-1"></i>
                      <i className="fas fa-star me-1"></i>
                      <i className="fas fa-star me-1"></i>
                      <i className="fas fa-star me-1"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 style-3">
                <div className="tour-item ">
                  <div className="tour-desc bg-white">
                    <div className="tour-text color-testimonial text-center">
                      “Best training and trainers I have ever had in my life!
                      The trainers really push, motivate and helps us to exceed
                      our limits and achieve our goals.”
                    </div>
                    <div className="d-flex justify-content-center pt-2 pb-2">
                      <img
                        className="tm-people"
                        src="https://res.cloudinary.com/duxnadmyt/image/upload/v1649772456/testimonio3_ex6mat.jpg"
                        alt=""
                      />
                    </div>
                    <div className="testimonial-name fw-bold d-flex justify-content-center">
                      Olivia Myers
                    </div>
                    <div className="d-flex justify-content-center mt-2 text-warning">
                      <i className="fas fa-star me-1"></i>
                      <i className="fas fa-star me-1"></i>
                      <i className="fas fa-star me-1"></i>
                      <i className="fas fa-star me-1"></i>
                      <i className="fas fa-star me-1"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <div className="container d-flex mt-5 mb-5 pb-5 justify-content-center align-items-center">
        <div className="col-4">
          <h3 className="app-title">Get organized with our app</h3>
          <hr className="app-line mb-5" />
          <h5 className="app-text">Register and you will have access to:</h5>
          <Fade top cascade duration="2000">
            <ul className="app-list ms-5">
              <li className="app-lis">track your goals and your health</li>
              <li className="app-lis">schedule group classes</li>
              <li className="app-lis">schedule training sessions</li>
              <li className="app-lis">schedule physiotherapy sessions</li>
              <li className="app-lis">be in contact with our team</li>
            </ul>
          </Fade>
        </div>
        <div className="col-4 app-img"></div>
      </div>
    </div>
  );
};

export default Landing;
