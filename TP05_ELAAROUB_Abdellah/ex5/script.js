function Member(name, id, grade){
    this.Name = name;
    this.Id = id;
    this.Grade = grade;
    this.toString = function(){
        return 'Id : '+this.Id+'  Name : '+this.Name+'  Grade : '+this.Grade+'\n';
    }
}

function Team(){
    this.TM = new Array();
    this.add = function(Member){
        var indice = this.TM.length;
        this.TM[indice] = Member;
    }
}

const isTeam = new Team();
isTeam.add(new Member('abdou', 05, 'A'));
isTeam.add(new Member('malak', 10, 'D'));
isTeam.add(new Member('mohammed', 12, 'G'));
isTeam.add(new Member('said', 11, 'B'));
isTeam.add(new Member('otman', 14, 'E'));
isTeam.add(new Member('latifa', 09, 'C'));
isTeam.add(new Member('islam', 07, 'N'));
console.log(isTeam);
for(let e=0; e<isTeam.TM.length; e++){
    console.log(isTeam.TM[e].toString());

}
