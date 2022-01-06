import React, { Component } from 'react'

export class User extends Component {
    render() {
        return (
            <h1>{this.props.render(true)}</h1>
        )
    }
}

export default User
