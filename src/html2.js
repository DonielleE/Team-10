const createTeam = team => {
const generateMananager = manager => {
    return `
    <div class="card" style="width: 16rem;">
    <div class="card-header">${manager.getName()}
      <div class="card-subheader mb-2 text-muted">${manager.getRole()}</div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id:${manager.getId()} </li>
      <li class="list-group-item">Office number:${manager.getOfficeNumber()} </li>
      <li class="list-group-item">Email:<a href="${manager.getEmail()}" class="card-link">${manager.getEmail()}</a></li>
    </ul>
  </div>
  `
}
const generateEngineer = en => {
    return `
    <div class="card" style="width: 16rem;">
    <div class="card-header">${en.getName()}
      <div class="card-subheader mb-2 text-muted">${en.getRole()}</div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id:${en.getId()} </li>
      <li class="list-group-item">Email:<a href="${en.getEmail()}" class="card-link">${en.getEmail()}</a></li>
      <li class="list-group-item">GitHub:${en.getGithub()} </li>
    </ul>
  </div>
  `
}

const generateIntern = intern => {
    return `
    <div class="card" style="width: 16rem;">
    <div class="card-header">${intern.getName()}
      <div class="card-subheader mb-2 text-muted">${intern.getRole()}</div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id:${intern.getId()} </li>
      <li class="list-group-item">School:${intern.getSchool()} </li>
      <li class="list-group-item">Email:<a href="${intern.getEmail()}" class="card-link">${intern.getEmail()}</a></li>
    </ul>
  </div>
  `
}
const html = []
html.push(team
    .filter(employee =>  employee.getRole() ==="Manager")
    .map(manager => generateMananager(manager)))

    html.push(team
        .filter(employee =>  employee.getRole() ==="Engineer")
        .map(en => generateEngineer(en))
        .join(""))

        html.push(team
            .filter(employee =>  employee.getRole() ==="Intern")
            .map(intern => generateIntern(intern))
            .join(""))

            return html.join("")
}
module.exports = team => {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
          </head>
        <body>
        <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${createTeam(team)}
            </div>
        </div>
    </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
            </body>
            </html>
               `
}


