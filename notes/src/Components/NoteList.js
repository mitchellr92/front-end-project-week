import React, { Component } from 'react';
import axios from 'axios';
import Note from './Note';

class NoteList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
        }
    }

    componentDidMount() {
        console.log(this.state.notes)
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/all`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    notes: response.data
                })
            })
            .catch(error => console.log('error!'))
    }

    render() {
        return (
            <div>
                {this.state.notes.map(note => {
                    console.log(note)
                    return (
                        <Note
                            note={note}
                        />
                    )
                })}
            </div>
        )
    }
}

export default NoteList;