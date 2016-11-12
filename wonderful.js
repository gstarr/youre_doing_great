
function onTwitter(name) {
  if (document.URL.includes("twitter.com/" + name)) {
      doReplace();
  }
}

function doReplace() {
    console.log("do replace here");
    multipyFollowers()
}
function multipyFollowers(n) {
   var htmlCollection = document.getElementsByClassName("ProfileNav-value")
   // get followers
   var followers = htmlCollection[2]
   var value = humanizeNumber(followers.innerHTML)
   followers.innerHTML = multipyAndConvert(value, n)
}

function multipyAndConvert(value, n ) {
    var _val = (value * (Math.random() +1) * n)
    return truncateNumber(_val)
}

function truncateNumber(n) {
    return Math.floor(n)
}

function humanizeNumber(value) {
    if (value >= 10000) {
        console.log('hi')
        

}


function unhumanizeNumber(value) {
    if (value.includes("M") || value.includes("K")) {
        value = parseInt(value.split("M")[0])
        return value
    }
    return parseInt(value)

}

// starts app
onTwitter("GrahamStarr");
