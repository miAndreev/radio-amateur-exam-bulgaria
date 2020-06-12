// Put all your page JS here

var quizJSON = {
    "info": {
        "name":    "Подготовка за изпит<br>Радиолюбител клас " + razdel_number,
        "main":    "<p>80% или 48 от 60 въпроса за да минеш.</p>",
        "results": "",
        "level1":  "Отлично!",
        "level2":  "Минаваш",
        "level3":  "За една бройка",
        "level4":  "Можеш по добре",
        "level5":  "Слабо...." // no comma here
    },
    "questions": []
};

// Fisher-Yates shuffle - разбърква въпросите по добре
$.fn.shuffle = function() {
    for (var i = this.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
}

quizJSON.questions = $(razdel).shuffle().slice(0,60).get();

$(function () {
    $('#slickQuiz').slickQuiz();
});