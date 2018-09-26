import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { switch_Player_O, switch_Player_X, place_X, place_O } from '../actions/players-actions';
import BoardContainer from '../containers/board-container';

class PlayersContainer extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    
    render() {
        return(
            <div>
                <BoardContainer turn={this.props.turn}/>
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
        onPlaceX: place_X,
        onPlaceO: place_O
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersContainer)