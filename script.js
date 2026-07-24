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
	let 
};

getSumBtn.addEventListener("click", getSum);

