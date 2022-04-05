import { useMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import logoImg from '../../assets/github-logo.svg';
import { Header, Issues, RepositoryInfo } from './styles';
import api from '../../services/api';

interface Repository {
	full_name: string;
	description: string;
	stargazers_count: number;
	forks_count: number;
	open_issues_count: number;
	owner: {
		login: string;
		avatar_url: string;
	};
}

interface Issue {
	title: string;
	id: number;
	html_url: string;
	user: {
		login: string;
	};
}

export default function Repository() {
	const params = useMatch('repository/:repository*');
	const [repository, setRepository] = useState<Repository | null>(null);
	const [issues, setIssues] = useState<Issue[]>([]);

	useEffect(() => {
		async function load() {
			const [repositoryResult, issuesResult] = await Promise.all([
				api.get(`repos/${params?.pathname.replace('/repository/', '')}`),
				api.get(`repos/${params?.pathname.replace('/repository/', '')}/issues`),
			]);
			setRepository(repositoryResult.data);
			setIssues(issuesResult.data);
		}

		load();
	}, [params]);

	return (
		<>
			<Header>
				<img src={logoImg} alt="Github Explorer" />
				<Link to="/">
					<FiChevronLeft size={16} />
					Voltar
				</Link>
			</Header>
			{repository && (
				<RepositoryInfo>
					<header>
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>
						<div>
							<strong>{repository.full_name}</strong>
							<p>{repository.description}</p>
						</div>
					</header>
					<ul>
						<li>
							<strong>{repository.stargazers_count}</strong>
							<span>Stars</span>
						</li>
						<li>
							<strong>{repository.forks_count}</strong>
							<span>forks</span>
						</li>
						<li>
							<strong>{repository.open_issues_count}</strong>
							<span>Issues abertas</span>
						</li>
					</ul>
				</RepositoryInfo>
			)}
			<Issues>
				{issues.map(issue => (
					<a
						key={issue.id}
						href={issue.html_url}
						target="_blank"
						rel="noreferrer"
					>
						<div>
							<strong>{issue.title}</strong>
							<p>{issue.user.login}</p>
						</div>
						<FiChevronRight size={20} />
					</a>
				))}
			</Issues>
		</>
	);
}
