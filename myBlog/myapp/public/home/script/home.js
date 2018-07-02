'use strict';


let blackboard = document.getElementsByClassName('blackb')[0];
window.onload = async function () {
    // console.log('aaa');
    blackboard.className = 'onimg ' + 'blackb';
    try {
        await $.ajax({
            url: "/getList",
            method: "get",
            success: function (wen) {
                wen = JSON.parse(wen);
                // console.log(wen);
                var div;
                var article;
                var p;
                var span;
                var btn;
                var button;

                for (let i = 0; i < parseInt(wen.length); i++) {
                    div = document.createElement("div");
                    article = document.createElement("h1");
                    p = document.createElement('p');
                    article.innerHTML = wen[i].title;
                    p.innerHTML = wen[i].description;
                    div.appendChild(article);
                    div.appendChild(p);
                    // $('.sss').append(div);
                    document.body.appendChild(div);
                    div.className = 'col-sm-6 list ';
                    var tags = new Array();
                    tags = wen[i].tags.split(' ');
                    for (var j = 0; j < tags.length; j++) {
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

    $(".learn").click(function (event) {
        $(".list").hide();
        $(".temptext").html("");
        var button = "<button class=\"btn btn-default back \">Back</button>";
        $('.temptext').append(button);

        var filename = this.parentNode.getAttribute('filename');
        $.ajax({
            url:`/files/${filename}`,
            method:"get",
            success: (data) => {
                // console.log('aaa');
                var converter = new showdown.Converter();
                var htm = converter.makeHtml(data);
                // console.log(url);
                
                $('.temptext').html(function () {
                    return $('.temptext').html() + htm;
                });
            }
        })
        $('.temptext').show();
        // var pathname = location.pathname;
        // //location.pathname = "/home/" + filename.split(".")[0];
        history.pushState({id:Math.random()},"","/files/"+filename)
        window.onpopstate = () =>{
            console.log(location.pathname)
            if(location.pathname.indexOf(".html") !== -1){
                $('.temptext').hide();
                $('.list').show();
            } else {
                $('.temptext').show();
                $('.list').hide();
            }
        };
        console.log($('.back'));
        console.log(document.getElementsByClassName('back').length);
        document.getElementsByClassName('back')[0].onclick = function () {
            console.log('abc');
            $('.temptext').hide();
            $('.list').show();
        };
    });

}
