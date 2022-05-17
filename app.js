var Resume = /** @class */ (function () {
    function Resume(name, age, gender, skill, school) {
        this.name = name,
            this.age = age,
            this.gender = gender,
            this.skill = skill,
            this.school = school;
    }
    Resume.prototype.basicInformation = function () {
        console.log('name ' + this.name);
        console.log('age ' + this.age);
        console.log('gender ' + this.gender);
        console.log('school ' + this.school);
    };
    Resume.prototype.skillInformation = function () {
        console.log('skills');
        for (var i = 0; i < this.skill.length; i++) {
            console.log(this.skill[i]);
        }
    };
    return Resume;
}());
var obj = new Resume('darwin llacuna', 22, 'male', ['vue js', 'typescipt', 'php'], 'STI College fairview');
obj.basicInformation();
obj.skillInformation();
