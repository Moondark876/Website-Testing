let editor;

window.onload = () => {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/one_dark");
}

function changeLanguage() {

    let language = $(".languages").val();

    if(language == 'c' || language == 'cpp')editor.session.setMode("ace/mode/c_cpp");
    else if(language == 'python')editor.session.setMode("ace/mode/python");
    else if(language == 'node')editor.session.setMode("ace/mode/javascript");
}


function executeCode() {

    $.ajax({

        url: "/app/compiler.php",

        method: "POST",

        data: {
            language: $(".languages").val(),
            code: editor.getSession().getValue()
        },

        success: function(response) {
            $(".output").text(response)
        }
    })
}