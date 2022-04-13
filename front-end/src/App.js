import 'bootstrap/dist/css/bootstrap.min.css';
import BirdList from './BirdList.js';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <h1>Beautiful Birds</h1>

      <BirdList/>
    </Container>
  );
}

export default App;
