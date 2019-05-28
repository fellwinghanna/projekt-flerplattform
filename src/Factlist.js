import React, {Component} from 'react';
import Fact from './Fact';

class Factlist extends Component {
    render() {

        const factlist = this.props.factlist;
        console.log(factlist)

        if(factlist.type === "single"){
            this.setJoke();
            return <Fact fact={factlist.joke} />

        }else {

            const twoType = factlist.setup + " " + factlist.delivery
            this.setJoke();
            return <Fact fact={twoType} />
        }

    }

    setJoke(){
        const data = this.props.factlist.joke; 
        //localStorage.clear();
        localStorage.setItem("joke", data);
    }
}

export default Factlist;