import React, { Component } from "react";
import action from "./Action";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    SetBtnValue: e => dispatch(action())
  };
};

class SetButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
        bool: false
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.props.SetBtnValue}>SetButton</button>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SetButton);
