'use strict';

function cl(className, index) {
    return document.getElementsByClassName(className)[index];
}

let blackboard = cl('blackb', 0);
window.onload = async function () {
    blackboard.className = 'onimg ' + 'blackb';
    try {
        await $.ajax({
            url: "/getList",
            method: "get",
            success: function (wen) {
                wen = JSON.parse(wen);
                console.log(wen);
                var div;
                var article;
                var p;
                var span;
                var button;

                for (let i = 0; i < parseInt(wen.length); i++) {
                    div = document.createElement("div");
                    article = document.createElement("article");
                    p = document.createElement('p');
                    article.innerHTML = wen[i].title;
                    p.innerHTML = wen[i].description;
                    div.appendChild(article);
                    div.appendChild(p);
                    document.body.appendChild(div);
                    div.className = 'col-md-6 list';
                    var tags = new Array();
                    tags = wen[i].tags.split(' ');
                    console.log(tags);
                    for (var j = 0; j < tags.length; j++) {
                        span = document.createElement('span');
                        span.className = 'label label-default';
                        span.innerHTML = tags[j];
                        div.appendChild(span);
                    }
                    button = document.createElement('button');
                    button.innerHTML = 'Learn More';
                    button.className = 'btn btn-default learn';
                    div.appendChild(button);
                }
            }
        });
    } catch(error) {
        return ;
    }
    $(".learn").click(function () {
        alert('asd');
        $(".list").hide();

    });
};
