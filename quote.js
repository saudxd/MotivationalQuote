document.getElementById('btn').addEventListener('click', function() {
fetch("https://official-joke-api.appspot.com/random_joke")
.then(response => response.json())
.then(data => { 
    var setup = document.getElementById('setup').innerHTML = data.setup;
    var punchline = document.getElementById('punchline').innerHTML = data.punchline;
    var quote = document.getElementById('quote').innerHTML = "";
    console.log(data)

} )
.catch(error => console.error(error));
});
