import React, {Component} from 'react';
import './index.css';
import Header from './Header';
import Factlist from './Factlist';

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            factlist: [],
        }
    }

    componentDidMount() {
        let url = 'https://cat-fact.herokuapp.com/facts';
        fetch(url
            /* , {
           credentials: 'include',
           headers: {
            "access-control-allow-origin" : "*",
        }}*/)
        .then(result => {
            if(result.ok) {
                return result.json()
            } else {
                throw Error(`Request rejected with status ${result.status}`);
            }
        })
        .then((factlist) => {
            this.setState({
                factlist: factlist,
            })
        })
        .catch(error => {
            console.log(error);
        });
    }

    /*
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

*/
// state? hämta API här
// från api lägg till id och text

    render(){
        console.log("hej1")
        const facts = this.state.factlist;
        return (
            <div>
                <Header/>
                <Factlist factlist={facts}/>
            </div>
            // i Factlist lägg till "factlist={this.state.factlist}"
        )
    }
}
export default App;