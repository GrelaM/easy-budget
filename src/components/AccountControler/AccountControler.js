import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Plus from '@material-ui/icons/AddCircleOutlineRounded';
import Cost from '@material-ui/icons/PaymentRounded';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
	cardBox: {
		minHeight: 80,
		maxHeight: 80,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'left',
		alignItems: 'center',
		marginBottom: theme.margin.middle,
		color: theme.palette.text.mainLight,
		borderRadius: 0,
		boxShadow: '0 4px 6px -5px #333',
		'@media screen and (min-width:991px)': {
			minHeight: 55,
			maxHeight: 55
		}
	},
	cardIconBox: {
		height: 'inherit',
		width: '10%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 0,
		margin: '0 0 0 16px',
		'@media screen and (min-width:991px)': {
			margin: 0
		}
	},
	cardIcon: {
		margin: 1,
		fontSize: '1.2em'
	},
	cardDeleteIcon: {
		margin: 1,
		color: theme.palette.secondary.dark
	},
	cardContentBox: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		minHeight: 'inherit',
		maxHeight: 'inherit',
		'@media screen and (min-width:991px)': {
			minHeight: 55,
			maxHeight: 55
		}
	},
	cardContent: {
		minWidth: '40%',
		paddingLeft: theme.spacing(0),
		padding: 0,
		textTransform: 'capitalize',
		fontFamily: 'inherit',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'left',
		'@media screen and (min-width:991px)': {
			flexDirection: 'row',
			justifyContent: 'left',
			alignItems: 'center',
		}
	},
	cardContentFirst: {
		fontSize: '1',
		fontWeight: 700,
		margin: 0,
		minWidth: 'initial',
		'@media screen and (min-width:991px)': {
			fontSize: '1.125em',
			margin: '0 10px',
			minWidth: '100px'
		}
	},
	cardContentSecond: {
		fontSize: '0.8em',
		fontWeight: 700,
		margin: 0,
		'@media screen and (min-width:991px)': {
			fontSize: '0.9em',
			margin: '0 10px',
		}
	},
	cardContentAmountInc: {
		minWidth: '25%',
		textAlign: 'right',
		lineHeight: '60px',
		fontSize: '1em',
		fontFamily: 'inherit',
		fontWeight: 700,
		color: theme.palette.primary.dark,
		'@media screen and (min-width:991px)': {
			minWidth: '35%',
		}
	},
	cardContentAmountExp: {
		minWidth: '25%',
		textAlign: 'right',
		lineHeight: '60px',
		fontSize: '1em',
		fontFamily: 'inherit',
		fontWeight: 700,
		color: theme.palette.secondary.dark,
		'@media screen and (min-width:991px)': {
			minWidth: '35%',
		}
	},
	date: {
		color: theme.palette.text.mainLight,
		fontSize: '0.8em',
		fontWeight: 700,
		marginLeft: theme.margin.small
	}
}));

const AccountControler = (props) => {
	const classes = useStyles();

	const sortedHistory =
		props.history.accountHistory !== ''
			? props.history.accountHistory.sort((a, b) => new Date(b.date) - new Date(a.date))
			: ''; // 1. Make an Order in Dates
	let historyCards;
	if (props.history.accountHistory !== '') {
		const itemDates = sortedHistory.map((el) => el.date); // 2. Make an Order in Dates
		const uniqueItemDates = itemDates.filter((a, b) => itemDates.indexOf(a) === b); // 3. Make an Order in Dates
		historyCards = (
			<div>
				{uniqueItemDates.map((elem, id) => {
					const items = sortedHistory.filter((el) => el.date === elem);
					return (
						<div key={id}>
							<div className={classes.date}>{elem}</div>
							<div>
								{items.map((el, id) => {
									return (
										<Paper className={classes.cardBox} key={id}>
											<Icon className={classes.cardIconBox}>
												{el.deleteBtn ? (
													<IconButton
														aria-label="delete"
														className={classes.cardDeleteIcon}
														onClick={() => props.deleteItem(el.id)}
													>
														<DeleteIcon />
													</IconButton>
												) : (
													<div>
														{el.category === 'income' ? (
															<Plus className={classes.cardIcon} />
														) : (
															<Cost className={classes.cardIcon} />
														)}
													</div>
												)}
											</Icon>
											<ListItem
												button
												onClick={() => props.clickedItem(el.id)}
												className={classes.cardContentBox}
											>
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
													{el.amount.toFixed(2)} {props.history.accountCurrency}
												</div>
											</ListItem>
										</Paper>
									);
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