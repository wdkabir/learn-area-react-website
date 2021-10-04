import {Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Services.css';

const Services = (props) => {
    //Destructuring Part
    const {courses} = props;
    return (
        <div className="py-5">
            <Container>
                <Row xs={1} md={4} className="g-4">
                        {
                            courses.map(course => <Course id={course.id} course={course}>
                            </Course> )
                        }
                </Row>
            </Container>
        </div>
        
    
    );
};

export default Services;