const LinksSocialMedia = {
  github: "LucasMinatto",
  facebook: "lucas.dariominatto",
  twitter:"MinattoLucas",
  instagram: "lucasminattoo"
}

function ChangeSocialMediaLinks(){

  for(let li of SocialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

  }

}
ChangeSocialMediaLinks()

function getGitHubProfile(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    UserName.textContent = data.name
    UserBio.textContent = data.bio
    UserLink.href = data.html_url
    UserPhoto.src = data.avatar_url
    UserLogin.textContent = data.login

  })
}

getGitHubProfile()