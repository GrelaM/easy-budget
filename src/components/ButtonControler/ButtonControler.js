import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuButton from '../Buttons/MenuButton';
import Divider from '@material-ui/core/Divider';

import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PieChartIcon from '@material-ui/icons/PieChart';
import SettingsIcon from '@material-ui/icons/Settings';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';


const useStyles = makeStyles(() => ({
	root: {
		minWidth: '100%',
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'top',
		alignItems: 'center'
		// backgroundColor: 'pink'
	},
	divider: {
		width: '90%',
		height: '1px',
		backgroundColor: 'rgba(0,0,0,0.8)',
		margin: '8px 0 0 0',
		'@media screen and (min-width:991px)': {
			backgroundColor: 'rgba(0,0,0,0.3)',
			margin: '0 0 8px 0'
		}
	},
}));

function iconReducer(el) {
	switch (el) {
		case 'home':
			return <HomeIcon />;
		case 'my finances':
			return <AttachMoneyIcon />;
		case 'payments':
            return <CreditCardIcon />;
        case 'savings':
            return <AccountBalanceIcon />;
        case 'summary':
			return <PieChartIcon />;
		case 'settings':
			return <SettingsIcon />;
		case 'log out':
			return <MeetingRoomIcon />;
		default:
			console.log('It should never get here!');
	}
}

function linkReducer(el) {
	switch (el) {
		case 'home':
			return '/';
		case 'payments':
        case 'savings':
        case 'summary':
		case 'settings':
            return el;
		case 'my finances':
			return 'myfinances';
		case 'log out':
			return null;
		default:
			console.log('It should never get here! - {ButtonControler}');
	}
}

const ButtonControler = () => {
	const classes = useStyles();
	const appBtnList = [ 'home', 'my finances', 'payments', 'savings', 'summary' ];
	const settingsBtnList = [ 'settings', 'log out' ];
	const btnSettingsCheck = appBtnList !== '' && settingsBtnList !== '';
	let btnMainControler;
	if (btnSettingsCheck) {
		btnMainControler = appBtnList.map((el, id) => {
			return (
                <MenuButton 
                    key={id} 
                    link={linkReducer(el)} 
                    icon={iconReducer(el)}
                >{el}
				</MenuButton>
			);
		});
	}
	let btnSettingsControler;
	if(btnSettingsCheck) {
		btnSettingsControler = settingsBtnList.map((el, id) => {
			return(
				<MenuButton 
                    key={id} 
                    link={linkReducer(el)} 
                    icon={iconReducer(el)}
                >{el}
				</MenuButton>
			)
		})
	}

	return(
		<div className={classes.root}>
			{btnMainControler}
			<Divider className={classes.divider}/>
			{btnSettingsControler}
		</div>);
};

export default ButtonControler;
