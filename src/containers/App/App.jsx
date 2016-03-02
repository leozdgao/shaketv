import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { CounterActions } from '../../redux/modules'
import { Tabnav } from '../../components'

// const mapStates = ({ counter }) => ({ count: counter.count })
// const mapActions = {
//   increase: CounterActions.increment
// }

class App extends React.Component {
  render () {
    return (
      <div>
        {this.props.children}
        <Tabnav />
      </div>
    )
  }
}

export default App
// export default connect(mapStates, mapActions)(App)
