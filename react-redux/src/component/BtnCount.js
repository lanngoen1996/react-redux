import { Component } from "react"
import { connect } from 'react-redux'
import { increment } from '../store/features/counter'

class BtnComponent extends Component {
  state = {
    count: 0
  }

  count = () => {
    // Increment store

    this.props.increment()

    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <button onClick={this.count}>
        Count in component: {this.state.count}
      </button>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter.value
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment())
})

export default connect(mapStateToProps, mapDispatchToProps)(BtnComponent)