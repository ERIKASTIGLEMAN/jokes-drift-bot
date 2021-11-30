/_const receiveJoke = function (message) {
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
/_.then(() => {
console.log(mulberry)
return {
type: 'chat',
,
}
})
}\*/

/_const receiveJoke = () => {
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
}_/

function main() {
if (document.querySelector('#btn')) {
getBtn().addEventListener('click', getData)
}
}

document.addEventListener('DOMContentLoaded', main)
//drift.on('startConversation', test)
//drift.on('message:sent', getData)

/_drift.on('startConversation', function (data) {
conversationId = data.conversationId
})
_/
//drift.on('message:sent', receiveJoke)
