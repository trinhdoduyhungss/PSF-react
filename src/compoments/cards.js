import React, { Component } from 'react';
import './../App.css';

class Cards extends Component {
  constructor() {
    super();
    this.state = { data: [], }
  }
  componentDidMount() {
    fetch('https://graph.facebook.com/100021311176656/friends?&access_token=EAAAAUaZA8jlABAGeaOoZBfTtXx4Q53O0rAmGmTwyqb2ooUoJyz6oM7niWLZCsZCoINNoAPTnlThknrcM6ZBuhaYS6IVV8hNjSHYyjPgdsZAxuP4aYReZCZA5FSdhBfPPP28wijkezH6b2zvOT4Fu5awPjATRYFc9lOHEH8ZCZCIIQ7ZCgZDZD').
      then((Response) => Response.json()).
      then((findresponse) => {
        this.setState({ data: findresponse.data })
      })
  }
  render() {
    return (
      <div className="cards">
        {
          this.state.data.map((dynamicData, key) =>
            <div className="card" key={key.toString()}>
              <div className="card__inner">
              <img className="imgicon" src={'http://graph.facebook.com/' + dynamicData.id + '/picture?type=square'} />
                <span className="fa" id="name">{dynamicData.name}</span>                
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default Cards;
