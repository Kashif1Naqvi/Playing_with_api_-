import React,{Component} from 'react'
import Addresses from './Addresses'
import ContactNumber from './ContactNumber'
import Languages from './Languages'
class User extends Component{
    render(){
        const user = this.props.user
        return(
            <div className="text-muted" key={user.id} >
                <li>ID:{user.id}</li><hr/>
                <p>FirstName:{user.firstName}</p>
                <p>LastName:{user.lastName}</p>
                {/* <p>Active:{console.log("codeis",(user.active))}</p> */}
                <p>Gender:{user.gender}</p>
                <p>Joining Date:{user.joiningdate}</p>
                <p>loggedInAt :{user.loggedInAt}</p>
                <p>occupation :{user.occupation}</p>
                <Addresses address={user.addresses}  />
                <ContactNumber contact={user.contactNumbers} />
                <Languages     language={user.languages} />
            </div>
        )
    }
}
export default User