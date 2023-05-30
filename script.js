const inputField = document.querySelector("[inputField]");
const searchButton = document.querySelector("[seachButton]");
const userIcon = document.querySelector("[user-Img]");
const userName = document.querySelector("[user-Name]");
const joinedAt = document.querySelector("[date]");
const profile = document.querySelector("[idLink]");
const bio = document.querySelector("[about]");
const repNo = document.querySelector("[reposNo]");
const followerNo = document.querySelector("[followersNo]");
const followingNo = document.querySelector("[followingNo]");
const cityName = document.querySelector("[cityName]");
const twitter = document.querySelector(".twitter_username");

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let startUser = "anmolpatel562";
fetchUserData();

searchButton.addEventListener('click',()=>{
   startUser = inputField.value;
   if(startUser!=""){
      fetchUserData()
   }
   else
      return;
});
function renderUserData(data){
    userIcon.src = `${data?.avatar_url}`; 
    userName.innerText = `${data?.name}`;
    var d = new Date(data?.created_at);
    joinedAt.innerText = (d.toLocaleDateString("en-US", options)) ;
    profile.innerText = `@${data?.login}`;
    profile.href = "https://github.com/"+`${data?.login}`;
    bio.innerText = data?.bio;
    repNo.innerText = data?.public_repos;
    followerNo.innerText = data?.followers;
    followingNo.innerText = data?.following;
    cityName.innerText = data?.location;
    // twitter.innerText = data?.twitter;
}

async function fetchUserData(){
    try{
        const response =await fetch("https://api.github.com/users/"+startUser);
        const data = await response.json();
        renderUserData(data);
    }
    catch(error){
        console.log("Error occured while fetching data ",error);
    }
}
