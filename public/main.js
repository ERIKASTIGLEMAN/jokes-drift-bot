const getBtn = () => {
  return document.getElementById('btn')
}
var conversationId = ''
var mulberry = ''
const getData = () => {
  axios
    .get('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })
    .then(response => {
      mulberry = response.data.joke

      return mulberry
    })
    .then(receiveJoke)
}
const receiveJoke = function (message) {
  let request_arg = {
    method: 'POST',
    url: `https://driftapi.com/v1/conversations/${conversationId}/messages`,
    json: true,
    headers: {
      'User-Agent': 'request',
    },
    data: {
      messages: [
        {
          conversationId: conversationId,
          body: mulberry,
        },
      ],
    },
  }
  return Promise.resolve(request_arg)
  /*.then(() => {
    console.log(mulberry)
    return {
      type: 'chat',
     ,
    }
  })*/
}

/*const receiveJoke = () => {
  console.log('amanda is tired')
  let XHR = new XMLHttpRequest()
  XHR.addEventListener('load', function (event) {
    console.log('Success')
  })
  axios
    .post(`https://driftapi.com/conversations/${conversationId}/messages`, {
      type: 'mulberry',
      body: mulberry,
    })
    .then(response => {
      return response()
    })
    .then({
      data: {
        messages: [
          {
            conversationId: conversationId,
            body: mulberry,
          },
        ],
      },
    })
}*/

function main() {
  if (document.querySelector('#btn')) {
    getBtn().addEventListener('click', getData)
  }
}

//
document.addEventListener('DOMContentLoaded', main)
//drift.on('startConversation', test)
drift.on('message:sent', getData)

drift.on('startConversation', function (data) {
  conversationId = data.conversationId
})

//drift.on('message:sent', receiveJoke)
