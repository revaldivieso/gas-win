import React from 'react';
import { Card } from 'react-bootstrap';
import fondo from '../Images/fondo2.png'
import './Home.css';

const Home = () => {
    return <Card className="bg-dark text-white">
        <Card.Img className="fondo" src={fondo} alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>Gas Win</Card.Title>
            <Card.Text>
                ¡La solución a tus problemas!
    </Card.Text>
        </Card.ImgOverlay>
    </Card>

}

export default Home;