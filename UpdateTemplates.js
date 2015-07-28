var gulp = require('gulp');
var htmlparser = require("htmlparser2");
var argv = require('yargs').argv;
var _ = require("underscore");
var glob = require("glob");
var fs = require("fs");
var mkdirp = require("mkdirp");

var Template = {
	templateDeclaration : function(id){
		return 'Coveo.Ui.TemplateCache.registerTemplate("'+ id +'", '
	},
	functionNameStart : function() {
		return undefined;
	}
}

var UnderscoreTemplate = Object.create(Template, {
	functionNameStart: {
		value : function() {
			return "_.template(";
		}
	}
})

var HandleBarsTemplate = Object.create(Template, {
	functionNameStart: {
		value : function() {
			return "Handlebars.compile(";
		}
	}
})

var JsRenderTemplate = Object.create(Template, {
	functionNameStart: {
		value : function() {
			return "$.templates(";
		}
	}
})

var type = argv.t || "underscore";
var input = argv.i || "./templates";
var outFile = argv.o || "generated.js";
var outputFolder = argv.f || "templates";
var underscore = Object.create(UnderscoreTemplate);
var handlebars = Object.create(HandleBarsTemplate);
var jsrender = Object.create(JsRenderTemplate);
var foundIds = [];
var output = "";

function tmpl(type) {
	if (type == "underscore")
		return underscore;
	if (type == "handlebars")
		return handlebars;
	if (type == "jsrender")
		return jsrender;
}

function onOpenTag(name, attribs) {
	if(name == "script"){
		if(attribs.id) {
			var idAlreadyExists = _.find(foundIds, function(id){
				return attribs.id == id;
			})
			if(idAlreadyExists){
				throw "DUPLICATE ID FOR SCRIPT";
			} else {
				foundIds.push(attribs.id);
				output += tmpl(type).templateDeclaration(attribs.id);
				output += tmpl(type).functionNameStart();
				output += "\n";
				output += "\"";
			}
		} else {
			throw "NO ID FOUND FOR SCRIPT";
		}
	}
}

function onText(data) {
	var str = data.replace(/"/g , '\\"')
	str = str.replace(/\\\\"/g , '\\"')
	str = str.replace(/\t/g , "")
	str = str.replace(/_script/g , "script")
	var split = str.split("\n");
	_.each(split, function(line){
		output += line.trim();
	})
}

function onCloseTag(tag) {
	output += "\"))\n"
}

var parser = new htmlparser.Parser({
	onopentag : onOpenTag,
	ontext : onText,
	onclosetag : onCloseTag
})

glob(input + "/**/*.html", function(err, files){
	_.each(files, function(file){
		console.log('Compiling template file ' + file)
		var outLocation = outputFolder + "/" + outFile;
		mkdirp(outputFolder, function(){
			parser.write(fs.readFileSync(file).toString());
			parser.end();
			fs.writeFile(outLocation, output);
		})
	})
})