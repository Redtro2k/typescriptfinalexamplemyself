class Resume{
    name: string
    age: number
    gender: string
    skill: string[]
    school: string

    constructor(name:string, age:number, gender:string, skill: string[], school:string){
        this.name = name,
        this.age = age,
        this.gender = gender,
        this.skill = skill,
        this.school= school
    }

    basicInformation(): void {
        console.log('name ' + this.name);
        console.log('age '+ this.age)
        console.log('gender ' + this.gender);
        console.log('school ' + this.school)
    }

    skillInformation(): void {
        console.log('skills');
        for(var i = 0; i < this.skill.length; i++){
            console.log(this.skill[i]);
        }
    }
}

var obj = new Resume('darwin llacuna', 22, 'male', ['vue js', 'typescipt', 'php'], 'STI College fairview')
obj.basicInformation()
obj.skillInformation()