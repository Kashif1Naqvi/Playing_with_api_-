import React,{Component} from 'react'

class ContactNumber extends Component{
    render(){
        const contact = this.props.contact
        console.log(contact)
        return(
            <div>
                {/* <p>{contact.id}</p>
                <p>type:{contact.type}</p>
                <p>Number:{contact.number}</p> */}
            </div>
        )
}
}
export default ContactNumber;