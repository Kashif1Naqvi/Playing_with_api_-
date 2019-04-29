import React,{Component} from 'react';
import User from './User'
class Users extends Component{
    render(){
        console.log(this.props.users)
    const userList = this.props.users.map((user)=><User user={user} key={user.id} />)
        return(
            <div>
                {userList}
            </div>
        )
    }
}
export default Users