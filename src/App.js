import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


function App() {
  return (
    <div className="App">
      <div style={{padding:'0'}}>
      <Container style={{ backgroundColor: '#7ed126', height: '200px',width:'100%'}}>
      
       <Login />
      </Container>
      
      </div>
     
    </div>
  );
}

export default App;

