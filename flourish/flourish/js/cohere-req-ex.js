const cohereReq = async prompt => {
    const modelSettings = JSON.stringify({
      model: "xlarge",
      prompt,
      max_tokens: 1024,
      temperature: 0.6,
      k: 0,
      p: 0.75
    })
  
    const reqBody = {
      method: "POST",
      mode: 'cors',
      headers: {
          "Authorization": "BEARER {YOUR_COHERE_API_KEY}",  // replace with your API key
          "Content-Type": "application/json", 
          "Cohere-Version": "2021-11-08",   // model version
          // I added some headers to prevent CORS errors
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
      },
      body: modelSettings,
      redirect: "follow"
    };
  
    // make request
    let response = await fetch("https://api.cohere.ai/generate", reqBody);
    response = response.json();
  
    return response;
}