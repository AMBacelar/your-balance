import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { fetchBalance, processTransaction } from './actions/balance';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
		this.props.fetchBalance();
	}

	render(){

		const { balance, processTransaction } = this.props;

		const incrementValue = 2;

		return(
			<Grid>
        <h1>Your Account</h1>
				<Row>
					<Col md={6}>
						Current Balance: £{balance.toFixed(2)}
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