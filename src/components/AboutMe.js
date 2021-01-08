import React from 'react';

class AboutMe extends React.Component {

    // constructor() {
    //     super();
    //     this.state = "hello";
    // }

    render() {
        return(
            <div>
                {this.state}
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}
export default AboutMe;