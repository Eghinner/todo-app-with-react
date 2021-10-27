import React, {useState} from 'react'
import Listado from './components/Listado.js'

import shortid from 'shortid'

function App() {

  // definir states
  const [state, setState] = useState('');
  const [tasks, setTask] = useState([]);

  function Sumbit(e) {
    e.preventDefault();

    // validar
    if (state.trim()==='') {
      return;
    }

    const objtask = {
      state,
      id: shortid.generate()
    }

    setTask([
      ...tasks,
      objtask
    ]);
    setState('');
  }

  return (
    <React.Fragment>
        <h1>TODO</h1>
        <form
          className=""
          onSubmit={Sumbit}
        >
          <input
            className="form-control"
            type="text"
            onChange={e=>setState(e.target.value)}
            value={state}
          />
        </form>
        <ul className="list-group mt-3">
          <Listado
            tasks={tasks}
          />
        </ul>
      </React.Fragment>

      );
}

export default App;
