import React from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from '../actions/greetingActions';
class Greeting extends React.Component {
  componentDidMount() {
    this.props.fetchGreeting();
  }
  render() {
    return (
      <div>
        <h1>{this.props.greeting}</h1>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    greeting: state
  };
};
export default connect(mapStateToProps, { fetchGreeting })(Greeting);
