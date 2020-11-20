import React from 'react';
import './App.css';
import ReviewDisplay from './ReviewDisplay';
import StarRating from './StarRating';
import { FaStar } from 'react-icons/fa';
//import ReviewForm from './ReviewForm'
//import from './Reviews';
//import Card from '../Card/Card';
//import Footer from '../Footer/Footer';

const reviewAPI = 'http://localhost:3001/reviews'
const addReviewAPI = 'https://localhost:30001/addReview'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      reviews: [],
      locations: [],
      allReviews: [],
      addingReview: false,
    
    }
  }

  async componentDidMount() {
    await this.getData();
  }

  async getData() {
    const review = await fetch(reviewAPI)

    const json = review.json()
    let locations = []
    await json.forEach(element => {
      if(!location.includes(element.location)){
        locations.push(element.location);
      }
    });
    this.setState({allReviews: json, reviews: json, locations: locations.sort()})
  }

  locationChange= (e) => {
    let location = e.target.value
    if(locations === "Display ALL"){
      this.setState({reviews: this.state.allReviews})
    }else{
      let filteredReviews = this.state.allReviews.filter((reviews) => 
      reviews.location ===location)
    }
  }
    //  addReview = () => {
    //    this.setState({addingReview: true,
    //   addReviewResponse: ''})
    //  }
  // submitAddReview = (e) => {
  //   e.preventDefault();
  //   let[name, unitName, location, reviewName] = Array.from(e.target.elements).slice(0, 4).map(element.value);

  //   let newReviewID = this.state.allReviews[this.state.allReviews.length - 1].reviewID +1;
    
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       name: name,
//       unitName: unitName,
//       location: location,
//      reviewName: reviewName,
//       reviewID: newReviewID,
//     })
// };
// fetch(addUserAPI, requestOptions)
//     .then(response => response.json())
//     .then(data => this.setState({addReviewResponse: data, addingReview: false}))
//     .then(() => this.getData())
// }

  render(){ 
  return (
    <div className="App-header">
      {this.state.addingReview ?
      <ReviewForm submitForm = {this.submitAddReview}/> :
        <div>
          <button onClick={this.addReview}>Add a New Review</button>
          <span>{this.state.addReviewResponse.message}</span>
          <ReviewDisplay reviewList={this.state.reviews}/>
          </div>
        }
     <div>
     {[ ...Array(5)].map((star, i) => {
       const ratingValue = i +1;
      
      <label>
          <input type='radio' name ='rating' value={ratingValue}
          onClick={() => setRating(ratingValue)}
          onMouseEnter={() => setHover(ratingValue)}
          onMouseLeave={() => setHover(null)}
          />
        
        <FaStar
        className='star'
        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
        size={100}        
        />
        </label>        
        })}
        </div>
    </div>
  }


export default App;
