// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
      return `This Monday, I will ${activity}.`
}

function wrapAdjective(phrase1 = "*") {
    return function(phrase2 = "special"){
        return `You are ${phrase1}${phrase2}${phrase1}!`
    }
}