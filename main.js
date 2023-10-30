const yourURL = "https://api.github.com/users/carolinelovescode";
const repoURL = "https://api.github.com/users/carolinelovescode/repos"
const containerOfAll = document.querySelector('.container');

let userName = document.getElementById('username');
let userEmail = document.getElementById('userEmail');
let userLoc = document.getElementById('userLoc');
let github = document.getElementById('')

let repo = document.getElementById('repo');
/* let repo1 = document.getElementById('repo1')
let repo2 = document.getElementById('repo2') */


fetch(yourURL).then((response) => {
    return response.json();
}).then((parsedJsonResponse) => {

    userName.innerText = ` Username: ${parsedJsonResponse.login}`
    // userEmail.innerText = `Email: csuec23@gmail.com`
    userLoc.innerText = `Location: ${parsedJsonResponse.location}`
    repo.src = `${parsedJsonResponse.repos_url}`
});

fetch(repoURL).then((response) => {
    return response.json();
}).then((parsedJsonResponse) => {
    console.log(parsedJsonResponse)

    // let repo1 = document.createElement('li');
    // let repoLinx1 = document.createElement('a');

    let repo1 = document.getElementById('repo1')
    repo1.innerText = parsedJsonResponse[1]["full_name"]
    repoLinx1.src = parsedJsonResponse[0]['html_url']

    // repo1.appendChild(repo);
    // repoLinx1.appendChild(repo);


})



