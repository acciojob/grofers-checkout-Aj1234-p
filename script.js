const getSumBtn = document.createElement("button");
const priceItem = document.querySelector('.price');
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let sum =0;
	priceItem.forEach((p)=>{
		p = parseInt(p);
		sum+=p;
	})
	return sum;
};

getSumBtn.addEventListener("click", getSum);

