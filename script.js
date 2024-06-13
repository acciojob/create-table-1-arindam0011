function insert_Row() {
	let tableBody = document.getElementById("sampleTable").tBodies[0];
	let row = document.createElement("tr");
	row.innerHTML = `
		<td>New Cell1</td>
		<td>New Cell2</td>
	`;
	tableBody.prepend(row);
  
}
