import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Header from '../Components/Header/Header' 


export default function Site(props) {
    return (
        <>
            <Head title="Espíndola Imobiliaria" />
            <Header />
        </>
    );
}
