import React, { Component } from 'react';
import './Calendar.less';

const WEEK_NAMES = [ '日', '一', '二', '三', '四', '五', '六' ];
const LINES = [ 1, 2, 3, 4, 5, 6 ];
const MONTH_DAYS = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

export class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'month': 0,
			'year': 0,
			'currentDate': new Date(),
			'lines': [],
		};
	}

	componentDidMount() {
		const { currentDate } = this.state;

		this.setCurrentYearMonth(currentDate);
	}

	setCurrentYearMonth = (date) => {
		this.setState({
			'month': date.getMonth(),
			'year': date.getFullYear(),
		});
	}

	getWeeksByFirstDay = (year, month) => {
		return this.getDateByYearMonth(year, month).getDay();
	}

	getDayText = (line, weekIndex, weekDay, monthDays) => {
		const number = line * 7 + weekIndex - weekDay + 1;
		return number <= 0 || number > monthDays ? <span>&nbsp;</span> : number;
	}

	formatNumber = (num) => {
		const _num = num + 1;
		return _num < 10 ? `0${ _num }` : `${ _num }`;
	}

	getDateByYearMonth = (year, month, day = 1) => {
		const date = new Date();
		date.setFullYear(year);
		date.setMonth(month, day);
		return date;
	}

	isToday = (line, weekIndex, weekDay, monthDays) => {
		const { year, month } = this.state;
		const day = this.getDayText(line, weekIndex, weekDay, monthDays);
		const date = new Date();
		const todayYear = date.getFullYear();
		const todayMonth = date.getMonth();
		const todayDay = date.getDate();

		return year === todayYear && month === todayMonth && day === todayDay;
	}

	monthChange = (monthChanged) => {
		const { month, year } = this.state;
		const monthAfter = month + monthChanged;
		const date = this.getDateByYearMonth(year, monthAfter);
		this.setCurrentYearMonth(date);
	}

	render() {
		const { year, month } = this.state;

		const monthDays = MONTH_DAYS[month];
		const weekDay = this.getWeeksByFirstDay(year, month);

		return (<div>
			<div>
				<span>当前是 { this.state.month + 1 } 月</span>
				<button onClick={ () => this.setCurrentYearMonth(new Date()) }>Today</button>
			</div>

			<table className="table">
				<caption>
					<div className="caption-header">
						<span className="arrow" onClick={ () => this.monthChange(-1) }>&#60;</span>
						<span>{ year } - { this.formatNumber(month) }</span>
						<span className="arrow" onClick={ () => this.monthChange(1) }>&gt;</span>
					</div>
				</caption>
				<thead>
				<tr>
					{
						WEEK_NAMES.map((week, key) => {
							return <td key={ key }>{ week }</td>;
						})
					}
				</tr>
				</thead>
				<tbody>
				{
					LINES.map((l, key) => {
						return <tr key={ key }>
							{
								WEEK_NAMES.map((week, index) => {
									const fontColor = this.isToday(key, index, weekDay, monthDays) ? 'red' : '#000';
									return <td key={ index } style={ { 'color': fontColor } }>
										{ this.getDayText(key, index, weekDay, monthDays) }
									</td>;
								})
							}
						</tr>;
					})
				}
				</tbody>
			</table>
		</div>);
	}
}
