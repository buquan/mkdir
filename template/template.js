exports.page = function ({ component }) {
    if (component) {
        return `
            import * as React from 'react';

            export class ${component.name} extends React.Component{
                constructor(props){
                    super(props);

                    this.state = {}
                }

                componentDidMount(){

                }

                render() {
                    return (
                        <div></div>
                    )
                }
            }
        `
    }
    return ``;
}