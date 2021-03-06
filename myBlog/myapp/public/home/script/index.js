'use strict';


let blackboard = document.getElementsByClassName('blackb')[0];
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
                var btn;
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
                        // span = document.createElement('span');
                        // span.className = 'label label-default';
                        // span.innerHTML = tags[j];
                        btn = document.createElement('button');
                        btn.className = 'btn btn-group-sm btnpad';
                        btn.innerHTML = tags[j];
                        div.appendChild(btn);
                    }
                    button = document.createElement('button');
                    button.innerHTML = 'Learn More';
                    button.className = 'btn btn-default learn';
                    div.appendChild(button);
                    div.setAttribute("filename", `${wen[i].filename}`);
                }
            }
        });
    } catch (error) {
        return;
    }
    $('.temptext').hide();

    $(".learn").click(function () {
        $(".list").hide();
        var filename = this.parentNode.getAttribute('filename');
        // $('.temptext').load(`../files/${filename}`);
        // var md = $('.temptext').
        // $.ajax({
        //     url: `getContent/${filename}`,
        //     type: 'get',
        //     dataType: 'json',
        //     success: function (data) {
        //         var converter = new Markdown.Converter();
        //         var htm = converter.makeHtml(data);
        //         $('.temptext').html(htm);
        //     }
        // });
        $.get(`../files/${filename}`,(data)=>{
            var converter = new showdown.Converter();
                    var htm = converter.makeHtml(data);
                    $('.temptext').html(htm);
        });
        $('.temptext').show();
    });
};
