function projectCreation(input){
    let nameArchitect = (input[0]);
    let numberOfProjects = input[1];
    let needHours = numberOfProjects * 3;
    let greet = (`The architect ${nameArchitect} will need ${needHours} hours to complete ${numberOfProjects} project/s.`)
    console.log(greet);
}