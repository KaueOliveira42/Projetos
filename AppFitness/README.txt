 

Escopo do Projeto Integrador (Gen Fitness) - Desafio 2
Grupo:
○	Tiago Alves (PO)
○	Fatima Machado (Tester)
○	Daffne Vieira Rodrigues (Developer)
○	Robert Matheus (Developer)
○	Kaue Oliveira (Developer)
○	João Vitor Bispo (Developer)
○	Thalita Alves Simão (Developer)

Data:
09/12/2024
-------------------------
Título do Projeto e Modelo de Negócio Escolhido
GenFitness
Sistema de gerenciamento de exercícios físicos
Descrição Geral
O GenFitness é um sistema de gerenciamento de dados relacionados à atividades físicas, ele foi desenvolvido para facilitar o gerenciamento de exercícios dos usuários, criando uma ficha de treinos personalizados para cada usuário a partir do seu Índice de Massa Corporal (IMC).
Objetivo Principal - Facilitar o gerenciamento de informações de usuários e exercícios, garantindo a organização dos dados de maneira prática e acessível.
Público-Alvo - Empresas que proporcionam atividades de condicionamento físico e que necessitam de um sistema simples e eficaz para armazenar informações sobre seus clientes e gerar uma ficha de treino de forma prática
Problema Resolvido - Muitas empresas que proporcionam atividades de condicionamento físico enfrentam dificuldades na hora de gerar uma ficha de treino para seus clientes, onde na maioria das vezes é realizado de forma manual. O GenFitness resolve esses problemas ao:
●	Centralizar os dados em um único sistema.
●	Proporcionar funcionalidades de CRUD completas para a gestão de usuários e exercícios.
●	Garantir a integridade e consistência dos dados por meio de uma relação clara entre as tabelas.
●	Gerar a partir do IMC do usuário uma ficha de treino personalizada para que ele possa dar início nos exercícios
Essa solução permite que as empresas que proporcionam atividades de condicionamento físico mantenham seu foco no auxílio das atividades físicas, sem perder horas apenas para criar as fichas dos clientes.

Entidade e Atributos da Entidade

 
●	ENTIDADE: USUARIO
○	id: Long
○	nome: String
○	cpf: String
○	usuario:String
○	senha: String
○	peso: Double
○	altura: Double 
○	tipo: String
○	imc: Double



●	ENTIDADE: TREINO
○	id: long
○	treino: String
○	Descricao: String
●	ENTIDADE: EXERCICIO
○	id: long
○	nome: String
○	repeticoes: Integer
○	grupoMuscular: String
○	series: Integer 



Funcionalidades Principais (CRUD)

●	Treino:
○	Buscar todos treinos
○	Cadastrar treino
○	Atualizar treino
○	Deletar treino
○	Método de busca específico - busca treino por descrição

●	Exercicio:
○	Buscar todos exercicios
○	Busca exercicio por ID
○	Cadastrar exercicio
○	Atualizar dados dos exercícios
○	Deletar exercicio
○	Método de busca específico - buscar exercicio por nome

●	Usuario:
○	Buscar todos usuarios
○	Buscar usuarios por ID
○	Cadastrar usuario
○	Atualizar dados dos usuários
○	Deletar usuario
○	Método de busca específico - buscar usuario por nome


Tecnologias Utilizadas (Banco de Dados e Backend)
O sistema foi desenvolvido em Java, utilizando o framework Spring Boot para o backend, e o banco de dados MySQL para armazenar informações de maneira segura e confiável. Ele é ideal para empresas que proporcionam atividades de condicionamento físico e que necessitam de um sistema funcional para o gerenciamento de exercícios e clientes, promovendo uma administração mais eficiente e centralizada.
