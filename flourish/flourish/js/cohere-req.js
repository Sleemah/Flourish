// import axios from 'axios';

// Playground node example Prompt_withForm
// const cohere = require('cohere-ai');
// cohere.init('ZKPWFiFYltThW0Cics97B1BvfcvsWEyAem0Ftm7r'); // This is your trial API key
// (async () => {
//   const response = await cohere.generate({
//     model: 'command',
//     prompt: 'Fill the fields in the Vega-Lite json specification bellow with one of the choices indicated for each field, to answer what is the most suitable Vega-lite graph specification for the question: \"How many data points for each month?\" for the following data sample surrounded in \' bellow:\n\'{\"date\": \"2010/01/01 00:00\", \"temp\": \"39.4\"}\'\n\nChoices:\n_Field1_: bar, point, line\n_Filed2_ and _Filed4_: date, temp, IMDB Rating, Title, Miles_per_Gallon, Cylinders, Displacement, Horsepower, *\n_Filed3_ and _Filed5_: quantitative, ordinal\n\nVega-Lite json specification:\n{\n  $schema: \'https://vega.github.io/schema/vega-lite/v5.json\',\n  mark: \'_Field1_\',\n  encoding: {\n    x: {field: \'_Filed2_\', type: \'_Filed3_\'},\n    y: {field: \'_Filed4_\', type: \'_Filed5_\'}\n  }\n}',
//     max_tokens: 300,
//     temperature: 0.9,
//     k: 0,
//     stop_sequences: [],
//     return_likelihoods: 'NONE'
//   });
//   console.log(`Prediction: ${response.body.generations[0].text}`);
// })();

const options = {
  method: 'POST',
  url: 'https://api.cohere.ai/v1/generate',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Bearer ZKPWFiFYltThW0Cics97B1BvfcvsWEyAem0Ftm7r'
  },
  data: {
    model: 'command',
    prompt: 'Fill the fields in the Vega-Lite json specification bellow with one of the choices indicated for each field, to answer what is the most suitable Vega-lite graph specification for the question: \"How many data points for each month?\" for the following data sample surrounded in \' bellow:\n\'{\"date\": \"2010/01/01 00:00\", \"temp\": \"39.4\"}\'\n\nChoices:\n_Field1_: bar, point, line\n_Filed2_ and _Filed4_: date, temp, IMDB Rating, Title, Miles_per_Gallon, Cylinders, Displacement, Horsepower, *\n_Filed3_ and _Filed5_: quantitative, ordinal\n\nVega-Lite json specification:\n{\n  $schema: \'https://vega.github.io/schema/vega-lite/v5.json\',\n  mark: \'_Field1_\',\n  encoding: {\n    x: {field: \'_Filed2_\', type: \'_Filed3_\'},\n    y: {field: \'_Filed4_\', type: \'_Filed5_\'}\n  }\n}',
    max_tokens: 300,
    temperature: 0.9,
    k: 0,
    stop_sequences: [],
    return_likelihoods: 'NONE'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });