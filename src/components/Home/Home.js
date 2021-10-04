import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLaptopCode, faBook, faUsers, faHeadset } from '@fortawesome/free-solid-svg-icons';
import banner from '../../../src/images/banner-img4.png';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Home = (props) => {
    //Destructuring Part
    const {courses} = props;
    //Fontawesome Icon
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const courseIcon = <FontAwesomeIcon icon={faLaptopCode} />
    const bookIcon = <FontAwesomeIcon icon={faBook} />
    const usersIcon = <FontAwesomeIcon icon={faUsers} />
    const supportIcon = <FontAwesomeIcon icon={faHeadset} />
    return (
        <>
        {/* Header Area */}
        <section className="header-section">
            <div className="container mt-5 home">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="header-details mt-5">
                            <h3>Are you ready to Learn?</h3>
                            <h1>The World's Leading Distance-Learning Provider </h1>
                            <p>Education is the basic necessity of life. It is an integral tool that aids the overall growth and development. Education has a plethora of meanings and educates and empowers you within the four walls of the classroom as well as imbibe in your environment. Learning is an education that makes sense, and it needs awareness to reach the remote corners of the country.</p>
                            <Button variant="primary" className="get-btn">{userIcon} Join For Free</Button>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col mt-2 w-50 ms-auto">
                        <div className="header-banner">
                            <img src={banner} className="img-fluid" alt="{banner}" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
{/* Card Section */}
        <section className="bg-light">
            <div className="py-5 text-center">
            <Container>
                <Row xs={1} md={4} className="g-4">
                <Col>
                <Card className="py-5 bg-primary text-white">
                <Card.Body>
                <Card.Title><span className="courseIcon">{courseIcon}</span>
                </Card.Title>
                <div className="fs-2">
                    <p>10,000 Courses</p>
                </div>
                </Card.Body>
            </Card>
            </Col>
            <Col>
                <Card className="py-5 bg-warning text-white">
                <Card.Body>
                <Card.Title><span className="courseIcon">{bookIcon}</span>
                </Card.Title>
                <div className="fs-2">
                <p>1500+ PDF Books</p>
                </div>
                </Card.Body>
            </Card>
            </Col>
            <Col>
                <Card className="py-5 bg-info text-white">
                <Card.Body>
                <Card.Title><span className="courseIcon">{supportIcon}</span>
                </Card.Title>
                <div className="fs-2">
                <p>24/7 Support</p>
                </div>
                </Card.Body>
            </Card>
            </Col>
            <Col>
                <Card className="py-5 bg-success text-white">
                <Card.Body>
                <Card.Title><span className="courseIcon">{usersIcon}</span>
                </Card.Title>
                <div className="fs-2">
                    <p>20000+ Studens</p>
                </div>
                </Card.Body>
            </Card>
            </Col>
                </Row>
            </Container>
            </div>
        </section>
        {/* Services Part 4 data showing */}
        <section>
            <div className="container text-center py-5">
                <h1>Ours Popular Courses</h1>
            </div>
            <div className="container mb-5">
            <Row xs={1} md={4} className="g-4">
                        {
                            courses.slice(0,4).map(course => <Course key={course.id} course={course}>
                            </Course> )
                        }
                </Row>
            </div>
        </section>
</>
    );
};

export default Home;