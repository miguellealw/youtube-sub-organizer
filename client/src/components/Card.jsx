import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card">
        {/* ==== Card Header ====  */}
        <div className="card-header">
          <h3 className="card-header-title">
            {this.props.title}
          </h3>
        </div>

        {/* ==== Card Image ==== */}
        <div class="card-image">
          <figure class="image">
            <img
              src={this.props.img}
              alt={`Profile Img of ${this.props.title}`}
            />
          </figure>
        </div>
        {/* ==== Card Content ==== */}
        {/* <div className="card-content">
          <div className="content">
            {this.props.description}
          </div>
        </div> */}
      </div>
    );
  }
}

export default Card;
