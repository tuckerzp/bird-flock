import React, { useState, useEffect } from 'react';

import { Card } from 'react-bootstrap';

function Bird() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
  }, [])

  if (!data.name) {
      return <p>Error</p>;
  }

  return (
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={data.image} className="rounded mx-auto d-block" alt="a bird"/>
            <Card.Body>
                <Card.Title>
                    {data.name}
                </Card.Title>
            </Card.Body>
          
      </Card>
  )
}

export default Bird;
