import { Component, createContext } from 'react';

export const InfContext = createContext({});

export class InfContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      informations: {
        head: ['categoria 1'],
        header: ['titulo 1'],
        body: ['body 1'],
        footer: ['footer 1'],
      },
    };
  }

  getInformation() {}

  render() {
    return (
      <InfContext.Provider value={this.state.informations}>
        {this.props.children}
      </InfContext.Provider>
    );
  }
}
