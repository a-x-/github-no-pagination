// ==UserScript==
// @name Gravatar
// @description Adds avatars from Staff to local GitHub.
// @include https://github.yandex-team.ru/*/branches/all
// @require  jquery.min.js
// @run-at document-end
// @version 1.5
// ==/UserScript==
// Догрузить все страницы с ветками для гитхаба

var hasLastPageBranches = true;
var lastPage;

for(var i = 2; i < 100 && hasLastPageBranches; ++i){

    $.get('https://github.yandex-team.ru/mm-interfaces/fiji/branches/all?page='+i)
    .then(function(text) {
        var el = $('<div>');
        el.html(text);
        lastPage = $('.branch-group .branch-summary', el);
        hasLastPageBranches = lastPage.length;
        hasLastPageBranches && $('.branch-group').append(lastPage);
    });

};

$('.paginate-container').remove();
