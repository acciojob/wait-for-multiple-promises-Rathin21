let rows=document.querySelector("#output");
let row1 = document.createElement("tr");
	let c1 = document.createElement("td");
	c1.setAttribute("colspan", 2);
	c1.innerText="Loading...";
	row1.appendChild(c1);
	rows.appendChild(row1);

let p1 = new Promise((resolve,reject)=>{
	let time1=Math.random()*3+1;
	setTimeout(()=>{
		resolve(time1);
	},time1*1000);
});

let p2 = new Promise((resolve,reject)=>{
	let time2=Math.random()*3+1;
	setTimeout(()=>{
		resolve(time2);
	},time2*1000);
});

let p3 = new Promise((resolve,reject)=>{
	let time3=Math.random()*3+1;
	setTimeout(()=>{
		resolve(time3);
	},time3*1000);
});

Promise.all([p1,p2,p3]).then((result)=>{
	let sum=0;
	rows.innerHTML="";
	for(var i=0;i<result.length;i++){
		sum +=result[i];
		rows.innerHTML +=
			`<tr>
			   <td>Promise ${i+1}</td>
				<td>${result[i]}</td>
			</tr>`;
		
	}
	rows.innerHTML +=
			`<tr>
			   <td>Total</td>
				<td>${sum}</td>
			</tr>`;
})

