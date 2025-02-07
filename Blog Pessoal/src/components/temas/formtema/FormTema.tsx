import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";

import { AuthContext } from "../../../context/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import Exercicio from "../../../models/Exercicio";




function FormTreinos() {




    const navigate = useNavigate();


    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [treinos, setTreinos] = useState<Treino[]>([])


    const [treino, setTreino] = useState<Treino>({ id: 0, treino:'', descricao: '', })
    const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio)


    const { id } = useParams<{ id: string }>()


    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token


    async function buscarExercicioPorId(id: string) {
        try {
            await buscar(`/exercicio/${id}`, setExercicio, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }


    async function buscarTreinoPorId(id: string) {
        try {
            await buscar(`/treino/${id}`, setTreino, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }


    async function buscarTreinos() {
        try {
            await buscar('/treino', setTreinos, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }


    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token])


    useEffect(() => {
        buscarTreinos()


        if (id !== undefined) {
            buscarExercicioPorId(id)
        }
    }, [id])


    useEffect(() => {
        setExercicio({
            ...exercicio,
            treino: treino,
        })
    }, [treino])


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setExercicio({
            ...exercicio,
            [e.target.name]: e.target.value,
            treino: treino,
           
        });
    }


    function retornar() {
        navigate('/exercicios');
    }


    async function gerarNovoTreino(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)


        if (id !== undefined) {
            try {
                await atualizar(`/treino`, treino, setTreino, {
                    headers: {
                        Authorization: token,
                    },
                });


               alert('Treino atualizado com sucesso')


            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                } else {
                    alert('Erro ao atualizar a Treino')
                }
            }


        } else {
            try {
                await cadastrar(`/Treino`, treino, setTreino, {
                    headers: {
                        Authorization: token,
                    },
                })


                alert('Treino cadastrada com sucesso');


            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                } else {
                    alert('Erro ao cadastrar a Treino');
                }
            }
        }


        setIsLoading(false)
        retornar()
    }


    const carregandoTreino = treino.descricao === '';






    return (
        <div className="container flex flex-col items-center justify-center mx-auto bg-red-100 m-3 p-10 rounded-lg">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Treino' : 'Editar Treino'}
            </h1>


            <form className="w-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="treino">Treino</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui seu treino"
                        name='treino'
                        className="border-2 border-slate-700 rounded p-2"
                        value={treino.treino}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="descricao">Descrição do Treino</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui seu treino"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={treino.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>


                    }
                </button>
            </form>
        </div>
    );
}