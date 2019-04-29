import React,{Component} from 'react'

class ContactList extends Component{
    render(){
        const contact = this.props.contact
        return(
            <div>
                <p>ContactId:{contact.id}</p>
                <p>type:{contact.type}</p>
                <p>Number:{contact.number}</p>
            </div>
        )
    }
}
export default ContactList