import React,{Component} from 'react'
import AddressList from './AddressList'
class Addresses extends Component{
    render(){
        const addressList = this.props.address.map((address)=><AddressList address={address} key={address.id} />)
        return(
            <div>
                {addressList}            
            </div>
        )
    }
}
export default Addresses;