import React from 'react';
import {
  Table,
  Select
} from 'antd'

import MenuBar from '../components/Menu';


class Resume extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div id="resume">
        <MenuBar />
        <div style={{ width: '70vw', margin: '0 auto', marginTop: '10vh' }}>
          <h3>Resume</h3>
        </div>
      </div>
    )
  }

}

export default Resume

