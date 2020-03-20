/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

const gitHubCard = (data) => {
  const newCard = document.createElement('div')
  const newImage = document.createElement('img')
  const newCardInfo = document.createElement('div')
  const gitHubName = document.createElement('h3')
  const gitHubUserName = document.createElement('p')
  const gitHubLocation = document.createElement('p')
  const gitHubProfile = document.createElement('a')
  const gitHubFollowerCount = document.createElement('p')
  const gitHubFollowingCount = document.createElement('p')
  const gitHubBio = document.createElement('p')

  newCard.classList.add('card')
  newCardInfo.classList.add('card-info')
  gitHubName.classList.add('name')
  gitHubUserName.classList.add('username')

  gitHubName.textContent = data.name
  gitHubUserName.textContent = data.login
  newImage.src = data.avatar_url
  gitHubLocation.textContent = data.location
  gitHubProfile.src = data.html_url
  gitHubProfile.textContent = data.html_url
  gitHubFollowerCount.textContent = data.followers
  gitHubFollowingCount.textContent = data.following
  gitHubBio.textContent = data.bio


  newCard.appendChild(newImage)
  newCard.appendChild(newCardInfo)
  newCardInfo.appendChild(gitHubName)
  newCardInfo.appendChild(gitHubUserName)
  newCardInfo.appendChild(gitHubLocation)
  newCardInfo.appendChild(gitHubProfile)
  newCardInfo.appendChild(gitHubFollowerCount)
  newCardInfo.appendChild(gitHubFollowingCount)
  newCardInfo.appendChild(gitHubBio)

  return newCard
}
/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['dalinhuang99', 'jake100', 'rfthusn', 'TheTrabin', 'dcornelison1216'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

axios.get("https://api.github.com/users/Daemonlord92")
.then(response => {
  console.log(response)
  const daemonGit = gitHubCard(response.data)
  const entryPoint = document.querySelector('.cards')
  entryPoint.appendChild(daemonGit)
})
.catch(err => {
  console.log('ERROR WILL ROBERTSON', err)
})

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(response => {
    const newCard = gitHubCard(response.data)
    const entryPoint = document.querySelector('.cards')
    entryPoint.appendChild(newCard)
  })
})
