//Regex filter to return only words
var onlyWords = function(text) {
    return text.toLowerCase().match(/\w+/gi);
};

//function to get only unique WORDS and amount
var uniqueWordSize = function(words) {    
    var results = [];
    var allWords = {};
    
    for(var i = 0; i < words.length; i++) {
        if(!allWords[words[i]]) {
            allWords[words[i]] = 1;
        } else {
            allWords[words[i]]++;
        }
    }
    
    for(var key in allWords) {
        if(allWords[key] <= 1) {
            results.push(key);
        }
    }
    return results.length;
};

//function to get average word LENGTH
var getMean = function(chars, words) {
   return (chars / words).toPrecision(2);
};

//main function to traverse and render data
var renderText = function(text) {
    var words = onlyWords(text);    
    var wordsCount = words.length;
    var uniquesCount = uniqueWordSize(words);
    var totalChars = words.join('').length;
    var mean = getMean(totalChars, wordsCount);
   
    var resultsText = $('#text-report-gone');
    var wordCount = $('.js-word-count');
    var uniqueCount = $('.js-unique-word-count');
    var avgCount = $('.js-average-word-length');
    
    wordCount.append(wordsCount);
    uniqueCount.prepend(uniquesCount);
    avgCount.prepend(mean);
    
    resultsText.removeClass('hidden');
};

//button functionality
var buttonRun = function() {    
    $('#submit').click(function() {
        event.preventDefault();
        var data = $('#user-text').val();
        renderText(data);
    });    
};

//IIFE
$(function() {
    buttonRun();
});