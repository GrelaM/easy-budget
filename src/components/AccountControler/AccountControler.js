import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Plus from '@material-ui/icons/AddCircleOutlineRounded';
import Cost from '@material-ui/icons/PaymentRounded';

const useStyles = makeStyles((theme) => ({
	cardBox: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: theme.margin.middle,
		color: theme.palette.text.mainLight,
		borderRadius: 0,
		boxShadow: '0 4px 6px -5px #333'
	},
	cardIconBox: {
		height: 'inherit',
		width: 'auto',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '0 5px'
	},

	cardIcon: {
		fontSize: '1.2em'
	},
	cardContent: {
		minWidth: '45%',
		paddingLeft: theme.spacing(0),
		padding: theme.spacing(1),
		textTransform: 'capitalize',
		fontFamily: 'inherit'
	},
	cardContentFirst: {
		fontSize: '1em',
		fontWeight: 700
	},
	cardContentSecond: {
		fontSize: '0.8em',
		fontWeight: 100
	},
	cardContentAmountInc: {
		minWidth: '30%',
		textAlign: 'center',
		lineHeight: '60px',
		fontSize: '1em',
		fontFamily: 'inherit',
		fontWeight: 700,
		color: theme.palette.primary.dark
	},
	cardContentAmountExp: {
		minWidth: '30%',
		textAlign: 'center',
		lineHeight: '60px',
		fontSize: '1em',
		fontFamily: 'inherit',
		fontWeight: 700,
		color: theme.palette.secondary.dark
	},
	date: {
		color: theme.palette.text.mainLight,
		fontSize: '0.8em'
	}
}));

const AccountControler = (props) => {
	const classes = useStyles();

	const arr = props.history.accountHistory !== '' ? props.history.accountHistory.sort((a, b) => new Date(b.date) - new Date(a.date)) : ''; // 1. Make an Order in Dates
	let historyCards;
	if (props.history.accountHistory !== '') {
		const dateArr = arr.map((el) => el.date); // 2. Make an Order in Dates
		const array = dateArr.filter((a, b) => dateArr.indexOf(a) === b); // 3. Make an Order in Dates
		historyCards = (
			<div>
				{array.map((elem, id) => {
					return (
						<div key={id}>
							<div className={classes.date}>{elem}</div>
							<div>
								{arr.map((el, id) => { 
									if (el.date === elem) {
										return (
											<Paper className={classes.cardBox} key={id}>
												<Icon className={classes.cardIconBox}>
													{el.category === 'income' ? (
														<Plus className={classes.cardIcon} />
													) : (
														<Cost className={classes.cardIcon} />
													)}
												</Icon>
												<div className={classes.cardContent}>
													<Typography className={classes.cardContentFirst} gutterBottom>
														{el.category}
													</Typography>
													<Typography className={classes.cardContentSecond} gutterBottom>
														{el.item}
													</Typography>
												</div>
												<div
													className={
														el.category === 'income' ? (
															classes.cardContentAmountInc
														) : (
															classes.cardContentAmountExp
														)
													}
												>
													{el.amount} {props.history.accountCurrency}
												</div>
											</Paper>
										);
									} else { return null}
								})}
							</div>
						</div>
					);
				})}
			</div>
		);
	}

	return (
		<Grid item xs={12}>
			{historyCards}
		</Grid>
	);
};

export default AccountControler;
