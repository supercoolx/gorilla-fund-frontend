import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTopWrapper from 'components/util/ScrollToTopWrapper';
import routes from 'router/routes';

const render = route => {
    return route?.map((item, key) => (
		<Route path={item.url} element={item.component} key={key} >
			{ render(item.child) }
		</Route>
	));
}

function App() {
	const component = render(routes);

	return (
		<BrowserRouter>
			<ScrollToTopWrapper>
				<Routes>
					{component}
				</Routes>
			</ScrollToTopWrapper>
		</BrowserRouter>
	);
}

export default App;
