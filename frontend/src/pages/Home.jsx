import React from "react";
import "../styles/home.css";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from '../assets/images/experience.png'
import { Col, Container, Row } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/images-gallery/MasonryImagesGallery";
import Testimonial from "../components/testimonial/Testimonial";
import Newsletter from "../shared/Newsletter";
const Home = () => {
  return (
    <>
      {/*=============hero section start================= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle">
                  <Subtitle subtitle="Know Before You Go" />
                  <img src={worldImg} alt="" />
                </div>

                <h1>
                  Traveling opens the door to creating
                  <span className="highLight"> memories</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos quisquam, velit possimus neque nesciunt at nulla
                  commodi, officiis dolor debitis illo eligendi sed, sunt quas
                  repellat. Quis voluptates magnam totam.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box  mt-5">
                <img src={heroImg2} alt="" />
              </div>
            </Col>
          </Row>

          <SearchBar />
        </Container>
      </section>

      {/*===============service section start================*/}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/*===============featured tour section start================*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/*===============experience section start================*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br />
                  we will serve you
                </h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  <br />
                  In vel cumque rem dolor tempore ipsam harum porro itaque,
                </p>
              </div>
              <div className="counter_wrapper">
                <div className="counter__box">
                  <span>12K+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2K+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15K+</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/*===============gallery section start================*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery__title">Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/*===============Testimonial section start================*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'}/>
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>

            <Col lg='12'>
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>

      {/*===============Newsletter  start================*/}
      <Newsletter />
    </>
  );
};

export default Home;
