
function onTwitter() {
  if (document.URL.includes("twitter.com")) {
      doReplace();
  }
}

function doReplace() {
    console.log("do replace here");
}

onTwitter();
