import React, { Component } from 'react';
import { connect } from 'react-redux';

class News extends Component {
    // changeEditStatus() {
    //     let dispatch = this.props.dispatch;
    //     dispatch({type: "CHANGE_EDIT_STATUS"})
    // }
    render() {
        return (
            <div>
                <h2>Đây là component NEWS</h2>
                <button onClick={() => this.props.changeEditStatus()}>Click</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({type: "CHANGE_EDIT_STATUS"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);