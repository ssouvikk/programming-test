const getWordScore = (string) => {
    let val = 0
    if (string && !isNaN(string)) val = 4
    else if (string && string.length > 7) val = 3
    else if (string && string.length < 5) val = 0
    else if (string) val = 1
    // console.log(string, val)
    return val
}

const getAlphanumaricArr = (string) => string.replace(/\s+/g, ' ').trim().split(' ').map(item => item.match(/[a-z0-9]/gi) ? item.match(/[a-z0-9]/gi).join('') : '')


const calculateScore = (response, correctAns) => {
    let maxScore = 0
    let candidateScore = 0

    //removing extra spaces and special charecters (only alphanumaric is acceptable)
    const correctAnsArr = getAlphanumaricArr(correctAns)
    const responseArr = getAlphanumaricArr(response)

    //calculating max score
    correctAnsArr.forEach(item => maxScore += getWordScore(item))

    //calculating candidate score
    responseArr.forEach(item => {
        if (item && correctAnsArr.indexOf(item) > -1) candidateScore += getWordScore(item)
    });
    
    //when candidate score in more than max score
    if (candidateScore > maxScore) candidateScore = maxScore

    console.log(`Point scored: ${(candidateScore / maxScore * 100).toFixed(2)}%`)
}

/* 
Error in sample data:
calendar will have score 3 but 1 provided


Error in overall system:
one can have score more than max score (fixed)
one can have huge score by just using same charecter
*/

calculateScore('There is in a day 40. 40 40 40 40. 40', 'There  1a a1 are%%%%%%%%%%%% twenty-four hours in a day, 30 days in a month, and 12 months in the calendar year. aaaaaa 40% .')
