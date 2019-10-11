import avg from './some';
import $ from 'jquery';

var SwaggerApi = require('codegen-skills-api');
var api = new SwaggerApi.SkillApi();

var callBack = function(error, data, response){
	if(error) {
		console.log('ERROR: ' + error);
	} else {
		data.map((skill) => {
			console.log('DATA: ' + skill.id + ' ' + skill.name);
		});
	}
};

console.log("*** getSkills ***")
var a = api.getSkills(callBack);
console.log("*** deleteSkill ***")
var b = api.deleteSkill(2, callBack);

$('.title').html('Some text');

console.log(avg(1, 4, 8));


