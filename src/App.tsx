import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from 'router/routes';
import Nav from 'components/Nav/Nav';
import StartFundraising from 'components/Footer/StartFundraising';
import Footer from 'components/Footer/Footer';

function App() {
	return (
		<>
		<BrowserRouter>
			<Nav />
			<Routes>
				{
					routes.map(
						prop => <Route path={prop.url} element={prop.component} />
					)
				}
			</Routes>
			<StartFundraising />
			<Footer />
		</BrowserRouter>
		</>
	);
}

export default App;
