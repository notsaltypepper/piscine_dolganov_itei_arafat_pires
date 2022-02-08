import React from 'react';
import { Link } from 'react-router-dom'
import { Table, Button} from 'react-bootstrap';

import {useState} from 'react';
import './Config.css'

import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

export default function ConfigurationPage() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Cards', value: '1' },
        { name: 'List', value: '2' }
    ];

    const Categories = [
        { name: 'Cuisine', value: '1' },
        { name: 'Education', value: '2' },
        { name: 'Sport', value: '3' }
    ];

    return(
        <div className='MenuConfig'>
            <h2 className='MenuNom'>Menu de Configuration</h2>
            <h3 className='MenuNom'>Non fonctionelle pour le moment </h3>
            <h3>Crée une Catégorie 
            <Button variant="success" className='Categoriebtn'>Crée</Button>
            <Button variant="warning" className='Categoriebtn'>Modifier</Button>
            <Button variant="danger" className='Categoriebtn'>Suprimer</Button></h3>
            <hr></hr>
            <h3>Mode Card/list </h3>
            <ButtonGroup>
                {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                    {radio.name}
                </ToggleButton>
                ))}
            </ButtonGroup>
            <hr></hr>
        </div>
    )
    }

// 1/Bouton card ligne 29 à 44 permetant de choisir entre une card ou bien une liste 
// étapes : 
// Saugarder l'êtat du bouton selectionner 
// Récupérer l'êtat du bouton 
// Sauvgarder dans un state 
//Permetant de l'utiliser dans la page configuration 

// 2/ Crée un variable gobal qui sera utiliser par la page NodeAddPage