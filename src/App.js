import logo from './logo.svg';
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{display:'flex', justifyContent:'space-between', alignItems: 'center'}}>
      <Button type="primary" size="small">Button</Button>
      <Button type="secondary" size="medium">Button</Button>
      <Button type="text" size="large">Button</Button>
      <Button type="elevated" size="large" disabled>Button</Button>
      </header>
    </div>
  );
}

export default App;
