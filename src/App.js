import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Header from './Header';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        </Container>
      </Navbar>

      <Header />
    </>
  );
}

export default App;
