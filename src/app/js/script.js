const adviceId = document.querySelector('#adviceId')
const adviceText = document.querySelector('#adviceText')
const btn = document.querySelector("#btn")

window.addEventListener('load',()=>{
    adviceId.innerText = "000";
    adviceText.innerText = "Click the button to get API Advices";
})
const advice_Fetch = async () => {
    const API_Request = new Request(`https://api.adviceslip.com/advice`)

    const fetch_Response = await fetch(API_Request)

    const advice = await fetch_Response.json()

    console.log(advice);
    adviceId.innerText = advice.slip.id;
    adviceText.innerText = advice.slip.advice;
}


btn.addEventListener('click', advice_Fetch)