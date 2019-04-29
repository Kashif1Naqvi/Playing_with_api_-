import React,{Component} from 'react'

class LanguageList extends Component{
    render(){
        const language = this.props.language
        return(
            <div>
                <p>LanguageID:{language.id}</p>
                <p>LanguageName:{language.name}</p>
                <p>Experties</p>
                <p>Read:{language.experties.read}</p>
                <p>Speak:{language.experties.speak}</p>
                <p>Understand:{language.experties.understand}</p>
                <p>Write:{language.experties.write}</p>
            </div>
        )
    }
}
export default LanguageList