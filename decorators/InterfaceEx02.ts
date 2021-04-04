interface User {
    username: string;
    password: string;
    confirmPassword?: string; 
}

let user: User;

user = {username: 'Jack', password: 'supersecret'};  

user = {username: 'Jack', password: 'supersecret', confirmPassword: 'supersecret'};
