function Hello(props) {
  const [name, setName] = React.useState(props.name);
  return React.createElement(
    'button',
    { onClick: () => this.setState({ liked: true }) },
    'Like'
  );

}

ReactDOM.render(
  <Hello name='World' />,
  document.getElementById('root'),
);