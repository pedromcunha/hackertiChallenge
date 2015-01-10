//instantiate a namespace associated with the app to avoid global collisions. 
var ChallengeApp = ChallengeApp || {};

ChallengeApp.moveSentence = function() {
    //create a copy of the node
    this.remove();

    // var xmlhttp;
    // //in the case of modern browser IE7+, FF, Chrome, opera, safari
    // if(window.XMLHttpRequest) {
    //   xmlhttp = new XMLHttpRequest();
    // }
    // //in the case of older browser IE6 + IE5
    // else {
    //   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    // }    
    // xmlhttp.onreadystatechange = function() {
    //     if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    //         document.getElementById("rightSide").getElementsByClassName('sentence-container') = xmlhttp.responseText;
    //     }
    // }
    // xmlhttp.open("GET","ajax_info.txt",true);
    // xmlhttp.send();
};


ChallengeApp.init = function() {
    var sentences = document.getElementById('leftSide').getElementsByClassName('sentence'),
        i = 0;

    for (i; i < sentences.length; i++) {
      sentences[i].addEventListener("click", ChallengeApp.moveSentence);
    }
}

ChallengeApp.init();


// xmlhttp.onreadystatechange=function()
//   {
//   if (xmlhttp.readyState==4 && xmlhttp.status==200)
//     {
//     document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
//     }
//   }
// xmlhttp.open("GET","ajax_info.txt",true);
// xmlhttp.send();