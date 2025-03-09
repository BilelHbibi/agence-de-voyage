import React from "react";
import about from "../assets/images/about.png";

import "../styles/about.css";
import { Col, Container, Row } from "reactstrap";

const About = () => {
  return (
    <>
      <section className="about">
        <Container>
          <Row>
            <Col lg="6">
              <>
                <div className="detail">
                  <h1> Who we Are ?</h1>
                  <hr />
                  <p>
                    At Travel World, we're not just in the business of booking
                    trips; we're in the business of creating memories. Our
                    journey began with a deep passion for exploration and a
                    desire to share the wonders of the world with you. What sets
                    us apart? It's our dedication to crafting personalized
                    travel experiences that reflect your unique interests and
                    desires. Whether you're a solo traveler seeking adventure, a
                    couple looking for a romantic escape, or a family yearning
                    for quality time together, we've got you covered. Our team
                    of travel enthusiasts and experts has scoured the globe to
                    handpick the most incredible destinations, accommodations,
                    and activities. We take pride in the relationships we've
                    built with our partners, ensuring you get the best value for
                    your travels. Travel World is your gateway to a world of
                    discovery, and we're here to guide you every step of the
                    way. Join us on a journey of a lifetime, where every moment
                    is an opportunity to create cherished memories.
                  </p>
                </div>
              </>
            </Col>

            <Col lg="6">
              <div className="img">
                <img src={about} alt="" />
              </div>
              <div className="feedback">
              <div className="details">
                <div><i class="ri-thumb-up-line"></i></div>
                  <h3>99%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div className="details">
                <i class="ri-star-line"></i>
                  <h3>98%</h3>
                  <p>Successful Campaigns</p>
                </div>
                <div className="details">
                <i class="ri-user-line"></i>
                  <h3>100+</h3>
                  <p>clients served</p>
                </div>
                <div className="details">
                <i class="ri-list-check-3"></i>
                  <h3>3000</h3>
                  <p>campaigns made</p>
                </div>
                <div className="details">
                <i class="ri-line-chart-fill"></i>
                  <h3>450%</h3>
                  <p>Average YOY organic growth</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
