const URL="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const button=document.querySelector("#button");


const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);
    let data= await response.json();
    factPara.innerText = data[1].text;
};
button.addEventListener("click",getFacts);