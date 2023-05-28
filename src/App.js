import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col>Hello World!</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
