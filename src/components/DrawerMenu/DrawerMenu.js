import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import Logo from '../Logo/Logo';
import ButtonControler from '../ButtonControler/ButtonControler';

const useStyles = makeStyles((theme) => ({
	list: {
        width: 250
	},
	displayLogo: {
        marginRight: theme.spacing(2),
		backgroundColor: 'rgba(100,93,15,0.5)',
		fontSize: '2em',
		color: theme.palette.text.mainLight,
        width: '100%',
        height: '80px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
    },
}));

export default function MenuDrawer(props) {
	const classes = useStyles();
	const drawer = props.drawerMenu;

	return (
        <div>
            <Drawer open={drawer} onClose={props.toggleMenu}>
                
				<div className={classes.displayLogo} color="inherit">
					<Logo logoPlaceholder={'drawerMenu'}/>
				</div>
				<ButtonControler />				
            </Drawer>
        </div>
	);
}
