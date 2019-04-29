import React,{Component} from 'react'

class AddressList extends Component{
    render(){
        const address = this.props.address
        return(
            <div>
                <p className="form-control" >AddressId:{address.id}</p>
                <p className="form-control" >Type:{address.type}</p>
                <p className="form-control" >Address:{address.address}</p>
                <p className="form-control" >City:{address.city}</p>
                <p className="form-control" >Country:{address.country}</p>
                <p className="form-control" >State:{address.state}</p>
            </div>
        )
    }
}
export default AddressList