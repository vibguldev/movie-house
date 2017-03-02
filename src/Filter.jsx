import React, { Component } from 'react'

class Filter extends Component {
  render() {
    return (
      <div className='filterBar'>
        Filter By Actor
        <select id='actorDropDown'>
        {/*onChange={this.updateMode.bind(this)}>*/}
          <option value='FTE'>FTE</option>
          <option value='Cost' selected='selected'>Cost</option>
        </select>
      </div>
    )
  }
}

export default Filter
