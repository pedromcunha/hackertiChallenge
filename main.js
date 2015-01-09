//instantiate a namespace associated with the app to avoid global collisions. 
var ChallengeApp = ChallengeApp || {};

ChallengeApp.moveSentence = function() {
    console.log('oops not working yet, try again later');
};


ChallengeApp.init = function() {
    var sentences = document.getElementById('leftSide').getElementsByClassName('sentence'),
        i = 0;

    for (i; i < sentences.length; i++) {
      sentences[i].addEventListener("click", ChallengeApp.moveSentence);
    }
}

ChallengeApp.init();
