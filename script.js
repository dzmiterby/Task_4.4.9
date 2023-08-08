// Register a new user
// https://blog.kata.academy/api/users

// запрос
// {
//     "user": {
//       "username": "dzm23",
//       "email": "dzm23@gmail.com",
//       "password": "123321"
//     }
// }

// ответ
// {
//     "user": {
//         "username": "dzm23",
//         "email": "dzm23@gmail.com",
//         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDE1OGI0YzMxZGUxMWIwMGJjYmU3YiIsInVzZXJuYW1lIjoiZHptMjMiLCJleHAiOjE2OTY2MjUzMzIsImlhdCI6MTY5MTQ0MTMzMn0.sNNn8m7NaTNGfCKXkUmQ6mE2ltlJpRmyEd9qzYbbrpM"
//     }
// }

// скрин
// https://prnt.sc/SG5uBbvDUd5_


// -----------------------------------------------------------------------------
// Existing user login
// https://blog.kata.academy/api/users/login

// запрос
// {
//     "user": {
//       "email": "dzm23@gmail.com",
//       "password": "123321"
//     }
// }

// ответ
// {
//     "user": {
//         "username": "dzm23",
//         "email": "dzm23@gmail.com",
//         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDE1OGI0YzMxZGUxMWIwMGJjYmU3YiIsInVzZXJuYW1lIjoiZHptMjMiLCJleHAiOjE2OTY2MjU0MzQsImlhdCI6MTY5MTQ0MTQzNH0.CBMMaUGwHLLbtAwapFMW-hNWZj2Zm_Va2V6TES8_y74"
//     }
// }

// скрин
// https://prnt.sc/2LXYinrTnWdJ


// -----------------------------------------------------------------------------
// Get current user
// https://blog.kata.academy/api/user

// запрос
// Authorization
// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDE1OGI0YzMxZGUxMWIwMGJjYmU3YiIsInVzZXJuYW1lIjoiZHptMjMiLCJleHAiOjE2OTY2MjU0MzQsImlhdCI6MTY5MTQ0MTQzNH0.CBMMaUGwHLLbtAwapFMW-hNWZj2Zm_Va2V6TES8_y74

// ответ
// {
//     "user": {
//         "username": "dzm23",
//         "email": "dzm23@gmail.com",
//         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDE1OGI0YzMxZGUxMWIwMGJjYmU3YiIsInVzZXJuYW1lIjoiZHptMjMiLCJleHAiOjE2OTY2MjU3MTMsImlhdCI6MTY5MTQ0MTcxM30.bp8smLnN0wj4_fcj9libTrlHluIMJQGemuSB0vYo9mA"
//     }
// }

// скрин
// https://prnt.sc/d4cwv5rfEX2y