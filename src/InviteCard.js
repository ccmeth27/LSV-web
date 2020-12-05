import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import lsvLogo from './LSV-logo-gold-vector.png';
import './InviteCard.css';

export default function InviteCard () {
    
    return (
        
        <Card 
            className="Discord-invite"
            style={{ width: '18rem' }}
            >
            <Card.Img variant="top" src={lsvLogo} className="LSV-logo"/>
            <Card.Body>
                <Card.Title className="Invite-title">LSV Stock Trading</Card.Title>
                <Card.Text className="Invite-text">
                    Join the Discord!
                </Card.Text>
            <Button className="Discord-button">Join</Button>
            </Card.Body>
        </Card>
          );
    
}