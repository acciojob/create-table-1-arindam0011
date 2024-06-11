function insert_Row() {
	let table= document.getElementById("sampleTable");
    //Write your code here
  let row= document.createElement("tr");
	row.innerHTML=`
					<td>New cell1</td>
					<td>New cell2</td>
					`;
	table.prepend(row);
  
}
