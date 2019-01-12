import React, { Component } from 'react'

export default class RateCard extends Component {
  render() {
    return (
      <div className="panel-body">
        <div className="media">
          <div className="media-left">
            <img src={this.props.src}></img>
          </div>
          <div className="media-body pl4">
            <h4>{this.props.item}</h4>
            <strong>
              <span>{this.props.price}</span>
              <small>per Kg</small>
            </strong>
          </div>
        </div>
      </div>
    )
  }
}
