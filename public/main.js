const getBtn = () => {
  debugger

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
      console.log(response)
    })
}

function main() {
  if (document.querySelector('#btn')) {
    getBtn().addEventListener('click', getData)
  }
}

//
document.addEventListener('DOMContentLoaded', main)
