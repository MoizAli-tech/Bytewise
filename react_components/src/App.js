import logo from './logo.svg';
import './App.css';
import { Nav } from "./nav.js"

function App() {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-4xl text-red-500">This is my app</h1>
        <br/>
        <p className='block'>
          This project is to understand how to export and impoort custom react components
          like the above navbar
        </p>

      </div>
    </>
  );
}

export default App;
