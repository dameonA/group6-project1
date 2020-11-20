import React from 'react'



function ReviewDisplay(props){
    let reviewList = props.reviewList.map(each => (
        <tr key={`${each.reviewID}`}>
        <td>
          {each.name}
        </td>
        <td>
          {each.reviewID}
        </td>
        <td>
          {each.unitName}
        </td>
        <td>
          {each.location}
        </td>
        </tr>
    ))

    return(
      <table key="reviewList Table">
        <thead style={{fontWeight: "bold"}}>
          <tr key="reviewList Header">
            <td>
              Name
            </td>
            <td>
              Review ID
            </td>
            <td>
              Unit Name
            </td>
            <td>
              Location
            </td>
          </tr>
        </thead>
        <tbody>
          {reviewList}
        </tbody>
      </table>
    )
}
 
export default ReviewDisplay