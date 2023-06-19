import { Component } from "react"
import { connect } from 'react-redux'
import { decrement } from '../store/features/counter'

class Decrement extends Component {
  render() {
    return (
      <button onClick={this.props.decrement}>
        Decrement in store
      </button>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter.value
})

const mapDispatchToProps = dispatch => ({
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Decrement)