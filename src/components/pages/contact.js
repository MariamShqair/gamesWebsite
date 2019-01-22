import React, { Component } from 'react';
class contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="main-body mr-3 pl-3 ">
        <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Your Name</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            
           
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Your Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </form> 
          </div>
          );
   
    }
}
 
export default contact;