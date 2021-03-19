import React, {useState} from 'react';
import './App.css';
import FlightIcon from './assets/flight-icon.png';




function FlightBooking() {
	// your code here
	const [source, setSource] = useState('');
	const [destination, setDestination] = useState('');
	const [when, setWhen] = useState('');
	const [flightList, setFlightList] = useState([]);
	const [showBookNowForm, setShowBookNowForm] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [showBookingConfirmed, setShowBookingConfirmed] = useState(false);

	const searchFlight = () => {
		const flightDetails = [{
			name: 'Surya Airline, India',
			price: '₹ 4735',
			journey: source + '-' + destination,
			time: '135 mins',
			date: when,
			id: Math.floor(Math.random() * 100)
		}];

		setFlightList(flightDetails);
	}

	const showBookNow = () => {
		setName('');
		setEmail('');
		setShowBookingConfirmed(false);
		setShowBookNowForm(true);
	}

	return (
		<div className="container">
			<h1 style={{ textAlign: 'center' }}>Flight Booking</h1>
			<div className="search-bar">
				<label>Source</label>
				<input type="text" data-testid="source" placeholder="Source" value={source} onChange={e => setSource(e.target.value)} />
				<label>Destination</label>
				<input type="text" data-testid="destination" placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} />
				<label>When</label>
				<input type="text" data-testid="when" placeholder="When" value={when} onChange={e => setWhen(e.target.value)} />
				<button type="button" onClick={() => searchFlight()}>Search Flight</button>
			</div>
			<div className="search-list">			
				{ 
					flightList.map((details) => {
						return (
							<div className="search-flight" key={details.id}>
								<img className="icon" src={FlightIcon} />
								<div className="details">
									<h1>{details.date}</h1>
									<p data-testid="company">{details.name}</p> 
								</div>
								<div className="duration">
									<h1>{details.time}</h1>
									<p>{details.journey}</p>
								</div>
								<div className="price">
									<h1 data-testid="price">{details.price}</h1>
									<button type="button" data-testid="booknow" onClick={() => showBookNow()}>Book Now</button>
								</div>								
							</div>
						)
					})
				}
			</div>
			{
				showBookNowForm &&
					<div className="booknow-frm">
						<div className="container">
							{
								showBookingConfirmed ? 
									<React.Fragment>
										<h3 data-testid="result">Booking Confirmed!</h3>
										<button type="button" data-testid="cancel" onClick={() => setShowBookNowForm(false)}>Close</button>
									</React.Fragment>
								:
									<React.Fragment>
										<input type="text" data-testid="name" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
										<input type="email" data-testid="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} />
										<button type="button" data-testid="confirm_booking" onClick={() => setShowBookingConfirmed(true)}>Confirm Booking</button>
										<button type="button" data-testid="cancel" onClick={() => setShowBookNowForm(false)}>Cancel</button>
									</React.Fragment>
							}
						</div>
					</div>
			}
		</div>
	);
}

export default FlightBooking;
