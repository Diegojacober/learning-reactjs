import React,{ Component } from "react";

class Post extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
          <div key={this.props.id}> 
            <h3> {this.props.username}</h3>
            <ul>
            {this.props.curtidas >= 1 &&
              <li>Curtidas: {this.props.curtidas}</li>
            }

            {this.props.curtidas <= 1 &&
              <li>Nenhuma curtida</li>
            }
              <li>{this.props.curtidas >=  1 ? "Comentários:" +this.props.comentarios : "Nenhum comentário"}</li>
            </ul>
            <hr/>
          </div>
        )
    }
}

export default Post