function correct(string)
{
	return string.split("").map(val => val === '5' ? 'S' : val === '0' ? 'O' : val === '1' ? "I" : val).join("");
}