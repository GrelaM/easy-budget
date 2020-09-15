import React, { useReducer } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		backgroundColor: 'rgba(255,255,255,0.9)',
		border: '1px solid #000',
		boxShadow: '1px',
		padding: '20px 40px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		outline: 'none'
	},
	absolute: {
		position: 'fixed',
		bottom: theme.spacing(1),
		right: theme.spacing(1),
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.text.mainContrast
	},
	modalButtonBox: {
		marginTop: '20px'
	},
	modalButton: {
		color: theme.palette.text.mainLight,
		fontWeight: 800
	},
	formControl: {
		textTransform: 'capitalize',
		margin: theme.spacing(1),
		minWidth: 200
	},
	formCategories: {
		textTransform: 'capitalize'
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		margin: theme.spacing(1)
	}
}));

const initialCostState = {
	category: [ 'shopping', 'rent', 'bank transactions', 'bills', 'transport', 'income' ],
	cat: '',
	item: '',
	cost: '',
	date: '',
	modalVisible: false
};

export default function TransitionsModal(props) {
	const classes = useStyles();

	function reducer(state, action) {
		switch (action.type) {
			case 'CATEGORY_SET':
				return { ...state, cat: state.category[action.value] };
			case 'ON_CHANGE_ITEM':
				return { ...state, item: action.value };
			case 'ON_CHANGE_COST':
				return { ...state, cost: action.value };
			case 'ON_CHANGE_DATE':
				return { ...state, date: action.value };
			case 'RESET':
				return { ...state, cat: '', item: '', cost: '', date: '' };
			case 'OPEN':
				return { ...state, modalVisible: true };
			case 'CLOSE':
				return { ...state, cat: '', item: '', cost: '', date: '', modalVisible: false };
			default:
				console.log('It should never get here!');
		}
	}

	const [ costState, dispatch ] = useReducer(reducer, initialCostState);

	return (
		<div>
			<Tooltip title="Add" aria-label="add" onClick={() => dispatch({ type: 'OPEN' })}>
				<Fab className={classes.absolute}>
					<AddIcon />
				</Fab>
			</Tooltip>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={costState.modalVisible}
				onClose={() => dispatch({ type: 'CLOSE' })}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}
			>
				<Fade in={costState.modalVisible}>
					<div className={classes.paper}>
						<h2 id="transition-modal-title">Add new item</h2>
						<FormControl required className={classes.formControl}>
							{' '}
							{/*CATEGORY*/}
							<InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
							<Select label="Category" id="demo-simple-select-helper" value={costState.cat}>
								{costState.category.map((el, id) => {
									return (
										<MenuItem
											className={classes.formCategories}
											key={id}
											value={el}
											onClick={() => dispatch({ type: 'CATEGORY_SET', value: id })}
										>
											{el}
										</MenuItem>
									);
								})}
							</Select>
						</FormControl>
						<TextField // ITEM
							required
							className={classes.formControl}
							id="standard-required"
							label="Items"
							value={costState.item}
							type="text"
							onChange={(event) => dispatch({ type: 'ON_CHANGE_ITEM', value: event.target.value })}
						/>
						<TextField // COST
							required
							className={classes.formControl}
							id="standard-required"
							label="Costs"
							value={costState.cost}
							type="number"
							onChange={(event) =>
								dispatch({ type: 'ON_CHANGE_COST', value: Number(event.target.value) })}
						/>
						<form className={classes.container} noValidate>
							<TextField // DATE
								required
								className={classes.formControl}
								id="date"
								label="Date"
								value={costState.date}
								type="date"
								onChange={(event) => dispatch({ type: 'ON_CHANGE_DATE', value: event.target.value })}
								InputLabelProps={{
									shrink: true
								}}
							/>
						</form>
						<div className={classes.modalButtonBox}>
							<ButtonGroup variant="text" aria-label="text primary button group">
								<Button
									disabled={
										costState.cat === '' ||
										costState.item === '' ||
										costState.cost === '' ||
										costState.date === '' ? (
											true
										) : (
											false
										)
									}
									className={classes.modalButton}
									onClick={() => {
										props.update(costState.cat, costState.item, costState.cost, costState.date);
										dispatch({
											type: 'CLOSE'
										});
									}}
								>
									Add
								</Button>
								<Button
									disabled={
										costState.cat === '' &&
										costState.item === '' &&
										costState.cost === '' &&
										costState.date === '' ? (
											true
										) : (
											false
										)
									}
									className={classes.modalButton}
									onClick={() => dispatch({ type: 'RESET' })}
								>
									Reset
								</Button>
								<Button className={classes.modalButton} onClick={() => dispatch({ type: 'CLOSE' })}>
									Close
								</Button>
							</ButtonGroup>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
