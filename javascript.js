//其他
function pronance(e) {
    var pn = document.getElementById("inputGroupSelect01");
    var p = 2;
    var p = pn.value;
    var audio = $("#audio");
    audio.attr("src", "https://dict.youdao.com/dictvoice?audio=" + $(e).attr("class") + "&type=" + p);
    audio.get(0).play();

    $("#dictHcContent").attr("src", "https://dict.cn/apis/dict3.php?q=" + $(e).attr("class"));

}

//转换按钮触发
function zhuanhuan() {
    if (document.getElementById("txtJSON").value == "") {
        alert('请输入单词!');
    } else {
            $(".display").empty();
            var words = $('#txtJSON').val().split("\n");
            for (i = 0; i < words.length; i++) {
                $(".display").append("<div class='word card bg-secondary text-white lead p-2 col' style='float:left;width:50%;'><a class='" + words[i] + "' onclick='pronance(this)' style='color:white'>" +
                    words[i] + "</a></div>");
        };
    }
}

//听写
function tingxie() {
    var childs = $(".display").find("div > a");
    var pn = document.getElementById("inputGroupSelect01");
    var p = 2;
    var p = pn.value;
    var i = 0;
    var t = document.getElementById("time").value;

    function myloop() {
        setTimeout(function () {
            var audio = $("#audio");
            audio.attr("src", "https://dict.youdao.com/dictvoice?audio=" + $(childs[i]).attr("class") + "&type=" + p);
            audio.get(0).play();
            i++;
            if (i < childs.length) {
                myloop();
            }
        }, 1000 * t);
    }

    myloop();


};

//离开提示
function myfunction() {
    return "确认离开当前页面吗？输入的单词将不会保存，全部丢失！";
}