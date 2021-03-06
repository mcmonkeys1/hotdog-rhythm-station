import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Theme stuff:
import 'typeface-roboto';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
	typography: { 
		 useNextVariants: true
	},
	overrides: {
		MuiButton: {
			root: {
				margin: "10px"
			}
		}
	}
});

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<CssBaseline />
		<App />
	</MuiThemeProvider>
	, document.getElementById('root')
);


