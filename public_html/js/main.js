var menu = [
    {
        title:"home",
        src:"index.html",
    },
    {
        title:"掲示板",
        src:"index.html",
    },
    {
        title:"エリア",
        src:"index.html",
    },
    {
        title:"ユーザー",
        src:"index.html",
    },
    {
        title:"グループ",
        src:"index.html",
    },
    {
        title:"コメント履歴",
        src:"index.html",
    },
    {
        title:"ログ履歴",
        src:"index.html",
    },
    {
        title:"設定",
        src:"settings.html",
    },
];

function menuListDisplay(){
    var html = "";//"menuListDisplay";
    html += '<ul>';
    for (var m = 0; m < menu.length;m++) {
        html += '<li>';
        html += '<a href="';
        html += menu[m].src;
        html += '">';
        html += menu[m].title;
        html += '</a>';
        html += '</li>';
    }
    html += '</ul>';
    document.write(html);
}