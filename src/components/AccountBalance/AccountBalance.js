import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	paperOne: {
		padding: theme.spacing(2),
		textAlign: 'left',
		color: (props) =>
			props.balanceBackground >= 0 ? theme.palette.text.mainLight : theme.palette.text.mainContrast,
		fontSize: '1.5em',
		backgroundColor: (props) =>
			props.balanceBackground >= 0 ? theme.palette.primary.light : theme.palette.secondary.main
	},
	paperAdditional: {
		textAlign: 'center',
		fontSize: '2.4em'
	},
	paper: {
		textAlign: 'center',
		fontSize: '0.4em'
	}
}));

const AccountBalance = (props) => {
	const balance = props.account.accountHistory.reduce((balance, current) => {
		// return balance + current.amount;
		if (current.category === 'income') {
			return balance + current.amount;
		} else {
			return balance - current.amount;
		}
	}, 0)

	const classes = useStyles({
		balanceBackground: balance
	});

	return (
		<div>
			<Grid item xs={12}>
				<Paper className={classes.paperOne}>
					Balance:
					<div className={classes.paperAdditional}>
						{balance >= 0 ? `+${balance}` : balance}
						<div className={classes.paper}>{props.account.accountCurrency}</div>
					</div>
				</Paper>
			</Grid>
		</div>
	);
};

export default AccountBalance;
