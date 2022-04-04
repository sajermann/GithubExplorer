import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

export default function RoutesAll() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/repository/:repository*" element={<Repository />} />
		</Routes>
	);
}
