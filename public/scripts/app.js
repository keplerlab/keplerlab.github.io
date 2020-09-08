(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['upload'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<style>\n    .file-upload{\n        color: #1E90FF;\n        border: 2px solid #1E90FF;\n        padding: 5px;\n    }\n\n    #file-zip, #file-recording{\n        opacity: 0;\n\n        height: 0.1px;\n        z-index: -1;\n    }\n\n    .upload-container{\n        margin-top: 1%;\n        width: 90%;\n        height: 312px;\n        border-radius: 5px;\n    }\n\n    .upload-container .heading{\n        margin-top: 32px;\n        \n    }\n    .upload-files{\n        margin-top: 20px;\n    }\n\n    .custom-btn{\n        background-color:  #1E90FF;\n        color: white;\n        border: 2px solid #1E90FF;\n        border-radius: 5px;\n        padding: 5px;\n    }\n\n    .upload-el{\n         margin-top: 20px;\n    }\n\n\n</style>\n\n<div class=\"upload-container has-shadow col-md-10\">\n   <div class=\"heading\">\n       <h4>Upload meeting data to view</h4>\n   </div>\n\n    <div class=\"upload-files\">\n        <div class=\"upload-el\">\n            <input type=\"file\" id=\"file-zip\" name=\"file-zip\" multiple />\n            <label for=\"file-zip\" class=\"file-upload\">\n                <span>Select meeting data (.zip)</span>\n                <img src=\"public/img/upload_icon.svg\">\n            </label>\n        </div>\n\n        <div class=\"upload-el\">\n            <input type=\"file\" id=\"file-recording\" name=\"file-recording\" multiple />\n            <label for=\"file-recording\" class=\"file-upload\">\n                <span>Select recording (.mp4, .flac)</span>\n                <img src=\"public/img/upload_icon.svg\">\n            </label>\n        </div>\n\n        <div class=\"upload-el\">\n            <button onclick=\"uploadSubmit();\" class=\"custom-btn\">View meeting<img style=\"margin-left:8px;\" src=\"public/img/next_icon.svg\"></button>\n        </div>\n       \n    </div>\n</div>\n\n<script>\n    function uploadSubmit(){\n        console.log(\" Submit button clicked \");\n    }\n</script>\n";
},"useData":true});
})();