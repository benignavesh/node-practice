function average(arr)
{
    var total = 0;
    arr.forEach(function(score)
    {
        total += score;
    });
    var avg = total/scores.length;
    return Math.round(avg);
}

var scores = [90,98,45,70,89,85,45];
console.log(average(scores));