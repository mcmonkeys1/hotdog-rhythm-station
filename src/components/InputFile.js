import React from 'react';
import { InputLabel, Typography } from '@material-ui/core';


export default function InputFile ({onChangeFile}) {
	return (
		<div>
			<input 
				type="file" 
				id="fileinput" 
				onChange={onChangeFile}
				style={{ display: 'none' }} 
			/>
			<InputLabel htmlFor="fileinput">
				<div style={{borderStyle: "dashed", padding: "5%"}}>
					<Typography variant="h4">Drop or select a keyfile here.</Typography>
				</div>
			</InputLabel>
		</div>
	)
}