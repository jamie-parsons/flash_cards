import React from 'react';
import CardForm from './CardForm';

class FlashCardApp extends React.Component {
  state = { cards: [], id: 0 }

addFlashCardItem(front, back) {
  let {cards, id} = this.state;
  let nextId = id + 1;
  let card = {front, back, id:nextId};
  this.setState({ cards: [...cards, card], id: nextId})
}

render() {
  return(
    <div> <CardForm /> </div>
  )

}
  toggleShow = () => {
    let show = 'front'
    if (this.state.show === 'front')
      show = 'back'
    this.setState({ show })
  }

 front = () => {
    return (
      <div>
        This is the front of the card
      </div>
    )
  }

 back = () => {
    return (
      <div>
        This is the back of the card
      </div>
    )
  }

 render() {
    let { show, something } = this.state;
    return (
      <div>
      <CardForm />
        { show === 'front' ?
          this.front() : this.back()
        }
        { something ?
          <div>
            This is Something
          </div> :
          null
        }
        <button
          onClick={this.toggleShow}
        >
          Show { show === 'front' ? 'Back' : 'Front' }
        </button>
      </div>
    )
  }
}

export default FlashCardApp;