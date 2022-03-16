import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from 'router/routes';

function App() {
	return (
		<>
		<BrowserRouter>
			<Routes>
				{
					routes.map(
						prop => <Route path={prop.url} element={prop.component} />
					)
				}
			</Routes>
		</BrowserRouter>
		</>
	);
}

export default App;
