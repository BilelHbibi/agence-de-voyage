import { useEffect, useRef, useState, useContext } from "react";
import "../styles/style-card.css";
import { useParams } from "react-router-dom";
import { Col, Container, Form, ListGroup, Row } from "reactstrap";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
import useFetch from "./../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";

const TourDetails = () => {
  const { id } = useParams();

  const { user } = useContext(AuthContext);

  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);
  const {
    reviews,
    photo,
    title,
    address,
    city,
    price,
    distance,
    maxGroupSize,
    desc,
  } = tour;
  const reviewMgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  useEffect((e) => {
    window.scrollTo(0, 0);
  }, [tour]);
  //fetch data from database

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  //format date
  const date = new Date();
  const getJour = date.getDate();
  const getYear = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please sign in");
        
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        Credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok){
        return alert(result.message);
      }
      alert(result.message)
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading...........</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content">
                <img src={process.env.PUBLIC_URL + photo} alt={title} />
                </div>

                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="flex gap-5">
                    <span className="tour__rating flex gap-1">
                      <i
                        class="ri-star-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>

                    <span>
                      <i class="ri-map-pin-user-line"></i>
                      {address}
                    </span>
                  </div>

                  <div className="tour__extra-details">
                    <span>
                      <i class="ri-map-pin-line"></i>
                      {city}
                    </span>
                    <span>
                      <i class="ri-money-dollar-circle-line"></i>${price} per
                      person
                    </span>
                    <span>
                      <i class="ri-map-pin-time-line"></i>
                      {distance} k/m
                    </span>
                    <span>
                      <i class="ri-group-line"></i>
                      {maxGroupSize} people
                    </span>
                  </div>

                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                {/* =============tour reviews section=============== */}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className="flex gap-3 mb-4 rating__group">
                      <span onClick={() => setTourRating(1)}>
                        1<i class="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(2)}>
                        2<i class="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(3)}>
                        3<i class="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(4)}>
                        4<i class="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(5)}>
                        5<i class="ri-star-fill"></i>
                      </span>
                    </div>

                    <div className="review__input">
                      <input
                        type="text"
                        ref={reviewMgRef}
                        placeholder="share your throughts"
                        required
                      />
                      <button
                        className="btn primary__btn text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>
                <ListGroup className="user__reviews">
                  {reviews?.map((review) => (
                    <div className="review__item">
                      <img src={avatar} alt="" />
                      <div className="w-100">
                        <div className="flex justify-content-between">
                          <div>
                            <h5>{review.username}</h5>
                            <p>
                              {month} {getJour},{getYear}
                            </p>
                          </div>
                          <span className="flex">
                            {review.rating}
                            <i class="ri-star-fill"></i>
                          </span>
                        </div>
                        <h6>{review.reviewText}</h6>
                      </div>
                    </div>
                  ))}
                </ListGroup>
              </Col>

              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;
