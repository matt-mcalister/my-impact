import React from "react"
import EventSummaryLarge from "./EventSummaryLarge"

const statesArr = [
  {code: "all", name: "All"},
  {code: "AL", name: "Alabama"},
  {code: "AK", name: "Alaska"},
  {code: "AZ", name: "Arizona"},
  {code: "AR", name: "Arkansas"},
  {code: "CA", name: "California"},
  {code: "CO", name: "Colorado"},
  {code: "CT", name: "Connecticut"},
  {code: "DE", name: "Delaware"},
  {code: "DC", name: "District Of Columbia"},
  {code: "FL", name: "Florida"},
  {code: "GA", name: "Georgia"},
  {code: "HI", name: "Hawaii"},
  {code: "ID", name: "Idaho"},
  {code: "IL", name: "Illinois"},
  {code: "IN", name: "Indiana"},
  {code: "IA", name: "Iowa"},
  {code: "KS", name: "Kansas"},
  {code: "KY", name: "Kentucky"},
  {code: "LA", name: "Louisiana"},
  {code: "ME", name: "Maine"},
  {code: "MD", name: "Maryland"},
  {code: "MA", name: "Massachusetts"},
  {code: "MI", name: "Michigan"},
  {code: "MN", name: "Minnesota"},
  {code: "MS", name: "Mississippi"},
  {code: "MO", name: "Missouri"},
  {code: "MT", name: "Montana"},
  {code: "NE", name: "Nebraska"},
  {code: "NV", name: "Nevada"},
  {code: "NH", name: "New Hampshire"},
  {code: "NJ", name: "New Jersey"},
  {code: "NM", name: "New Mexico"},
  {code: "NY", name: "New York"},
  {code: "NC", name: "North Carolina"},
  {code: "ND", name: "North Dakota"},
  {code: "OH", name: "Ohio"},
  {code: "OK", name: "Oklahoma"},
  {code: "OR", name: "Oregon"},
  {code: "PW", name: "Palau"},
  {code: "PA", name: "Pennsylvania"},
  {code: "PR", name: "Puerto Rico"},
  {code: "RI", name: "Rhode Island"},
  {code: "SC", name: "South Carolina"},
  {code: "SD", name: "South Dakota"},
  {code: "TN", name: "Tennessee"},
  {code: "TX", name: "Texas"},
  {code: "UT", name: "Utah"},
  {code: "VT", name: "Vermont"},
  {code: "VA", name: "Virginia"},
  {code: "WA", name: "Washington"},
  {code: "WV", name: "West Virginia"},
  {code: "WI", name: "Wisconsin"},
  {code: "WY", name: "Wyoming"},
]

class EventsAllContainer extends React.Component {

  state = {
    filterBy: "all",
  }

  handleChange = (e) => {
    this.setState({
      filterBy: e.target.value,
    })
  }

  filteredAndSorted(){
    const sortByDate = (a,b) => {
      const aDate = new Date(a.dateStart)
      const bDate = new Date(b.dateStart)
      if (bDate > aDate) return 1;
      if (bDate < aDate) return -1;
      return 0;
    }
    if (this.state.filterBy === "all") {
      return this.props.events.sort(sortByDate)
    }
    return this.props.events.filter(s => s.location.region === this.state.filterBy).sort(sortByDate)
  }

  render(){
    const events = this.filteredAndSorted()
    return (
      <div className="home-wrapper logs-white-round events-wrapper">
        <div id="all-events-headers">
          <h1>Get Involved</h1>
          <select onChange={this.handleChange}>
            {statesArr.map(s => <option value={s.code} selected={this.state.filterBy === s.code}>{s.name}</option>)}
          </select>
        </div>
        <div id="events-all-container">
          {  events.length === 0 ?
            "No events matching that filter." :
            this.filteredAndSorted().map(e => <EventSummaryLarge key={e.id} {...e} />)}
        </div>
      </div>
    )
  }
}



export default EventsAllContainer
