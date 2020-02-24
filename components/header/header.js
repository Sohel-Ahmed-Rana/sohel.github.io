import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                {/*generated code*/}
                <header id="home">
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">I am
                            {resumeData.name}. </h1>
                            <h3>I am a {resumeData.role}.{resumeData.roleDescription}</h3>
                            <hr/>
                        </div>

                    </div>
      </header>
            </React.Fragment>
        );
    }
}
