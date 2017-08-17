import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchweather } from '../actions/index';


class SearchBar extends Component {
    constructor(props){
    	super(props);
    	this.state = {
    		seachTerm : ''
    	}
    	this.onInputChange = this.onInputChange.bind(this);
    	this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e){
      this.setState({seachTerm : e.target.value});
    }
    
    onFormSubmit(e){
    	e.preventDefault();
    	this.props.fetchweather(this.state.seachTerm);
    	this.setState({seachTerm : ''});
    }

	render(){
		return(
         <form className="input-group" onSubmit={this.onFormSubmit}>
         	<input 
         	className="form-control" 
         	placeholder="Fetch five days weather report for cities in India"
         	value = {this.state.seachTerm}
         	onChange = {this.onInputChange}
         	/>
         	<span className="input-group-btn">
         		<button type="submit" className="btn">Search</button>
         	</span>
         </form>
			);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchweather },dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
