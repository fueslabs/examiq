const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
  const fields = JSON.parse(event.body);
  try {
    const submittedWaitlist = await table.create([{ fields }]);
    console.log("waitlist submitted!");
    return formattedReturn(200, submittedWaitlist);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
}