// let p = fetch('https://kontests.net/api/v1/all',{
//     method : "GET"
// });

// p.then((response) => response.json())
// .then(data => console.log(data));
var data = [];
var chunks = [];

let getContests = async () => {
    let contests = await fetch('https://kontests.net/api/v1/all',{
    method : "GET"
    });

    let contestsData = await contests.json();
    return contestsData;
}
let timeConversionInHours = (dateUnix) => {
    return new Date(dateUnix * 1000).getHours();
}
let randomImageSelector = () => {
    let images = [
     'https://d1ng1bucl7w66k.cloudfront.net/ghost-blog/2022/04/Screen-Shot-2022-04-25-at-4.56.50-PM.png'
    ,'https://media.geeksforgeeks.org/wp-content/uploads/20220427142321/TopWebsitesForCodingChallengesCompetitions.jpg'
    ,'https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg',
     'https://images.theconversation.com/files/479421/original/file-20220816-10908-uvh62x.jpg?ixlib=rb-1.1.0&rect=4%2C5%2C994%2C497&q=45&auto=format&w=668&h=324&fit=crop'
    ];

    let indexRandom = Math.floor(Math.random() * images.length);
   
    return images[indexRandom];
}

let getDataFromAPI = async () => {
     dataContests = await getContests();
     let card = document.getElementById("card");
     let iHtml = '';
    
    dataContests.forEach(contest => {
        iHtml += `
        <div class="card" style="width: 18rem;justify-content:center; margin: 10px">
            <img src=${randomImageSelector()} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${contest.name}</h5>
              <p class="card-text">Duration: ${timeConversionInHours(contest.duration)} Hours</p>
              <p class="card-text">Site: ${contest.site}</p>
              <p class="card-text">In 24 Hours: ${contest.in_24_hours}</p>
              <a href="${contest.url}" target = "__blank" class="btn btn-primary">Visit Contest</a>
            </div>
          </div>`;
        });
    card.innerHTML = iHtml;

}


getDataFromAPI();

let oldNote = localStorage.getItem("note");
if(oldNote){
    alert(oldNote);
}

let note = prompt("Enter Notes to Save");
if(note){
    localStorage.setItem("note",note);
}

let deleteOption = confirm("Do You Want To DELETE NOTES");
if(deleteOption){
    localStorage.clear();
}

