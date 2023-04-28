import React, {useState} from 'react';
import Formulario from '../components/formularios';
import Lista from '../components/Lista/index';
import style from'./App.module.scss';
import Cronometro from '../components/Cronomentro';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefa, setTarefa] = useState< ITarefa[] | []>([]);
  const [selecionado, setSelecionando] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionando(tarefaSelecionada);
    setTarefa(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }
  function finalizarTarefa() {
    if (selecionado) {
      setSelecionando(undefined);
      setTarefa(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado:true
          }
        }
        return tarefa;
      }))
    }
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefa}/>
      <Lista
        tarefa={tarefa}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
