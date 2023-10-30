const yourURL = "https://api.github.com/users/carolinelovescode";
const repoURL = "https://api.github.com/users/carolinelovescode/repos"
const containerOfAll = document.querySelector('.container');

let userName = document.getElementById('username');
let userEmail = document.getElementById('userEmail');
let userLoc = document.getElementById('userLoc');
let github = document.getElementById('githubLink')

// let repo = document.getElementById('repo');
/* let repo1 = document.getElementById('repo1')
let repo2 = document.getElementById('repo2') */


fetch(yourURL).then((response) => {
    return response.json();
}).then((parsedJsonResponse) => {

    userName.innerText = ` Username: ${parsedJsonResponse.login}`
    // userEmail.innerText = `Email: csuec23@gmail.com`
    userLoc.innerText = `Location: ${parsedJsonResponse.location}`
    // repo.src = `${parsedJsonResponse.repos_url}`
});

fetch(repoURL).then((response) => {
    return response.json();
}).then((parsedJsonResponse) => {

    let allRepo = document.getElementById('repo');
    let repos = document.createElement('ul');
    let repo1 = document.createElement('li');
    let repoLinx1 = document.createElement('a');
    let repo2 = document.createElement('li');
    let repoLinx2 = document.createElement('a');

    repoLinx1.innerText = parsedJsonResponse[1]['full_name'];
    repoLinx1.href = parsedJsonResponse[1]['html_url'];

    repo1.appendChild(repoLinx1);
    repos.appendChild(repo1);
    allRepo.appendChild(repos)


    repoLinx2.innerText = parsedJsonResponse[0]['full_name']
    repoLinx2.href = parsedJsonResponse[0]['html_url']

    repo2.appendChild(repoLinx2);
    repos.appendChild(repo2);
    allRepo.appendChild(repos)

    repos.classList.add('repoList')

    /* repo2.appendChild(repos)
    document.body.appendChild(repo2); */


})



