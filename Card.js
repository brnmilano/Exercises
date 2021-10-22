class Card extends React.Component {
  function getName(timeframe) {
    switch (timeframe) {
      case 'daily':
        return 'Yesterday'

      case 'weekly':
        return 'Last Week'

      default:
        return 'Last Month'
    }
  }

  render() {
    const title = this.props.title
    const info = this.props.info
    const timeframe = this.props.timeframe

    const {title, info, timeframe} = this.props;
    return (
      <div className="card">
        <div>
          <p>${title}</p>
        </div>
        <div>
          <h1>${info.current}</h1>
        </div>
        <div>
          <p>${getName(timeframe)} - ${info.previous}</p>
        </div>
      </div>
    );
  }
}

export default Card

// Exemplo de uso: <ShoppingList name="Mark" />