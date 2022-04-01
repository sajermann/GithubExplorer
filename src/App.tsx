import { BrowserRouter } from 'react-router-dom';
import RoutesAll from './routes';
import GlobalStyle from './styles/global';

function App() {
	return (
		<>
			<BrowserRouter>
				<RoutesAll />
			</BrowserRouter>
			<GlobalStyle />
		</>
	);
}

export default App;
