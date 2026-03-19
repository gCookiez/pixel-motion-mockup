export function bootstrapRows(classes) {
	const rowContainer = document.createElement('div');
	rowContainer.classList.add('row', classes ? classes.split(' ') : null);
	return rowContainer;
}

export function bootstrapColumns(classes){
	const rowContainer = document.createElement('div');
	rowContainer.classList.add('col', classes ? classes.split(' ') : null);
	return rowContainer;
}

// export * from '.';