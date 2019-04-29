import React,{Component} from 'react'

class LanguageList extends Component{
    render(){
        const language = this.props.language
        return(
            <div>
                <p className="form-control" >LanguageID:{language.id}</p>
                <p className="form-control" >LanguageName:{language.name}</p>
                <p className="form-control" >Experties</p>
                <p className="form-control" >Read:{language.experties.read}</p>
                <p className="form-control" >Speak:{language.experties.speak}</p>
                <p className="form-control" >Understand:{language.experties.understand}</p>
                <p className="form-control" >Write:{language.experties.write}</p>
            </div>
        )
    }
}
export default LanguageList