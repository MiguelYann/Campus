export class Personnes{
  id: number;
  name: string;
  firstname: string;
  age: number;
  path: string;
  cin: number;
  job: string;


  constructor(id, name , firstname, age, path, cin, job) {

      this.id = id;
      this.name = name;
      this.firstname = firstname;
      this.age = age;
      this.path = path;
      this.cin = cin;
      this.job = job;
  }
}
