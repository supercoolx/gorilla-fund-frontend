import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTopWrapper from 'components/util/ScrollToTopWrapper';
import routes from 'router/routes';

function App() {
	return (
		<BrowserRouter>
			<ScrollToTopWrapper>
				<Routes>
					{
						routes.map(
							(prop, key) => <Route path={prop.url} element={prop.component} key={key} />
						)
					}
				</Routes>
			</ScrollToTopWrapper>
		</BrowserRouter>
	);
}

export default App;
