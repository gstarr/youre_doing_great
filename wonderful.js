
function onTwitter() {
  if (document.URL.includes("twitter.com")) {
      doReplace();
  }
}

function doReplace() {
    console.log("do replace here");
    multipyFollowers(100000)
}

onTwitter();

function multipyFollowers(n) {
   var htmlCollection = document.getElementsByClassName("ProfileNav-value")
   // get followers
   var followers = htmlCollection[2]
   var value = humanizeNumber(followers.innerHTML)
   followers.innerHTML = multipyAndConvert(value, n)
}

function multipyAndConvert(value, n ) {
    console.log(value, n);
    console.log(typeof(value))
    var _val = (value * Math.random() * n * n)
    console.log(_val)
    return _val
}

function humanizeNumber(value) {
    if (value.includes("M") || value.includes("K")) {
        value = parseInt(value.split("M")[0])
        return value
    }
    return parseInt(value)

}




