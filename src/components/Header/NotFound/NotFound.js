import React from 'react';
import './NotFound.css';
import notFound from '../../../images/notfound1.jpg';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <Container>
            <img
        src={notFound}
        width="100%"
        className="d-inline-block align-top"
        alt="learn-area-logo"
      />
            </Container>
        </div>
    );
};

export default NotFound;