console.log("This is my script")

let results = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "reckeddy",
    "email": "reckeddy@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
  }



submitBtn.addEventListener("click", async(e)=> {
    e.preventDefault()
    console.log("Clicked!")
              
    resultCont.innerHTML = `<img width="23" src="img/loading.svg" alt="loading">`
    const key = "ema_live_edLq1USO59jJbv97Sq0opkUW2FfuuAiUv65Moer9"
    const email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    try {
      let res = await fetch(url)
      if(!res.ok){
        throw new Error(`HTTP error! Status: ${res.status}`)
    }
    let results = await res.json()
    let str = ``
    for(key of Object.keys(results)){
        if(results[key] !== ""){
            str = str + `<div>${key}: ${results[key]}</div>`
        }
    }
    resultCont.innerHTML = str
    } catch (error) {
        console.error('Error:', error)
    }
    
})


  

