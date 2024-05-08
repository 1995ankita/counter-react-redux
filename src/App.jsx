import './App.css'
import Container from './components/Container';
import Controls from './components/Controls';
import DisplayCounter from './components/DisplayCounter';
import Header from './components/Header';

function App() {
  return (
   
      <center className="px-4 py-5 my-5 text-center">
        <Container>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
         <DisplayCounter></DisplayCounter>
         <Controls></Controls>
        </div>
        </Container>
      </center>
  )
}
export default App;
