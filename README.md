# social-network-kata

Build instructions
``` 
 Download or clone the files.

 npm install jest
 npm run test
```

This project contains a simple mock up of a database of users and their corresponding posts. It mimics data that might be found on a social media platform. The functions included allow a user to view posts associated with their own account (id based), another's account (also id based), as well as all users that have been followed. For the scope of the project all users are considered 'followed' at this time.

Functions were designed with Jest and TDD as well as refactoring the basic functionality such as creating a helper function for finding posts by user id. I did not add any user-facing functionality at this time. The functions return arrays of user data for usage in front-facing applications.