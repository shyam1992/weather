import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
	return (
			<div>
				<Sparklines data={ props.data } height={80} width={180}>
  					  <SparklinesLine color={ props.color }/>
  					  <SparklinesReferenceLine type="avg" />
					</Sparklines>
					<div>
						Avg: {average(props.data)} {props.unit}
					</div>
			</div>
		);
}

function average(data){
	const sum = data.reduce((a,b) => a + b,0);
	return (sum/data.length).toFixed(2);
}