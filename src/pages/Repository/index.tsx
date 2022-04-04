import { useMatch } from 'react-router-dom';

export default function Repository() {
	const r = useMatch('/repository/:repository*');
	console.log({ r });
	return (
		<div>
			<h1>Repository {r?.pathname}</h1>
		</div>
	);
}
