import React from 'react';

import Auxiliary from './hoc/Auxiliary';
import Layout from './containers/Layout/Layout';
import CostBuilder from './containers/CostBuilder/CostBuilder';

import { createMuiTheme, ThemeProvider, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#f1f8e9',
			main: '#9ccc65',
			dark: '#33691e'
		},
		secondary: {
			light:'#ffe6e6',
			main: '#f44336',
			dark: '#ba000d'
		},
		text: {
			main: '#000',
			mainContrast: '#fff',
			mainLight: '#333333'
		}
	},
	margin: {
		large: '16px',
		middle: '8px',
		small: '5px'
	}
});

function App() {
	return (
		<Auxiliary>
			<ThemeProvider theme={theme}>
				<MuiThemeProvider theme={theme}>
					<Layout>
						<CostBuilder />
					</Layout>
				</MuiThemeProvider>
			</ThemeProvider>
		</Auxiliary>
	);
}

export default App;
