
//Instructions
//Create a form with two fields (name, last name) and a submit button.
//When you click the Send button, send the data as JSON.
//The output should be:
//output


function newSubmit(form1){
	form1.preventDefault();

	const data = new FormData(form);

const information = Object.fromEntries(data.entries());
	console.log({information});
}

const form = document.querySelector('form');
form.addEventListener('submit', newSubmit);





















