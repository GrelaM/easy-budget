import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Alert, AlertTitle } from '@material-ui/lab';

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
	},
	alert: {
		marginBottom: theme.margin.middle
	}
}));
const initialState = {
	accountCurrency: 'PLN',
	accountHistory: [
		{ id: 0, category: 'shopping', item: 'groceries', amount: 100, date: '2020-05-15', deleteBtn: false },
		{ id: 1, category: 'shopping', item: 'rent', amount: 500, date: '2020-04-15', deleteBtn: false },
		{ id: 2, category: 'income', item: 'LTD agency', amount: 1500, date: '2020-06-03', deleteBtn: false },
		{ id: 3, category: 'shopping', item: 'groceries', amount: 157, date: '2020-08-15', deleteBtn: false },
		{ id: 4, category: 'bills', item: 'water', amount: 100, date: '2020-01-03', deleteBtn: false },
		{ id: 5, category: 'bills', item: 'energy', amount: 199, date: '2020-10-10', deleteBtn: false },
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
				{ id: index, category: cat, item: itemPassed, amount: cost, date: datePassed, deleteBtn: false }
			]
		}));
	};


	function findItem(passedId) {
		return state.accountHistory.find(el => el.id === passedId)
	}

	const showDeleteBtn = (itemId) => {
		const currentElement = findItem(itemId)
		setState(
			{ ...state }, currentElement.deleteBtn = !currentElement.deleteBtn
		);
	};

	const deleteItemAccountHistory = (itemId) => {
		const elCurrentPosition = state.accountHistory.indexOf(findItem(itemId))
		setState(
			{ ...state}, state.accountHistory.splice(elCurrentPosition, 1)
		)
	};

	return (
		<Auxiliary>
			<AccountBalance account={state} />
			<Grid item xs={12} className={classes.header}>
				Recent transactions
			</Grid>
			{state.accountHistory.length === 0 ? (
				<Alert className={classes.alert} severity="info">
					<AlertTitle>Info</AlertTitle>
					No transaction have been recorded — <strong>add next transaction!</strong>
				</Alert>
			) : (
				''
			)}
			<AccountControler history={state} clickedItem={showDeleteBtn} deleteItem={deleteItemAccountHistory} />
			<AddNewItemControler update={updateAccountHistory} />
		</Auxiliary>
	);
};

export default CostBuilder;