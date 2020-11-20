import './App.css'
import React from 'react'
import ReviewsDisplay from './ReviewsDisplay'
import FilterControls from './FilterControls'



//const reviewsAPI = 'http://localhost:3001/reviews'

class App extends React.Component {
  constructor (props){
    super(props)
    this.state ={
      reviews: [],
      locations: [],
    }
  }

  async componentDidMount(){
    await this.getData();
  }

  async getData(){

  }



  render(){
    return (
      <div className="App-header">
        <button onClick={this.addReview}>Add a New Review</button>
        <span>{this.state.addUserResponse.message}</span>
        <FilterControls locations={this.state.locations} onLocationChange={this.locationChange}/>
        <ReviewsDisplay reviewList={this.state.reviews}/>
      </div>
     
    );
  }
  }


export default App;
