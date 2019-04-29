import React,{Component} from 'react'
import LanguageList from './LanguageList'
class Languages extends Component{
    render(){
        const language = this.props.language.map((language)=><LanguageList language={language} key={language.id} />)
        return(
            <div>
                {language}        
            </div>
        )
    }
}
export default Languages