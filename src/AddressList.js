import React,{Component} from 'react'

class AddressList extends Component{
    render(){
        const address = this.props.address
        return(
            <div>
                <p>AddressId:{address.id}</p>
                <p>Type:{address.type}</p>
                <p>Address:{address.address}</p>
                <p>City:{address.city}</p>
                <p>Country:{address.country}</p>
                <p>State:{address.state}</p>
            </div>
        )
    }
}
export default AddressList