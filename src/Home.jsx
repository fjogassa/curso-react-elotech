import React, { Component } from 'react';
import { Container, Form, Col, Row, Button } from 'react-bootstrap';

class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          mensagens: []
        }
      }

    render() {
        return (
            <div>
                <Container>
                    <h1>Home</h1>
                    <Form>
                        <Form.Group controlId="mensagem">
                            <Row>
                                <Col md={10}>
                                    <Form.Control type="text" />
                                </Col>
                                <Col md={2}>
                                    <Button variant="primary">Postar</Button>
                                </Col>

                            </Row>
                        </Form.Group>
                    </Form>

                    <ListaMensagens mensagens={this.state.mensagens}/>
                </Container>
            </div>

        );
    }
}

export default Home;
