var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
			isLoading: true,
			playerInfo: []
		}
	},
	componentDidMount: function () {
		var query = this.props.location.query
		//this goes through URL and can see playerOne and playerTwo
	},
	render: function () {
		return (
			<ConfirmBattle
				isLoading={this.state.isLoading}
				playersInfo={this.state.playersInfo}
			 />
		)
	}
});

module.exports = ConfirmBattleContainer;