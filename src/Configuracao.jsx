import React, { Component } from 'react';
import { Container, Form, Col, Row, Button } from 'react-bootstrap';


class Configuracao extends Component {

    constructor(props) {
        super(props)

        this.state = {
            novaMensagem: '',
            mensagens: []
        }
    }

    render() {
        return (
            <div>
                <Container style={{marginTop: 25, width:800}}>
                    <Form>
                        <Form.Group controlId="mensagem">
                            
                        </Form.Group>
                    </Form>
                </Container>
            </div>

        );
    }

}

export default Configuracao;