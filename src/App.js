import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { fetchBalance, processTransaction } from './actions/balance';
import styles from './App.css';
import classNames from 'classnames';

class App extends React.Component{

	componentDidMount() {
		this.props.fetchBalance();
		console.log(styles);
	}

	render(){
		const { balance, processTransaction } = this.props;
		const incrementValue = 2;

		return(
			<Grid>
        <h1>Your Account</h1>
				<Row>
					<Col md={6}>
						{balance < 0 && <h2 className={styles.warning}>Your account is in the negative values</h2>}
						<p className={classNames(balance < 0 && styles.warning)} >Current Balance: £{balance.toFixed(2)}</p>
					</Col>
				</Row>
				<Button
					onClick={() => processTransaction(incrementValue)}
				>
					increment
				</Button>
				<Button
					onClick={() => processTransaction(incrementValue * -1)}
				>
					decrement
				</Button>
			</Grid>
		)
	}
}

function mapStateToProps(state) {
	return {
		balance: state.balance,
	};
}

App.propTypes = {
	balance: PropTypes.number.isRequired,
	fetchBalance: PropTypes.func.isRequired,
	processTransaction: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { fetchBalance, processTransaction } )(App);