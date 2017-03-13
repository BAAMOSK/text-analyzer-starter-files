var getAverage = function(tokens) {
    var totalLength = tokens.join('').length;
    return (totalLength / tokens.length).toFixed(2);
};

var countUnique = function(tokens) {
    var uniqueWords = new Set(tokens);
    return uniqueWords.size;
};

var onlyChars = function(text) {
    return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
};

var removeReturns = function(text) {
    return text.replace(/\r?\n|\r/g, "");  
}

var reportOnText = function(text) {
    var tokens = onlyChars(text);
    var numDistinctWords = countUnique(tokens);
    var numTotalWords = tokens.length;
    var average = getAverage(tokens);
    
    var textReport = $('.js-text-report');
    textReport.find('.js-word-count').text(numTotalWords);
    textReport.find('.js-unique-word-count').text(numDistinctWords);
    textReport.find('.js-average-word-length').text(`${average} characters`);
    
    textReport.removeClass('hidden');
};

var watchSend = function() {
    $('.js-text-form').submit(function(event) {
      event.preventDefault();
      var userText = $(this).find('#user-text').val();
        reportOnText(removeReturns(userText));
    });    
};

$(function() {
    watchSend();
});