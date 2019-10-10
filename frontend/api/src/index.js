import avg from './some';
import $ from 'jquery';

var SwaggerApi = require('codegen-skills-api');
var api = new SwaggerApi.SkillApi();

var callBack = function(error, data, response){
	if(error) {
		console.log('ERROR: ' + error);
	} else {
		data.map((skill) => {
			console.log('DATA: ' + skill.name);
		});
	}
};

var a = api.getSkills(callBack);

$('.title').html('Some text');

console.log(avg(1, 4, 8));


