
const form = document.querySelector('.froma');
const input = document.querySelector('.input-search');
const box = document.querySelector('.response-container');
const temp = document.querySelector(`.template`).content;
const resulttext = document.querySelector(`.response-container`)
const loading = document.querySelector(`.loader`);
const recomindation = document.querySelector(`.recomendation-wrapper`)


loading.style.display = `none`

form.addEventListener("submit", async (evt) => {
  evt.preventDefault();
  loading.style.display = `block`;
  input.setAttribute("disabled", "true");


  input.value = "";

  const url = 'https://open-ai-chatgpt.p.rapidapi.com/ask';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '3cd5f9348bmsh94a7fcc40f8eba9p155bf6jsn4bf6ff030558',
      'X-RapidAPI-Host': 'open-ai-chatgpt.p.rapidapi.com'
    },
    body: JSON.stringify({
      query: input.value,
    })
  };

  try {
    const response = await fetch(url, options);

    const result = await response.json();

    const ask = document.createElement("h4");
    ask.setAttribute("class", "skgpr");
    ask.textContent = result.response;
    resulttext.appendChild(ask);

  } catch (error) {
    console.error(error);
  } finally {
    loading.style.display = `block`;
    recomindation.style.display = `none`;
    input.setAttribute("disabled", "false");
  }
});
