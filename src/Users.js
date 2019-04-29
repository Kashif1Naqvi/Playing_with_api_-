import React,{Component} from 'react';
import User from './User'
class Users extends Component{
    render(){
        console.log(this.props.users)
    const userList = this.props.users.map((user)=><User user={user} key={user.id} />)
        return(
            <div id="container">
                <h1>Welcome to play with Objects in React</h1>
                <fieldset>
                    <legend >
                        {userList}
                    </legend>
                </fieldset>
            </div>
        )
    }
}
export default Users