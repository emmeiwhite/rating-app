import React,{Component} from 'react';

import Smileys from './smileys';
import Button from './button';

export default class Questions extends Component{
    constructor(props){
        super(props);

        this.state = {
            questions:[],
            // smileyResponses:["1.Most Disliked","2.Dislike","3.Like","4.Brillient Response","5.Outstanding Response"], as of now I see no use of this state
            catalist:false, //trying to reRender the state by toggling between this value
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

    showSmileyMessage = (selectedQuestion,btnSelected)=>{
        console.log(selectedQuestion,btnSelected);
        switch(selectedQuestion){
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                switch(btnSelected){
                    case 1:
                        document.getElementById(selectedQuestion).innerHTML+="1.Most Disliked";
                        let catalistDemo1= this.state.catalist;
                        this.setState({
                            ...this.state,
                            catalist:!catalistDemo1
                        })
                    break;

                    case 2:
                        document.getElementById(selectedQuestion).innerHTML+="2.Dislike";
                        let catalistDemo2 = this.state.catalist;
                        this.setState({
                            ...this.state,
                            catalist:!catalistDemo2
                        })
                    break;

                    case 3:
                        document.getElementById(selectedQuestion).innerHTML+="3.Like";
                        let catalistDemo3 = this.state.catalist;
                        this.setState({
                            ...this.state,
                            catalist:!catalistDemo3
                        })
                    break;

                    case 4:
                        document.getElementById(selectedQuestion).innerHTML+="4.Brillient Response";
                        let catalistDemo4 = this.state.catalist;
                        this.setState({
                            ...this.state,
                            catalist:!catalistDemo4
                        })
                    break;

                    case 5:
                        document.getElementById(selectedQuestion).innerHTML+="5.Outstanding Response";
                        let catalistDemo5 = this.state.catalist;
                        this.setState({
                            ...this.state,
                            catalist:!catalistDemo5
                        })
                    break;
                }
            break;

           
            default:
                console.log("The Default Case");


        }

    }

    render(){
        return(
                  this.state.questions.map((question,index)=>{
                        return (
                        <div className="row" key={question.id} id={index}>
                                <div  className="questions" className="col-md-8">
                                    <p>{question.question}</p>
                                    <Button clickEvent={this.showSmileyMessage.bind(this,(index),1)}>{this.state.buttonIds[0]}</Button>
                                    <Button clickEvent={this.showSmileyMessage.bind(this,(index),2)}>{this.state.buttonIds[1]}</Button>
                                    <Button clickEvent={this.showSmileyMessage.bind(this,(index),3)}>{this.state.buttonIds[2]}</Button>
                                    <Button clickEvent={this.showSmileyMessage.bind(this,(index),4)}>{this.state.buttonIds[3]}</Button>
                                    <Button clickEvent={this.showSmileyMessage.bind(this,(index),5)}>{this.state.buttonIds[4]}</Button>   
                                </div>

                                <div className="col-md-4"  >
                                    {/* <Smileys /> */}
                                </div>
                        </div>
                       );
                    })
        )
    }
}