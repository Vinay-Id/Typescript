interface UserProfile {
    username: string;
    email: string;
    age: number;

    firstName?: string;
    lastName?: string;
 
    getFullName(): string;
  }
  
  const user: UserProfile = {
    username: "john_doe",
    email: "john@example.com",
    age: 25,
    firstName: "John",
    lastName: "Doe",
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  };

  console.log(`Username: ${user.username}`);
  console.log(`Email: ${user.email}`);
  console.log(`Age: ${user.age}`);
  console.log(`Full Name: ${user.getFullName()}`);