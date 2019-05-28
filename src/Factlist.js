import React, {Component} from 'react';
import Fact from './Fact';

class Factlist extends Component {
    render() {
        console.log("hej3")

        const FactData = [];
        const factlist = this.props.factlist;
        console.log(factlist)

        if(factlist.type === "single"){
            FactData.push(
                {
                    "id": factlist.id,
                    "text": factlist.joke
                })

                return <Fact fact={FactData} />
        }else {
            FactData.push(
                {
                    "id": factlist.id,
                    "text": factlist.setup + " " + factlist.delivery
                })

                return <Fact fact={FactData} />
        }

    }
}

export default Factlist;