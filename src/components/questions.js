import React,{Component} from 'react';

import Smileys from './smileys';
import Button from './button';

export default class Questions extends Component{
    constructor(props){
        super(props);

        this.state = {
            questions:[],
            smileyResponses:["1.Greater Dislike","2.Dislike","3.Like","4.Brilient Response","5.Outstanding Response"],
            buttonIds:[1,2,3,4,5]
        }
    }

    componentDidMount(){
        const promise = fetch('http://www.json-generator.com/api/json/get/cpFaSXSCbm?indent=2');

        promise.then((result)=>{
            return result.json();
        }).then((data)=>{
            this.setState({
                questions:data
            })
        }).catch((error)=>{
            console.log(error);
        })
    }

    showSmileyMessage = (selectedQuestion,)=>{
        console.log(selectedQuestion);
    }

    render(){
        return(
                  this.state.questions.map((question,index)=>{
                        return (
                        <div className="row" key={question.id}>
                                <div  className="questions" className="col-md-8">
                                    <p>{question.question}</p>
                                    <Button clickEvent={this.showSmileyMessage.bind(this,index)}>{this.state.buttonIds[0]}</Button>
                                    <Button clickEvent={this.showSmileyMessage.bind(this,index)}>{this.state.buttonIds[1]}</Button>
                                    <Button clickEvent={this.showSmileyMessage.bind(this,index)}>{this.state.buttonIds[2]}</Button>
                                    <Button clickEvent={this.showSmileyMessage.bind(this,index)}>{this.state.buttonIds[3]}</Button>
                                    <Button clickEvent={this.showSmileyMessage.bind(this,index)}>{this.state.buttonIds[4]}</Button>
                                 
                                </div>

                                <div className="col-md-4">
                                    <Smileys />
                                </div>
                        </div>
                       );
                    })
        )
    }
}