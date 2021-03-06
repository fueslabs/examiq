const formattedReturn = require('./helpers/formattedReturn')
const submitWaitlist = require('./helpers/submitWaitlist')

exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    return await submitWaitlist(event);
  } else {
    return formattedReturn(405, {});
  }
}