import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Auxiliary from '../../hoc/Auxiliary';
import AppToolBar from '../../components/AppToolBar/AppToolBar';
import Drawer from '../../components/DrawerMenu/DrawerMenu';
import SideMenu from '../../components/SideMenu/SideMenu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'row'
	},
	rootSider: {
		width: '280px',
		display: 'none',
		'@media screen and (min-width:991px)': {
			display: 'inline'
		}
	},
	rootMain: {
		width: '100%',
		'@media screen and (min-width:991px)': {
			minHeight: '50vh'
		}
	},
	contantSpace: {
		minWidth: '77%',
		marginTop: theme.margin.large,
		margin: theme.margin.small,
		paddingBottom: '30px',
		'@media screen and (min-width:991px)': {
			marginTop: theme.margin.large,
			margin: 'auto',
			maxHeight: '80vh',
			minHeight: '80vh',
			overflow: 'scroll',
			overflowX: 'hidden',
			'&::-webkit-scrollbar': {
				width: '0.5em'
			},
			'&::-webkit-scrollbar-track': {
				background: theme.palette.primary.light,
				borderRadius: 15
			},
			'&::-webkit-scrollbar-thumb': {
				background: theme.palette.primary.dark,
				borderRadius: 15
			},
			'&::-webkit-scrollbar-thumb:hover': {
				background: theme.palette.primary.main
			}
		}
	},
	contant: {
		minWidth: '100%',
		maxWidth: '100%',
		margin: 'auto',
		'@media screen and (min-width:991px)': {
			minWidth: '95%',
			maxWidth: '98%',
		}
	}
}));

const Layout = (props) => {
	const classes = useStyles();
	const [ drawerState, setDrawerState ] = useState(false);
	const [ auth ] = useState(true);
	const [ anchorAuthProfile, setAnchorAuthEl ] = useState(null);

	const toggleDrawer = () => {
		setDrawerState(!drawerState);
	};

	const handleProfileMenu = (event) => {
		setAnchorAuthEl(event.currentTarget);
	};

	const handleProfileClose = () => {
		setAnchorAuthEl(null);
	};

	return (
		<Auxiliary>
			<div className={classes.root}>
				<div className={classes.rootSider}>
					<SideMenu />
				</div>
				<div className={classes.rootMain}>
					<AppToolBar
						authorizationCheck={auth}
						toggleMenu={toggleDrawer}
						profileMenu={anchorAuthProfile}
						openProfileMenu={handleProfileMenu}
						closeProfileMenu={handleProfileClose}
					/>
					<Drawer drawerMenu={drawerState} toggleMenu={toggleDrawer} />
					<div className={classes.contant}>
						<main className={classes.contantSpace}>{props.children}</main>
					</div>
				</div>
			</div>
		</Auxiliary>
	);
};

export default Layout;