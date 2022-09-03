import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { Button, Container } from 'react-bootstrap';


export default function Site(props) {
    return (
        <>
            <Head title="Espíndola Imobiliaria" />
            <header className='header-default'>
                <div id="demo_loc"></div>
                <Container>
                    <div className="navbar-header">
                        <div className="header-details">
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
                                    </tbody></table>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <a href="#" className="navbar-brand">
                        <img src="https://i.imgur.com/3aULwmb.png" alt="Espindola imobiliária" />
                    </a>
                </Container>
            </header>
        </>
    );
}
