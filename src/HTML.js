// const Manager = require('../lib/Manager');
// const Engineer = require('../lib/engineer'); 
// const Intern = require('../lib/intern');

// function addmem(employee) {
//     var cardContainer = ''
//     employee.addmem(data => {
//         switch (data.getRole()) {
//             case 'Manager':
//                 cardContainer += `
//                 <div class="card" style="width: 16rem;">
//                 <div class="card-header">${data.getName()}
//                   <div class="card-subheader mb-2 text-muted">${data.getRole()}</div>
//                 </div>
//                 <ul class="list-group list-group-flush">
//                   <li class="list-group-item">Id:${data.getId()} </li>
//                   <li class="list-group-item">Office number:${data.getOfficeNumber()} </li>
//                   <li class="list-group-item">Email:<a href="${data.getEmail()}" class="card-link">${data.getEmail()}</a></li>
//                 </ul>
//               </div>
//               `
//                 break;
        
//             case 'Engineer':
//                 cardContainer += `
//                 <div class="card" style="width: 16rem;">
//                 <div class="card-header">${data.getName()}
//                   <div class="card-subheader mb-2 text-muted">${data.getRole()}</div>
//                 </div>
//                 <ul class="list-group list-group-flush">
//                   <li class="list-group-item">Id:${data.getId()} </li>
//                   <li class="list-group-item">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
//                   <li class="list-group-item">GithubProfile: <a href="https://github.com/${data.getGitHub()}" target="_blank">${data.getGitHub()}</a></li>
//                 </ul>
//               </div>
//               `
//                 break;

//             case 'Intern':
//                 cardContainer += `
//                 <div class="card" style="width: 16rem;">
//                 <div class="card-header">${data.getName()}
//                   <div class="card-subheader mb-2 text-muted">${data.getRole()}</div>
//                 </div>
//                 <ul class="list-group list-group-flush">
//                   <li class="list-group-item">Id:${data.getId()} </li>
//                   <li class="list-group-item">Id:${data.getSchool()}</li>
//                   <li class="list-group-item">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></li>
//                 </ul>
//               </div>
//               `
//                 break;
//         }
//     });
//     return cardContainer;
// }

// const createTeam = team=> {
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Team Profile</title>
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
//       </head>
//     <body>
//       <div class="card" style="width: 16rem;">
//         <div class="card-header">${data.getName()}
//           <div class="card-subheader mb-2 text-muted">${data.getRole()}</div>
//         </div>
//         <div class="row">${addmem(employee)}</div>
//       </div>
//             <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
//         </body>
//         </html>
//            `
// }
// module.exports = createTeam();