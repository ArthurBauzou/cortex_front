import './App.css';
// import './components/skill'

function Skill() {
  return (
      <div className="skill">
          <h2>COMPETENCE</h2>
          <p>haha c’est la compétence lol</p>
      </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Skill />
      </header>
    </div>
  );
}

export default App;
