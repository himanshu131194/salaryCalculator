import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchSalary} from '../actions/';

class Header extends Component{
   componentDidMount(){
      console.log(this.props.fetchSalary());
   }
   render(){
       return(
           <div>
              Header
           </div>
       )
   }
}


function mapStateToProps(state){
    return {
       salary : state.salary
    }
}


export default connect(mapStateToProps, {fetchSalary})(Header)
