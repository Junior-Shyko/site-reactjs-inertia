import React, { useEffect, useState } from "react"
import { Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Table } from 'react-bootstrap'


export default Header => {
    const [contact, setContact] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5050/api/contact')
            .then((response) => response.json())
            .then((actualData) => {
                setContact(actualData)
            })
            .catch(err => {
                console.log({ err });
            })

    }, [])

    return (
        <header className="header-default">
            <div id="demo_loc"></div>
            <Grid>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <div className="header-details">
                            <Col xs={12} md={12}>
                                <Col md={8} style={{ float: 'right' }}>
                                    <Col md={4}>
                                        <div className="header-item header-phone left">
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <td><i className="fa fa-phone"></i></td>
                                                        <td className="header-item-text">
                                                            <a href="tel:(85) 3461-1166">
                                                                Ligue<br />
                                                                <span>{contact.phoneFixed}</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </thead>
                                            </Table>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="header-item header-phone left">
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <td><i className="fa fa-whatsapp"></i></td>
                                                        <td className="header-item-text">
                                                            <a href="https://api.whatsapp.com/send?phone=5585988101166&text=Ol%C3%A1,%20eu%20estou%20com%20uma%20d%C3%BAvida,%20poderia%20me%20ajudar?">
                                                                WhatsApp<br />
                                                                <span>{contact.phoneMobile}</span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </thead>
                                            </Table>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className="header-item header-phone left">
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <td><i className="fa fa-envelope"></i></td>
                                                        <td className="header-item-text">
                                                            E-mail<br />
                                                            <span>
                                                                <a href="mailto: `{contact.email}`">
                                                                    {contact.email}
                                                                </a>

                                                            </span>
                                                        </td>
                                                    </tr>
                                                </thead>
                                            </Table>
                                        </div>
                                    </Col>
                                </Col>
                                <Col md={4} style={{ float: 'left' }}>
                                    <Navbar.Brand>
                                        <a href="#" className="navbar-brand">
                                            <img src="https://i.imgur.com/3aULwmb.png" alt="Espindola imobiliária" />
                                        </a>
                                    </Navbar.Brand>
                                </Col>
                            </Col>
                        </div>

                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse className="main-menu-wrap">
                        <div className="container-fixed">
                           
                        
                        <Nav>
                            <NavItem eventKey={1} href="#">
                                Home
                            </NavItem>
                            
                            <NavDropdown eventKey={3} title="A Espíndola" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={2} href="#">
                                Serviços
                            </NavItem>
                            <NavItem eventKey={4} href="#">
                                Área do Cliente
                            </NavItem>
                            <NavItem eventKey={5} href="#">
                                Perguntas Frequentes
                            </NavItem>
                            <NavItem eventKey={5} href="#">
                                Contato
                            </NavItem>
                        </Nav>
                        </div>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                            <div className="member-actions">
                            <a  href="https://api.whatsapp.com/send?phone=5585988101166&amp;text=Gostaria de anunciar o meu imóvel" target="_blank" data-action="share/whatsapp/share" 
                                className="button small alt button-icon">
                                    <i className="fa fa-plus"></i>
                                    Anuncie seu imóvel
                            </a>
                            </div>
                            </NavItem>
                           
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Grid>
        </header>
    )
}