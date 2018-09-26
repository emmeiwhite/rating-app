import React,{Component} from 'react';

import Smileys from './smileys';

export default class Questions extends Component{
    constructor(props){
        super(props);

        this.state = {
            questions:[]
        }
    }

    componentDidMount(){
        console.log("ComponentDidMount");
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

    render(){
        // const promise = fetch('http://www.json-generator.com/api/json/get/cpFaSXSCbm?indent=2');

        // promise.then((result)=>{
        //     return result.json();
        // }).then((data)=>{
        //     this.setState({
        //         questions:data
        //     })
        // }).catch((error)=>{
        //     console.log(error);
        // })

        // console.log(this.state.questions);
        console.log("Render Method")
        return(
                  this.state.questions.map((question,index)=>{
                        return (
                        <div className="row">
                                <div key={question.id} className="questions" className="col-md-8">
                                    <p>{question.question}</p>
                                    <button>1</button>
                                    <button>2</button>
                                    <button>3</button>
                                    <button>4</button>
                                    <button>5</button>
                                </div>

                                <div className="col-md-4">
                                    <Smileys key={index}/>
                                </div>
                        </div>
                       );
                    })
        )
    }
}