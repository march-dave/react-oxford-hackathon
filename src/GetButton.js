import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {

    console.log('mapStateToProps1111', state.btnValue)
    return {
        GetBtnValue: state.btnValue
    }
}

class GetButton extends Component {
  render() {
    return (
      <div>
        GetBtnValue: 
        {/* <input type="text" value={this.props.GetBtnValue} /> */}
        <button>GetButton</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(GetButton);
