import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
	}

	render(){
		return(
			<Grid>
        <h1>Your Account</h1>
				<Row>
					<Col md={6}>
						Current Balance:
					</Col>
				</Row>
			</Grid>
		)
	}
}

function mapStateToProps(state) {
	return {
		
	};
}

App.propTypes = {
}

export default connect(mapStateToProps, null )(App);