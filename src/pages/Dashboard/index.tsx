import { FormEvent, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import api from '../../services/api';

import logoImg from '../../assets/github-logo.svg';

interface Repository {
	full_name: string;
	owner: {
		login: string;
		avatar_url: string;
	};
	description: string;
}

export default function Dashboard() {
	const [newRepo, setNewRepo] = useState('');
	const [repositories, setRepositories] = useState<Repository[]>([]);

	async function handleAddRepository(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const response = await api.get<Repository>(`repos/${newRepo}`);
		const repository = response.data;
		setRepositories([...repositories, repository]);
		setNewRepo('');
	}

	return (
		<>
			<img src={logoImg} alt="Github Explorer" />
			<Title>Explore Repositórios no Github</Title>
			<Form onSubmit={handleAddRepository}>
				<input
					value={newRepo}
					onChange={e => setNewRepo(e.target.value)}
					placeholder="Digite o nome do repositório"
				/>
				<button type="submit">Pesquisar</button>
			</Form>

			<Repositories>
				{repositories.map(repository => (
					<a key={repository.full_name} href="teste">
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>
						<div>
							<strong>{repository.full_name}</strong>
							<p>{repository.description}</p>
						</div>
						<FiChevronRight size={20} />
					</a>
				))}
			</Repositories>
		</>
	);
}
