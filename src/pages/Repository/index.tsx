import { useMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/github-logo.svg';
import { Header, Issues, RepositoryInfo } from './styles';

export default function Repository() {
	const r = useMatch('/repository/:repository*');
	console.log({ r });
	return (
		<>
			<Header>
				<img src={logoImg} alt="Github Explorer" />
				<Link to="/">
					<FiChevronLeft size={16} />
					Voltar
				</Link>
			</Header>
			<RepositoryInfo>
				<header>
					<img src="amoidjmfiasd" alt="Github User" />
					<div>
						<strong>Rocket</strong>
						<p>Descricao</p>
					</div>
				</header>
				<ul>
					<li>
						<strong>1808</strong>
						<span>Stars</span>
					</li>
					<li>
						<strong>48</strong>
						<span>forks</span>
					</li>
					<li>
						<strong>67</strong>
						<span>Issues abertas</span>
					</li>
				</ul>
			</RepositoryInfo>

			<Issues>
				<Link to="/repository/{repository.full_name}">
					<div>
						<strong>repository.full_name</strong>
						<p>repository.description</p>
					</div>
					<FiChevronRight size={20} />
				</Link>
			</Issues>
		</>
	);
}
