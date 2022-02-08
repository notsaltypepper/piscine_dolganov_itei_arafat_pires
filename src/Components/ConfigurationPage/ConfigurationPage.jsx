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
    
    return(
        <div className='MenuConfig'>
            <h2 className='MenuNom'>Menu de Configuration</h2>
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

