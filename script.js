function insert_Row() {
	let table= document.getElementById("sampleTable");
    //Write your code here
  let row= document.createElement("tr");
	row.innerHTML=`
					<td>New Cell1Row1 cell1</td>
					<td>New Cell2</td>
					`;
	table.prepend(row);
  
}
