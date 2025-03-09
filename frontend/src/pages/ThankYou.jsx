import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "../styles/thankyou.css";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="tanks__you">
              <span>
                <i class="ri-checkbox-circle-line"></i>
              </span>
              <h1 className="mb-3 fw-semibold">Thank you</h1>
              <h3 className="mb-4">your tour is booked.</h3>

              <Button className="btn primary__btn w-25">
                <Link to='/home'>Back to Home</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ThankYou;
