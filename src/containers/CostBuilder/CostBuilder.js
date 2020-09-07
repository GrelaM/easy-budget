import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Auxiliary from '../../hoc/Auxiliary';
import AccountBalance from '../../components/AccountBalance/AccountBalance';
import AccountControler from '../../components/AccountControler/AccountControler';
import AddNewItemControler from '../AddNewItemControler/AddNewItemControler';

const useStyles = makeStyles((theme) => ({
	header: {
		marginTop: theme.margin.middle,
		marginBottom: theme.margin.middle,
		paddingLeft: theme.spacing(2),
		padding: theme.spacing(1),
		textAlign: 'left',
		fontSize: '0.9em',
		letterSpacing: '1px',
		color: theme.palette.text.mainLight,
		fontWeight: 600
	}
}));
const initialState = {
	accountCurrency: 'PLN',
	accountHistory: [
		{ id: 1, category: 'shopping', item: 'groceries', amount: 100, date: '2020-05-15' },
		{ id: 2, category: 'shopping', item: 'rent', amount: 500, date: '2020-04-15' },
		{ id: 3, category: 'income', item: 'LTD agency', amount: 1500, date: '2020-06-03' },
		{ id: 4, category: 'shopping', item: 'groceries', amount: 157, date: '2020-08-15' },
		{ id: 5, category: 'shopping', item: 'rent', amount: 500, date: '2020-12-15' },
		{ id: 6, category: 'income', item: 'LTD agency', amount: 1000, date: '2020-01-03' },
		{ id: 7, category: 'shopping', item: 'rent', amount: 50, date: '2020-12-15' },
		{ id: 8, category: 'shopping', item: 'rent', amount: 97, date: '2020-02-03' },
		{ id: 9, category: 'income', item: 'aditional job', amount: 750, date: '2020-12-20' }
	]
};

const CostBuilder = () => {
	const classes = useStyles();
	const [ state, setState ] = useState(initialState);

	const updateAccountHistory = (cat, itemPassed, cost, datePassed) => {
		const index = state.accountHistory.length;
		setState((state) => ({
			...state,
			accountHistory: [
				...state.accountHistory,
				{ id: index + 1, category: cat, item: itemPassed, amount: cost, date: datePassed }
			]
		}));
	};

	return (
		<Auxiliary>
			<AccountBalance account={state} />
			<Grid item xs={12} className={classes.header}>
				Recent transactions
			</Grid>
			<AccountControler history={state} />
			<AddNewItemControler update={updateAccountHistory} />
		</Auxiliary>
	);
};

export default CostBuilder;
