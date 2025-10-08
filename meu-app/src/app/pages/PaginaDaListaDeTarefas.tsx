"use client"

import { useState } from 'react'
import Input from '@/app/components/Input'
import ListaDeTarefas from '@/app/components/ListaDeTarefas'

export default function PaginaDaListaDeTarefas() {
    const [tarefa, setTarefa] = useState<string>('')
    const [tarefas, setTarefas] = useState<string[]>([])

    const adicionarTarefa = () => {
        if (tarefa.trim()) {
            setTarefas([...tarefas, tarefa])
            setTarefa('')
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-4 border rounded">
            <h1 className="text-xl font-bold mb-4">
                Lista de Tarefas
            </h1>
            <Input
                value={tarefa}
                onChange={setTarefa}
                placeholder="Informe a tarefa"
            />
            <button
                className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={adicionarTarefa}
            >
                Adicionar
            </button>
            <ListaDeTarefas tarefas={tarefas} />
        </div>
    )
}
