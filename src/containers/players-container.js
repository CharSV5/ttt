import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { switch_Player_O, switch_Player_X, place_X } from '../actions/players-actions';


class PlayersContainer extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    
    render() {
        return(
            <div>
                {this.props.turn}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        turn: state.playersReducer.turn
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onSwitchPlayerO: switch_Player_O,
        onSwitchPlayerX: switch_Player_X,
        onPlaceX: place_X
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersContainer)