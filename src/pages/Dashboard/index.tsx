import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/github-logo.svg';

export default function Dashboard() {
	return (
		<>
			<img src={logoImg} alt="Github Explorer" />
			<Title>Explore Repositórios no Github</Title>
			<Form>
				<input placeholder="Digite o nome do repositório" />
				<button type="submit">Pesquisar</button>
			</Form>

			<Repositories>
				<a href="teste">
					<img
						src="https://avatars.githubusercontent.com/u/50279825?v=4"
						alt="Sajermann"
					/>
					<div>
						<strong>Bruno Sajermann</strong>
						<p>Descrição do Repo</p>
					</div>

					<FiChevronRight size={20} />
				</a>
				<a href="teste">
					<img
						src="https://avatars.githubusercontent.com/u/50279825?v=4"
						alt="Sajermann"
					/>
					<div>
						<strong>Bruno Sajermann</strong>
						<p>Descrição do Repo</p>
					</div>

					<FiChevronRight size={20} />
				</a>
				<a href="teste">
					<img
						src="https://avatars.githubusercontent.com/u/50279825?v=4"
						alt="Sajermann"
					/>
					<div>
						<strong>Bruno Sajermann</strong>
						<p>Descrição do Repo</p>
					</div>

					<FiChevronRight size={20} />
				</a>
			</Repositories>
		</>
	);
}
