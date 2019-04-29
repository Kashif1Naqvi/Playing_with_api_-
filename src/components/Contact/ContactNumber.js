import React,{Component} from 'react'
import ContactList from './ContactList'
class ContactNumber extends Component{
    render(){
        const contact = this.props.contact.map((contact)=><ContactList contact={contact} key={contact.id}  />)
        return(
            <div>
                {contact}
            </div>
        )
}
}
export default ContactNumber;