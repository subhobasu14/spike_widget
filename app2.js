

const element = React.createElement;

export class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }

  render() {
    return element('input', {
      onChange: e => this.setState({ name: e.target.value }),
      value: this.state.name,
      type: 'text'
    });
  }
}


ReactDOM.render(element(InputField), document.getElementById('root'));