import React, {Component} from 'react';
import './index.css';
import Header from './Header';
import Factlist from './Factlist';
import Form from './Form';

class App extends Component{

    state = {
        factlist: [
            {
            text: "Cats can't taste sweetness.",
            id: "58e0086f0aac31001185ed02"
        },
        {
            text: "Koko the gorilla got a pet cat for her birthday in 1985 after she requested to have one as a birthday present.",
            id: "5b1b40d4841d9700146158d8"
        }
        ]
    };
// state? hämta API här
// från api lägg till id och text

    render(){
        console.log("hej1")
        const facts = this.state.factlist;
        return (
            <div>
                <Header/>
                <Form/>
                <Factlist factlist={facts}/>
            </div>
            // i Factlist lägg till "factlist={this.state.factlist}"
        )
    }
}
export default App;
