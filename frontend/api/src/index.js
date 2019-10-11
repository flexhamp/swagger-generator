//import avg from './some';
//import $ from 'jquery';

var SwaggerApi = require('codegen-skills-api');
var api = new SwaggerApi.SkillApi();


// ------  Пример -----------------------------
var callBackArr = function(error, data, response){
	if(error) {
		console.log('ERROR: ' + error);
	} else {
		data.map((skill) => {
			console.log('DATA: ' + skill.id + ' ' + skill.name + ' ' + skill.study + ' ' + skill.progress);
		});
	}
};

var callBackSing = function(error, data, response){
	if(error) {
		console.log('ERROR: ' + error);
	} else {
		console.log('DATA: ' + data.id + ' ' + data.name + ' ' + data.study + ' ' + data.progress);
	}
};

var skilCreate = {
    'skill': {
        "name" : "Pyton",
        "study": "600",
        "progress": "150.5"
    }
};

//Рабочее (НЕ УДАЛЯТЬ)
var a = api.getSkills(callBackArr);
var b = api.deleteSkill(2, callBackArr);
var c = api.createSkill(skilCreate, callBackArr);

var skill = {
    'skill': new SwaggerApi.Skill.constructFromObject({"name": "Javascript", "study": "530", "progress": "263.5"})
}
var skillUpdate = {
    'skill': new SwaggerApi.Skill.constructFromObject({"id": "1", "name": "Javascript", "study": "530", "progress": "263.5"})
}
api.createSkill(skill, callBackArr);
api.getSkillById(3, callBackSing)
api.updateSkill(skillUpdate, callBackArr)


