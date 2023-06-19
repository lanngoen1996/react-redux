import { Component } from "react";
import { connect } from 'react-redux'

class ReduxDisplay extends Component {
  render() {
    return (
      <p>
        Count display: {this.props.counter}
      </p>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter.value
})

export default connect(mapStateToProps)(ReduxDisplay)