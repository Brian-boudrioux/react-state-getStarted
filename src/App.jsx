import './App.css'
import Title from "./components/Title/Title";
import Avatar from "./components/Avatar/Avatar.jsx";
import {sum} from "./components/Title/Title";
import { useState } from 'react';

function App() {

  const [showSimpson, setShowSimpson] = useState(false);
  let section = null;
  let symbol = "+";

  if (showSimpson) {

    section = (<section className='containerAvatar'>
      <Avatar
        image="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
        firstName="Bart"
        lastName="Simpson"
      />
      <Avatar
        image="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
        firstName="Homer"
        lastName="Simpson"
      />
    </section>);

    symbol = "-";
  }

  function toggleSimpson() {
    if (showSimpson) {
      setShowSimpson(false);
    }
    else {
      setShowSimpson(true);
    }
  }

  return (
    <>
    <header></header>
    <main>
      <section>
        <Title title="yolooo" subtitle="un super site" />
      </section>
      <section>
        <Title title="section 2" subtitle="trop cool" />
      </section>
      <button onClick={toggleSimpson}>{symbol}</button>
      {section}
    </main>
    </>
  )
}

export default App
