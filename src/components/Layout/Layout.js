import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Auxiliary from '../../hoc/Auxiliary';


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1,
		fontSize: '1.1em',
		fontWeight: 100
	},
	appBarBackground: {
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.text.mainContrast
	},
	contantSpace: {
		marginTop: theme.margin.large,
		margin: '5px'
	}
}));

const Layout = (props) => {
	const classes = useStyles();

	return (
		<Auxiliary>
			<div className={classes.root}>
				<AppBar position="static" className={classes.appBarBackground}>
					<Toolbar>
						<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							Home {/* To navigate where user is*/}
						</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
			</div>
			{/* <div>Manu, SideMenu</div> */}
			<main className={classes.contantSpace}>{props.children}</main>
		</Auxiliary>
	);
};

export default Layout;
