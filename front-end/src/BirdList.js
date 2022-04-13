import { Button, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

import Bird from './Bird.js';

function BirdList() {

    const [birds, setBirds] = useState([]);

    const handleClick = () => setBirds([...birds, <Bird/>, <Bird/>, <Bird/>, ...birds]);

    useEffect(() => {
        setBirds([<Bird/>])
    }, []);

    return (
        <div>
            <Row>
                {birds}
            </Row>
            <Button onClick={handleClick.bind(this)}>
                <p>Add Bird</p>
            </Button>
        </div>
    );

}

export default BirdList;
