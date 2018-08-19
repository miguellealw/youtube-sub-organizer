import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <li className={`flex-${this.props.i} max-w-xs rounded overflow-hidden shadow-lg`}>
        <img className="w-full" src={this.props.img} alt="Thumbnail" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{this.props.title}</div>
          <p className="text-grey-darker text-base">{this.props.description}</p>
        </div>
      </li>
    );
  }
}
