import React, { useState } from 'react';

function Form() {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');
    const [tarefasConcluidas, setTarefasConcluidas] = useState([]);

    const handleInputChange = (event) => {
        setNovaTarefa(event.target.value);
    };

    const handleAddTask = () => {
        if (novaTarefa.trim() === '') {
            return;
        }
        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa('');
    };

    const handleRemoveTask = (index) => {
        const updatedTasks = tarefas.filter((_, i) => i !== index);
        setTarefas(updatedTasks);
        setTarefasConcluidas(tarefasConcluidas.filter(i => i !== index)); // Remove tarefa concluída se existir
    };

    const handleCompleteTask = (index) => {
        setTarefasConcluidas((prev) => 
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <input 
                type="text"
                value={novaTarefa} 
                onChange={handleInputChange}
                placeholder='Digite uma nova tarefa'   
            />
            <button onClick={handleAddTask}>Adicionar Tarefa</button>

            <ul>
                {tarefas.map((tarefa, index) => (
                    <li 
                        key={index} 
                        style={{ textDecoration: tarefasConcluidas.includes(index) ? 'line-through' : 'none' }}
                    >
                        {tarefa}
                        <button onClick={() => handleRemoveTask(index)}>Remover</button>
                        <button 
                            onClick={() => handleCompleteTask(index)} 
                            style={{ backgroundColor: tarefasConcluidas.includes(index) ? 'green' : 'grey' }}
                        >
                            Concluído
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Form;
