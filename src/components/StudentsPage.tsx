import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import CardHeader from "react-bootstrap/CardHeader";

const StudentsPage = () => {
    return (
        // <div>
        <Container>
            <Row>
                <Col>
                    <Image className={'h-25 '}
                           src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                           roundedCircle/>
                </Col>
                <Col className={'d-flex flex-column'}>
                    <label>John Doe</label>
                    <a href={"linkedin.com"}>linkedin</a>
                </Col>
                <Col>
                    Student's Interest/ academic qualification
                </Col>
            </Row>
            <Row>
                <Card>
                    <CardHeader>
                        About Me<br/>
                    </CardHeader>
                    Lorem Ipsum sabke views
                </Card>
            </Row>
        </Container>
        // </div>
    );
};

export default StudentsPage;