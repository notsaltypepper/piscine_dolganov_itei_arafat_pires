import { Cards} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NotesProvider } from './../../Provider/notesProvider';

//PAGE QUI AFFICHE LA LISTE DES CARNETS

export default function CarnetNote(){
    return(
        <div className='carnetnote'>

        <header>
            <h1>Mes Carnets de Note</h1>
        </header>
        </div>
    )
}