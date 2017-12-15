import React from 'react';

export default class home extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
            pageTitle:'Home page'
        }
    }

    handleChange(event){
        this.setState({
            pageTitle:event.target.value
        })
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>{this.state.pageTitle}</h1>
                <p>This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.</p>
                <input type="text" 
                placeholder="pagetitle" 
                value={this.state.pageTitle} 
                onChange={this.handleChange.bind(this)}
                 />
            </div>
        )
    }
};