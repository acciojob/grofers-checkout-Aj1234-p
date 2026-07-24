const getSumBtn = document.createElement("button");
const priceItem = document.querySelectorAll('.price');
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
	newRowData.textContent = sum;
	newRow.appendChild(newRowData);
	body.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

