import React, { Component } from 'react';
import { Container, Form, Col, Row, Button } from 'react-bootstrap';
import ListaMensagens from './ListaMensagens.jsx';

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            novaMensagem: '',
            mensagens: []
        }
    }

    addMensagem = () => {
        this.setState({mensagens: [...this.state.mensagens, this.state.novaMensagem]})
    }

    onChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    }

    render() {
        return (
            <div>
                <Container style={{marginTop: 25}}>
                    <Form>
                        <Form.Group controlId="mensagem">
                            <Row>
                                <Col md={10}>
                                    <Form.Control type="textarea" rows="3" name="novaMensagem" onChange={this.onChange} />
                                </Col>
                                <Col md={2}>
                                    <Button onClick={this.addMensagem}>Postar</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>

                    <ListaMensagens mensagens={this.state.mensagens} />
                </Container>
            </div>

        );
    }
}

export default Home;
