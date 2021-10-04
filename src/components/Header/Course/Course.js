import React from 'react';
import { Button, Card, } from 'react-bootstrap';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faClock, faUsers } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    const {img, name, price, duration,  enrolled, description } = props.course;
    const userSignIn = <FontAwesomeIcon icon={faSignInAlt} />
    const durationIcon = <FontAwesomeIcon icon={faClock} />
    const enrolledUsersIcon = <FontAwesomeIcon icon={faUsers} />
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text className="d-flex flex-column flex-md-row justify-content-between"> <span>{durationIcon} Duration:  {duration}</span> 
                <span>{enrolledUsersIcon} Enrolled: {enrolled}</span>
                </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex flex-column flex-md-row card-footer justify-content-between">
                    <h5 className="text-muted">Price: ${price}</h5>
                    <Button variant="outline-success">{userSignIn} Enroll Now</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Course;