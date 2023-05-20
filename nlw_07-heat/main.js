const linksSocialMedia = {
  github: "edimilsonbraz",
  youtube: "ediguitar",
  facebook: "edimilson.braz.5",
  instagram: "eddiguitar",
  twitter: ""
}

function changeSocialMediaLinks() {
  for(let li of socialLinks.children) {
    const social = li.getAttribute("class")
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]} `

    // alert(li.children[0].href);
  }
}

changeSocialMediaLinks()


function getGitHubProfile() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then((response) => response.json())
    .then(data => {
      userName.textContent = data.name;
      userDescription.textContent = data.bio;
      userLink.href = data.html_url;
      userAvatar.src = data.avatar_url;
      userLogin.textContent = data.login
    })
}


getGitHubProfile()

