import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        // 'state' here is at component level only,
        // has nothing to do with the state of Redux;
        // initialize 'state' in the constructor
        this.state = { term: '' }

        // Need to bind the context for 'this'
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        // Here, the context of 'this', is not this class,
        // unless we make an explicit bind in constructor (see above) 
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        // We need to go and fetch weather data
        this.props.fetchWeather(this.state.term);

        this.setState( {term: ''} );
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                placeholder="Get a five day weather forecast in your favorite cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
                />
                <span className="input-group-button">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }   
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { fetchWeather }, dispatch);
}

// section5, lecture 58
// null because in this case we're not mapping any props in, just action
export default connect(null, mapDispatchToProps)(SearchBar);