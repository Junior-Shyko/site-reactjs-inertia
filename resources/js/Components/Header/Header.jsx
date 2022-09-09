import React, { useEffect } from "react"
import {Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'


export default Header => {

    useEffect(() => {
        fetch('http://localhost:50000/api/contact')
            .then(response => {
                console.log({ response })
            })
            .catch(err => {
                console.log({ err });
            })
    }, [])



    return (
        <header className='header-default' style={{background: 'white'}}>
            <div id="demo_loc"></div>
            <style type="text/css">
            {`
            .nav-custom {
                background-color: transparent !important;
                border-color: transparent !important;
            }
            `}
            </style>
            <Grid>
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
                </Col>
                </Row>
                <Row>
                    <Navbar collapseOnSelect className="nav-custom">
                    <Navbar.Header >
                        <Navbar.Brand >
          
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse className="main-menu-wrap">
                        <Nav>
                        <NavItem eventKey={1} href="#">
                            Link
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link
                        </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Link Right
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link Right
                        </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>

                </Row>
            </Grid>
        </header>
    )
}