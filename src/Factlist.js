import React, {Component} from 'react';
import Fact from './Fact';

class Factlist extends Component {
    render() {
        console.log("hej3")

        const FactData = [];
        const factlist = this.props.factlist;
        console.log(factlist)

        for(let i=0; i < factlist.length; i++){

            FactData.push(
            {
                "id": factlist[i].id,
                "text": factlist[i].text
            },
            )

        }

        return <Fact fact={FactData} />

    }
}

export default Factlist;
