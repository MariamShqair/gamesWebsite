import React, { Component } from 'react';
import { getGameById ,setComment } from '../data/games';
// const Play = ({match}) => {
//     const id =match.params.id
//     const game = getGameById(id);
//     let newComment;
//     const handleChange = (e)=>{
//        newComment = e.target.value 
       
//     }
//     const handleSubmit = (e)=>{
//         setComment(game,newComment)
//         e.preventDefault();
//      }
    
//     return ( <div className="play">
//     <h3>{game.name}</h3>
//     <div className="game">
//         <embed 
//         src={game.link} type="application/x-shockwave-flash">
//         </embed>
//     </div> 
//     <div className="comments">
//         <h3>Comments</h3>
//         {game.comments.map(comment=>
//         <div className="comment">
//             <div class="alert  alert-info" role="alert">
//                 {comment.comment}
//             </div>
//         </div>
//             )}
            
//             <form onSubmit={handleSubmit}>
  
//                 <div className="form-group">
//                     <label for="comment">Add Comment:</label>
//                     <input type="text" className="form-control" id="comment"onChange={handleChange} placeholder="comment"/>
//                 </div>
                
//                 <input type="submit" value="Submit" />
//             </form>
//     </div>
//     </div>);
// }

class Play extends Component {
    state = { 
        id :"",
        game :{},
        comment:""
     }
     componentWillMount(){
        const id = this.props.match.params.id
        const game = getGameById(id)
        this.setState({game,id})
     }
      handleChange = (e)=>{
        const comment = e.target.value 
        this.setState({comment})
     }
      handleSubmit = (e)=>{
         setComment(this.state.game,this.state.comment)
         const game = getGameById(this.state.id)
         this.setState({game})
         e.preventDefault();
      }
    render() { 
        const game = this.state.game
       
        return ( <div className="play">
        <h3>{game.name}</h3>
        <div className="game">
            <embed 
            src={game.link} type="application/x-shockwave-flash">
            </embed>
        </div> 
        <div className="comments">
            <h3>Comments</h3>
            {game.comments.map(comment=>
            <div className="comment">
                <div class="alert  alert-info" role="alert">
                    {comment.comment}
                </div>
            </div>
                )}
                
                <form onSubmit={this.handleSubmit}>
      
                    <div className="form-group">
                        <label for="comment">Add Comment:</label>
                        <input type="text" className="form-control" id="comment"onChange={this.handleChange} placeholder="comment"/>
                    </div>
                    
                    <input type="submit" value="Submit" />
                </form>
        </div>
        </div> );
    }
}
 
export default Play;