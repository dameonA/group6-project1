import React from 'react'

function ReviewsDisplay(props){
   let reviewList = props.reviewList.map(each => (
    <tr key={`${each.location}`}>
    <td>
      {each.person_id}
    </td>
    <td>
      {each.reviewStars}
    </td>
    <td>
      {each.pros}
    </td>
    <td>
      {each.cons}
    </td>
    <td>
      {each.unit_id}
    </td>    
    </tr>
   ))
   return(
       <table key="reviewList Table">
           <thead> style={{fontWeight: "bold"}}
           <tr key="reviewList Header">
               <td>
                   Name
               </td>
               <td>
                   Number of Star Reviews
               </td>
               <td>
                   Positive Reviews
               </td>
               <td>
                   Negative Reviews
               </td>
               <td>
                   Positive Reviews
               </td>
               <td>
                   Unit Number
               </td>
           </tr>
           </thead>

       </table>

   )
  
}

export default ReviewsDisplay