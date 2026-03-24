import { multipleClassList } from "./class-list";

export function bootstrapRows(classes) {
	const rowContainer = document.createElement('div');
	rowContainer.classList.add('row')
	multipleClassList(classes, (result) => {
		rowContainer.classList.add(...result)
	})
	return rowContainer;
}

export function bootstrapColumns(classes) {
	const rowContainer = document.createElement('div');
	rowContainer.classList.add('col')
	multipleClassList(classes, (result) => {
		rowContainer.classList.add(...result)
	})
	return rowContainer;
}

// export * from '.';