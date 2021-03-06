const team = require('../index.js');

function generateHTML(team) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dev Team</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
        <link rel="stylesheet" href="./style.css" />
      </head>
    
      <body>
        <!--Navbar-->
        <header>
            <nav class="navbar bg-danger mb-3 p-3 align-items-center">
              <a class="navbar-brand">Development Team</a>
            </nav>
        </header>
    
        <main class="container">
            <div class="d-flex align-items-center justify-content-around">
              <div class = "row">
                <div class = col-sm>
        ${generateTeamCards(team)}
                </div>
              </div>
        </main>
    `
    };

    function generateTeamCards(team)
    {
      console.log(team);
        let tm = []

        team.forEach(teamMember => {
            if (teamMember.getRole() === "Manager"){
              console.log(teamMember);
            tm.push(`
    <div class="card m-1">
      <div class="card-header bg-light">
        <h3 class="card-title">${teamMember.name}</h3>
        <p>Manager</p>
      </div>
    <div class="card-body" id="Manager">
        <ul class="list-group">
          <li class="list-group-item"><strong>ID: </strong>${teamMember.id}</li>
          <li class="list-group-item">
            <strong>Email: ${teamMember.email}</strong>
          </li>
          <li class="list-group-item"><strong>Office No. </strong>${teamMember.officeNum}</li>
        </ul>  
    </div>`)
  }
    else if(teamMember.getRole() === "Engineer"){
        tm.push(`<div class="card m-1">
        <div class="card-header bg-primary">
          <h3 class="card-title">${teamMember.name}</h3>
          <p>Engineer</p>
        </div>
        <div class="card-body" id="Engineer">
          <ul class="list-group">
            <li class="list-group-item"><strong>ID: </strong>${teamMember.id}</li>
            <li class="list-group-item">
              <strong>Email: ${teamMember.email}</strong>
            </li>
            <li class="list-group-item"><strong>Github </strong>${teamMember.github}</li>
          </ul>
        </div>`)
    }
    else if(teamMember.getRole() === "Intern"){
      tm.push(`<div class="card m-1">
      <div class="card-header bg-secondary">
        <h3 class="card-title">${teamMember.name}</h3>
        <p>Intern</p>
      </div>
      <div class="card-body" id="Intern">
        <ul class="list-group">
          <li class="list-group-item"><strong>ID: </strong>${teamMember.id}</li>
          <li class="list-group-item">
            <strong>Email: ${teamMember.email}</strong>
          </li>
          <li class="list-group-item"><strong>School: </strong>${teamMember.school}</li>
        </ul>
      </div>`)
  }
        })

        return tm.join("")


    }
    module.exports = generateHTML;

    //loop through the teams
    //check if its a manager
    //write manager card
    //repeat check for engineer and intern