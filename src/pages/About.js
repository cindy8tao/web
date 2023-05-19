import React from 'react';
import {
  Table,
  Select
} from 'antd'

import MenuBar from '../components/MenuBar';


class About extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div id="about">
        <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
          <h3>About</h3>
        </div>
      </div>
    )
  }

}

export default About

