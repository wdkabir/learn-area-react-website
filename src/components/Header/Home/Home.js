import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, } from '@fortawesome/free-solid-svg-icons';
import banner from '../../../images/banner-img4.png';
import { Button, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Home = (props) => {
    const {courses} = props;
    const userIcon = <FontAwesomeIcon icon={faUser} />
    return (
        <>
        <section className="header-section">
            <div className="container mt-5 home">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="header-details mt-5">
                            <h6>Are you ready to Learn?</h6>
                            <h1>The World's Leading Distance-Learning Provider </h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nobis sequi aliquam consectetur officia iusto vitae nesciunt quaerat pariatur consequatur.</p>
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
        <section>
            <div className="container text-center">
                <h1>Ours Populer Courses</h1>
            </div>
            <div className="container my-5">
            <Row xs={1} md={4} className="g-4">
                        {
                            courses.slice(0,4).map(course => <Course id={course.id} course={course}>
                            </Course> )
                        }
                </Row>
            </div>
        </section>
</>
    );
};

export default Home;