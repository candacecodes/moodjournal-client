import React, { Component } from "react";
import axios from 'axios'

export default class Quotes extends Component {
	
	state = {
		quote: '',
		author: ''
	}

	componentDidMount() {
		this.getQuote()
	}

	getQuote() {
		let url = "https://type.fit/api/quotes"

		axios.get(url)
		.then(res => {
			let data = res.data
			let quoteNum = Math.floor(Math.random() * data.length)
			let randomQuote = data[quoteNum] 

			this.setState({
				quote: randomQuote['text'],
				author: randomQuote['author']
			})
		})
	}

	getNewQuote = () => {
		this.getQuote()
	}

	render() {
		const { quote, author } = this.state
		return (
			<div id="quote-box">
				<blockquote>
					{/* <div id="quote-box"> */}
						<div id='text'><p>{quote}</p></div>
						<cite><div id='author'><h5>{author}</h5></div></cite>
					{/* </div> */}
				</blockquote>
			</div>
		)
	}
}
