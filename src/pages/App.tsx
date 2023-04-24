import React, {useState} from 'react';
import Formulario from '../components/formularios';
import Lista from '../components/Lista/index';
import style from'./App.module.scss';
import Cronometro from '../components/Cronomentro';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefa, setTarefa] = useState<ITarefa[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefa={setTarefa}/>
      <Lista tarefa={tarefa} />
      <Cronometro/>
    </div>
  );
}

export default App;
