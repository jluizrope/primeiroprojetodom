let segundoprojeto = document.querySelector('#segundoprojeto')
let createfirst = document.createElement('h1')
let createfirstText = document.createTextNode('<')
createfirst.appendChild(createfirstText)

let create = document.createElement('img');
create.setAttribute('src', 'assets/imgsegundoprojeto.png')

let createsecond = document.createElement('h2')
let createsecondText = document.createTextNode('>')
createsecond.appendChild(createsecondText)

let imagesList = [
'assets/listimg1.png',
'assets/listimg2.png',
'assets/listimg3dom-tree.gif'
]

let counter=0

function declarationstart() {
	console.log(segundoprojeto, create);
	segundoprojeto.appendChild(createfirst);
	segundoprojeto.appendChild(create);	
	segundoprojeto.appendChild(createsecond);
}

createfirst.addEventListener('click', function(){
	if (counter > 0) {
		counter = counter - 1;
	}else {counter = 2}
	create.setAttribute('src', imagesList[counter]);
})

createsecond.addEventListener('click', function(){
	if (counter < 2) {
		counter = counter + 1;
	}else {counter = 0}
	create.setAttribute('src', imagesList[counter]);
})

declarationstart();
