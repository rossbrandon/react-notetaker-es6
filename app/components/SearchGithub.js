import React from 'react'
var Router = require('react-router')
// Don't think I can use ES2015 here because of history module dependency
//import Router from 'react-router'

var SearchGithub = React.createClass({
    mixins: [Router.History],

    getRef(ref) {
        this.usernameRef = ref
    },

    handleSubmit() {
        var username = this.usernameRef.value
        this.usernameRef.value = ''
        this.history.pushState(null, `/profile/${username}`)
    },

    render() {
        return (
            <div className="col-sm-12">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group col-sm-7">
                        <input type="text" className="form-control" ref={this.getRef} />
                    </div>
                    <div className="form-group col-sm-5">
                        <button type="submit" className="btn btn-block btn-primary">Search Github</button>
                    </div>
                </form>
            </div>
        )
    }
})

export default SearchGithub
