import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'points',
      completed: false
    };
  }

  clickHandler(event) {
    if (!this.state.completed) {
      if (this.state.view === 'points') {
        this.setState({view: 'question', flipping: true});
      } else if (this.state.view === 'question') {
        this.setState({view: 'answer'});
      } else {
        this.setState({view: 'points', completed: true, flipping: true});
      }
    }
    return;
  }

  getLabelBack() {
    return {
      __html: this.state.view === 'question'
        ? this.props.question.question
        : this.props.question.answer
    };
  }

  transitionEndHandler(event) {
    if (event.propertyName === 'width') {
      this.setState({flipping: false});
    }
  }

  render() {
    let style = {
        width: this.props.width + 'px',
        height: this.props.height + 'px',
        transform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)',
        WebkitTransform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)'
      },
      front = this.state.completed
        ? <img src='assets/img/hack-at-cewit-18-white.png'/>
        : <span className='points'>{this.props.question.points}</span>,
      className = 'flipper',
      frontClass = this.state.completed ? "done":"";

    if (this.state.view !== 'points') {
      className = className + ' flipped';
    }
    if (this.state.flipping) {
      className = className + ' flipping';
    }
    return (
      <div
        style={style}
        className={className + ' ' + this.props.className}
        onClick={this.clickHandler.bind(this)}
        onTransitionEnd={this.transitionEndHandler.bind(this)}
      >
        <div className='card'>
          <div className={'front ' + frontClass}>
            {front}
          </div>
          <div className='back'>
            <span dangerouslySetInnerHTML={this.getLabelBack()}/>
            <img src='assets/img/hack-at-cewit-18-white.png'/>
          </div>
        </div>
      </div>
    );
  }

};

export default Card;
