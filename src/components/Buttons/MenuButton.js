import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	button: {
		fontSize: '14px',
		fontWeight: 700,
		textTransform: 'capitalize',
		color: theme.palette.text.mainLight,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'left',
		alignItems: 'center',
		width: '260px',
		borderRadius: 0,
		backgroundColor: 'rgba(255,255,255,0)',
		boxShadow: 'none',
		margin: theme.spacing(1),
		marginBottom: '0px',
		'&:hover': {
			backgroundColor: 'rgba(255,255,255,0.3)',
			color: theme.palette.text.mainLight,
		},
		'@media screen and (min-width:991px)': {
			margin: theme.spacing(0),
			marginBottom: '8px',
			color: theme.palette.text.mainContrast
		}
	}
}));


export default function MenuButton(props) {
	const classes = useStyles();

	return (
		<div>
			<Button
				variant="contained"
				size="large"
				className={classes.button}
				href={props.link}
				startIcon={props.icon}
				onClick={props.menuBtnClicked}
			>
				{props.children}
			</Button>
		</div>
	);
}
