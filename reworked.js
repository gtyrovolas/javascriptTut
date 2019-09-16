"use strict"


function clear(elem) {

	elem.innerHTML = "";

}


function sleep(ms) {
  if(ms <= 0) ms = 10;
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main(){
	let prev = p1;
	let count = 1;
	let time = 1000;
	while(true){
		await sleep(time);
		let cur = document.createElement("p");
		cur.innerHTML = "Wait another paragraph!!! " + count;
		count++;
		prev.after(cur); 
		prev = cur;
		time -= 10;
	}
}

main();