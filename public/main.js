const getBtn = () => {
  return document.getElementById('btn')
}

const getData = () => {
  axios
    .get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })
    .then(response => {
      //console.log(response)
      //console.log(response.data)
      //console.log(response.data.joke)
      document.querySelector('#dadJokes').textContent = response.data.joke
    })
}

function main() {
  if (document.querySelector('#btn')) {
    getBtn().addEventListener('click', getData)
  }
}

//
document.addEventListener('DOMContentLoaded', main)
