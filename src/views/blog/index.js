import router from "../../router";
import template from "./index.html";
import "./style.css";
// import "../../shared/bootstrap.min.css";
// import "../../shared/bootstrap.min.js";
import $ from "../../shared/jquery.js";

export default class {
  mount(container) {
    document.title = "blog";
    container.innerHTML = template;
    let blackboard = document.getElementsByClassName("blackb")[0];
    blackboard.className = "onimg " + "blackb";
    async function assDynamic() {
      await addBg();
      $(".temptext").hide();
      $(".learn").click(function() {
        $(".list").hide();
        var filename = this.parentNode.getAttribute("filename");
        $.get(`../files/${filename}`, data => {
          var converter = new showdown.Converter();
          var htm = converter.makeHtml(data);
          $(".temptext").html(htm);
        });
        $(".temptext").show();
      });
    }
    function addBg() {
      $.ajax({
        url: "/api",
        method: "get",
        success: function(wen) {
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
            p = document.createElement("p");
            article.innerHTML = wen[i].title;
            p.innerHTML = wen[i].description;
            div.appendChild(article);
            div.appendChild(p);
            document.body.appendChild(div);
            div.className = "col-md-6 list";
            var tags = new Array();
            tags = wen[i].tags.split(" ");
            console.log(tags);
            for (var j = 0; j < tags.length; j++) {
              // span = document.createElement('span');
              // span.className = 'label label-default';
              // span.innerHTML = tags[j];
              btn = document.createElement("button");
              btn.className = "btn btn-group-sm btnpad";
              btn.innerHTML = tags[j];
              div.appendChild(btn);
            }
            button = document.createElement("button");
            button.innerHTML = "Learn More";
            button.className = "btn btn-default learn";
            div.appendChild(button);
            div.setAttribute("filename", `${wen[i].filename}`);
          }
        }
      });
    }
    assDynamic();
  }
}
