import React, {Component} from 'react';

export class Fact extends Component {
    
    render() {
        console.log("hej4")
        const facts = this.props.fact;
        console.log(facts[0].text);

        const factitem = facts.map((fact) =>
            <p> {fact.text} </p>
        )
            return (
                <div>
                    {factitem}
                </div>
            )
    }
}


export default Fact;