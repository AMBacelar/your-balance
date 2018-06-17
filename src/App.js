import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { fetchBalance } from './actions/balance';

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

		const { balance } = this.props;

		return(
			<Grid>
        <h1>Your Account</h1>
				<Row>
					<Col md={6}>
						Current Balance: £{balance.toFixed(2)}
					</Col>
				</Row>
				<Button>
					increment
				</Button>
				<Button>
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
}

export default connect(mapStateToProps, { fetchBalance } )(App);