import React from 'react';
import 'bulma/css/bulma.min.css';
import Card from './Card';

function App() {
  return (
    <div className="container mt-6">
      <div className="columns">
        <div className="column">
          <Card>
            <span>Historias Fantásticas 1</span>
            <p className="is-size-5">Cuenta la historia fantástica número 1</p>
            <p><strong className="has-text-black">Asignado a:</strong> Belu</p>
            <p><strong className="has-text-black">Fecha de inicio:</strong> 01-09-2024</p>
            <p><strong className="has-text-danger">Fecha de fin:</strong> 15-10-2024</p>
          </Card>
        </div>

        <div className="column">
          <Card>
            <span>Historias Fantásticas 2</span>
            <p className="is-size-5">Cuenta la historia fantástica número 2</p>
            <p><strong className="has-text-black">Asignado a:</strong> Enzo</p>
            <p><strong className="has-text-black">Fecha de inicio:</strong> 05-09-2024</p>
            <p><strong className="has-text-danger">Fecha de fin:</strong> 20-10-2024</p>
          </Card>
        </div>

        <div className="column">
          <Card>
            <span>Historias Fantásticas 3</span>
            <p className="is-size-5">Cuenta la historia fantástica número 3</p>
            <p><strong className="has-text-black">Asignado a:</strong> Mateo</p>
            <p><strong className="has-text-black">Fecha de inicio:</strong> 10-09-2024</p>
            <p><strong className="has-text-danger">Fecha de fin:</strong> 25-10-2024</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
