import React, {useState} from 'react';
import Formulario from '../components/formularios';
import Lista from '../components/Lista/index';
import style from'./App.module.scss';
import Cronometro from '../components/Cronomentro';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefa, setTarefa] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionando] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionando(tarefaSelecionada);
    setTarefa(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefa={setTarefa}/>
      <Lista
        tarefa={tarefa}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro />
    </div>
  );
}

export default App;
