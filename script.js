function insert_Row() {
	let table= document.getElementById("sampleTable");
    //Write your code here
  let row= document.createElement("tr");
	row.innerHTML=`
					<td>Row${table.rows.length+1} cell1</td>
					<td>Row${table.rows.length+1} cell2</td>
					`;
	table.appendChild(row);
  
}
