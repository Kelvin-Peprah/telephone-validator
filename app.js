const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const displayResult = document.getElementById('results-div');

const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}[-\s]?\d{4}$/;

// Input validation: Allow only valid characters
userInput.addEventListener('input', () => {
	userInput.value = userInput.value.replace(/[^0-9()\s-]/g, '');
});

const checkNumber = () => {
	const input = userInput.value.trim();

	if (input === '') {
		alert('Please provide a phone number');
		return;
	} else if (phoneRegex.test(input)) {
		displayResult.innerHTML = `Valid US number: ${input}`;
	} else {
		displayResult.innerHTML = 'Invalid phone number';
	}
};

checkButton.addEventListener('click', () => {
	checkNumber();
});

userInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		checkNumber();
	}
});

clearButton.addEventListener('click', () => {
	displayResult.innerHTML = '';
	userInput.value = '';
});
