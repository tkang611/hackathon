// Initialize button with user's preferred color

// changeDog.addEventListener("click", async () => {

//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     func: setPageSprite,
//   });
// });

// function setPageSprite() {
//   chrome.storage.sync.get("sprite", () => {
//       const spriteImg = document.createElement('img')
//       spriteImg.setAttribute("id", "sprite")
//       spriteImg.setAttribute("src", "https://uploads.twitchalerts.com/000/103/455/720/slime-9cf67.gif")
      
//       document.body.append(spriteImg);
//   });
// }


// Initialize button with user's preferred color

changeDog.addEventListener("click", async () => {

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: setPageSprite(),
  });
});

changeCat.addEventListener("click", async () => {

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: setPageSpriteCat(),
  });
});

changeSlime.addEventListener("click", async () => {

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: setPageSpriteSlime(),
  });
});

deleteSprite.addEventListener("click", async () => {

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: deletePageSprite(),
  });
});

mysterySprite.addEventListener("click", async () => {

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: setPageSpriteMystery(),
  });
});

function deletePageSprite(sprite) {
  chrome.storage.sync.get("sprite", () => {
      const sprite = document.getElementById('sprite-image');
      sprite.src = "https://i.imgur.com/1weYTub.jpg"
  });

  return function() {
    chrome.storage.sync.get("sprite", () => {
      const currSprite  = document.getElementById('sprite')
      if(currSprite) {
        currSprite.remove();
      }
  });
  }
}

function setPageSprite(sprite) {
  chrome.storage.sync.get("sprite", () => {
      const sprite = document.getElementById('sprite-image');
      sprite.src = "https://c.tenor.com/cFHngFd4w4oAAAAi/zzz-sleeping.gif"
  });

  return function() {
    chrome.storage.sync.get("sprite", () => {
      const currSprite  = document.getElementById('sprite')
      if(currSprite) {
        currSprite.remove();
      }
      const spriteImg = document.createElement('img')
      spriteImg.setAttribute("id", "sprite")
      spriteImg.setAttribute("style", "position:fixed; z-index:99; height:150px; margin-left:50px; transform: rotateY(180deg);")
      spriteImg.setAttribute("src", "https://c.tenor.com/cFHngFd4w4oAAAAi/zzz-sleeping.gif")
      
      document.body.prepend(spriteImg);
  });
  }
}

function setPageSpriteCat(sprite) {
  chrome.storage.sync.get("sprite", () => {
      const sprite = document.getElementById('sprite-image');
      sprite.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a083939a-5bb5-4155-9de9-d77146e45a11/d57hlix-076bba01-0173-4a5b-8073-451b9f6cb23a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EwODM5MzlhLTViYjUtNDE1NS05ZGU5LWQ3NzE0NmU0NWExMVwvZDU3aGxpeC0wNzZiYmEwMS0wMTczLTRhNWItODA3My00NTFiOWY2Y2IyM2EuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vc4QVCJ79ZJ_I5t3Cu37rcNF2YaVQnqMO4wzRErNip0"     
  });

  return function() {
    chrome.storage.sync.get("sprite", () => {
      const currSprite  = document.getElementById('sprite')
      if(currSprite) {
        currSprite.remove();
      }
      const spriteImg = document.createElement('img')
      spriteImg.setAttribute("id", "sprite")
      spriteImg.setAttribute("style", "position:fixed; z-index:99; height:200px; margin-left:50px;")
      spriteImg.setAttribute("src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a083939a-5bb5-4155-9de9-d77146e45a11/d57hlix-076bba01-0173-4a5b-8073-451b9f6cb23a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2EwODM5MzlhLTViYjUtNDE1NS05ZGU5LWQ3NzE0NmU0NWExMVwvZDU3aGxpeC0wNzZiYmEwMS0wMTczLTRhNWItODA3My00NTFiOWY2Y2IyM2EuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vc4QVCJ79ZJ_I5t3Cu37rcNF2YaVQnqMO4wzRErNip0")
      
      document.body.prepend(spriteImg);
  });
  }
}

function setPageSpriteSlime(sprite) {
  chrome.storage.sync.get("sprite", () => {
      const sprite = document.getElementById('sprite-image');
      sprite.src = "https://uploads.twitchalerts.com/000/103/455/720/slime-9cf67.gif"      
  });

  return function() {
    chrome.storage.sync.get("sprite", () => {
      const currSprite  = document.getElementById('sprite')
      if(currSprite) {
        currSprite.remove();
      }
      const spriteImg = document.createElement('img')
      spriteImg.setAttribute("id", "sprite")
      spriteImg.setAttribute("style", "position:fixed; z-index:99; height:150px; margin-left:50px; transform: rotateY(180deg); bottom:0px")
      spriteImg.setAttribute("src", "https://uploads.twitchalerts.com/000/103/455/720/slime-9cf67.gif")

      
      document.body.prepend(spriteImg);
    })
  }
}

function setPageSpriteMystery(sprite) {
  chrome.storage.sync.get("sprite", () => {
      const sprite = document.getElementById('sprite-image');
      sprite.src = "https://i.imgur.com/3EMge0k.png"      
  });

  return function() {
    chrome.storage.sync.get("sprite", () => {
      const currSprite  = document.getElementById('sprite')
      if(currSprite) {
        currSprite.remove();
      }
      const spriteImg = document.createElement('img')
      spriteImg.setAttribute("id", "sprite")
      spriteImg.setAttribute("style", "position:fixed; z-index:99; height:150px; margin-left:0px; bottom: 0px")
      spriteImg.setAttribute("src", "https://i.imgur.com/3EMge0k.png")

      
      document.body.prepend(spriteImg);
    })
  }
}
