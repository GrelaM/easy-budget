import React from 'react';

import './SideMenu.css';
import Logo from '../Logo/Logo';
import { makeStyles } from '@material-ui/core/styles';
import ButtonControler from '../ButtonControler/ButtonControler';

const useStyles = makeStyles((theme) => ({
    displayLogo: {
        marginRight: theme.spacing(2),
		backgroundColor: 'rgba(100,93,15,0.6)',
        width: 'inherit',
        height: '64px',
		margin: '0 15px 15px 15px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
    },
}));

const SideMenu = () => {
    const classes = useStyles();
	return (
		<div className="side">
			<div className="sideBackground" />
			<div className="sideMain">
				<div className={classes.displayLogo} color="inherit">
					<Logo />
				</div>
				<ButtonControler />
			</div>
		</div>
	);
};

export default SideMenu;
