import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	appBarBackground: {
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.text.mainContrast
	},
	menuButton: {
		marginRight: theme.spacing(2),
		display: 'inline',
		'@media screen and (min-width:991px)': {
			display: 'none'
		}
	},
	title: {
		flexGrow: 1,
		marginLeft: 0,
		'@media screen and (min-width:991px)': {
			marginLeft: '8px'
		}
	}
}));

export default function MenuAppBar(props) {
	const classes = useStyles();
	const open = Boolean(props.profileMenu);
	const auth = props.authorizationCheck;

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.appBarBackground}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={props.toggleMenu}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Home
					</Typography>
					{auth && (
						<div>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={props.openProfileMenu}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={props.profileMenu}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								open={open}
								onClose={props.closeProfileMenu}
							>
								<MenuItem onClick={props.closeProfileMenu}>Profile</MenuItem>
								<MenuItem onClick={props.closeProfileMenu}>My account</MenuItem>
							</Menu>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}
