import React from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';

export default Header => {
    return (
        <header className='header-default'>
        <div id="demo_loc"></div>
        <Container>
            <Row className="show-grid">
                <Col xs={12} md={4}>
                    <a href="#" className="navbar-brand">
                        <img src="https://i.imgur.com/3aULwmb.png" alt="Espindola imobiliária" />
                    </a>
                </Col>
                <Col xs={12} md={8}>
                    <div className="header-details">
                        <Col md={4}>
                            <div className="header-item header-phone left">
                                <table>
                                    <tbody><tr>
                                        <td><i className="fa fa-phone"></i></td>
                                        <td className="header-item-text">
                                            <a href="tel:(85) 3461-1166">
                                                Ligue<br />
                                                <span>
                                                    (85) 3461-1166
                                                </span></a>

                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="header-item header-phone left">
                                <table>
                                    <tbody><tr>
                                        <td><i className="fa fa-whatsapp"></i></td>
                                        <td className="header-item-text">
                                            <a href="https://api.whatsapp.com/send?phone=5585988101166&text=Ol%C3%A1,%20eu%20estou%20com%20uma%20d%C3%BAvida,%20poderia%20me%20ajudar?">
                                                Whatsapp<br />
                                                <span>
                                                    (85) 98810-1166
                                                </span></a>

                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="header-item header-phone left">
                                <table>
                                    <tbody><tr>
                                        <td><i className="fa fa-envelope"></i></td>
                                        <td className="header-item-text">
                                            <span>E-mail</span><br />
                                            <a href="mailto: meajuda@espindolaimobiliaria.com.br">meajuda@espindolaimobiliaria.com.br</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </div>

                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </Col>
            </Row>

            <div className="navbar-collapse collapse top-25">
                <div className="main-menu-wrap">
                    <div className="container-fixed">
                        <div className="member-actions right">
                            <Button>Aqui</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </header>
    )
}