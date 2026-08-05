const getSumBtn = document.createElement("button");
const priceItem = document.querySelectorAll('.price');
const table  = document.querySelector('table');
// const prices = document.querySelector('.prices');
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let totalPrice =0;
	priceItem.forEach((p)=>{
    let price = Number(p.textContent);
		totalPrice+=price;
	})
	let newRow = document.createElement('tr');
	let newRowData = document.createElement('td');
    newRow.setAttribute('class','prices');
	newRowData.textContent = totalPrice;
	newRow.appendChild(newRowData);
	table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

