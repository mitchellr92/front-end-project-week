import React, { Component } from 'react';

class Note extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.notes}
            </div>
        )
    }
}

export default Note;