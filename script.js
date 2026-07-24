const getSumBtn = document.createElement("button");
const priceItem = document.querySelectorAll('.price');
const table  = document.querySelector('table');
const 
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let sum =0;
	priceItem.forEach((p)=>{
    let money = Number(p.textContent);
		sum+=money;
	})
	let newRow = document.createElement('tr');
	let newRowData = document.createElement('td');
    newRowData.setAttribute('class','prices');
	newRowData.textContent = sum;
	newRow.appendChild(newRowData);
    console.log(newRow)
	table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

