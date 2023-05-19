import React from 'react';
import {
  Table,
  Select
} from 'antd'

import MenuBar from '../components/MenuBar';


class HomePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }


  goToMatch(matchId) {
    // window.location = `/matches?id=${matchId}`
  }


  componentDidMount() {

  }


  render() {

    return (
      <div>
        <MenuBar />
        <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
          <h3>Hi!</h3>
        </div>
      </div>
    )
  }

}

export default HomePage

