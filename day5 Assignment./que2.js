
class User {
    constructor(username,age,email)
    {
        this.username=username;
        this.age=age;
        this.email=email;
        this.coins = 0;
        this.courses =[];

    }

    static greet()
    {
        console.log("Hello there!!")
    }
    login(){
        console.log(this.username+"has logged in");
    }

    logout(){
        console.log(`${this.username}`+" has logout");
        
    }

}
   

class Moderator extends User{
    constructor(username,age,email){
        super(username,age,email);
    }


  addCoins(user){
        user.coins++;
        console.log(`${user.username} has ${user.coins} coins`);
        return this;
    }

   addRemove(user){
        user.coins--;
        console.log(`${user.username} has ${user.coins} coins`);
        return this;
    }
}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
       console.log(user.courses);
       }
   
   removeCourse(user,course){
       user.courses.splice( courses.indexOf(course), 1 );
       console.log(user);
   }

}

  let user1=new User('amol','25','amol24@gmail.com')
  user1.login();

  
  let mod=new Moderator('shubham','26','shubham@gmail.com','5')
  mod.addCoins(user1);
  mod.addCoins(user1);
  console.log(user1);

  /*let admin=new Admin('sonal','25','sonalyedi@gmail.com');
  admin.addCourse(user1,'Javascript');
  admin.addCourse(user1,"python");
  admin.addCourse(user1,"c++");

  let users = [user1,mod,admin];

users.forEach(element => {
    console.log(element);
});

*/

