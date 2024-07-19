let diodeColor = 'black'
let clearColor = 'white'
let msg = '';


function clearScreen(){
    $('.diode').css('backgroundColor', clearColor)
}
function uptadeScreen(
    one_one, one_two, one_three, one_four, one_five,
    two_one, two_two, two_three, two_four, two_five,
    three_one, three_two, three_three, three_four, three_five,
    four_one, four_two, four_three, four_four, four_five,
    five_one, five_two, five_three, five_four, five_five,
    six_one, six_two, six_three, six_four, six_five,
    seven_one, seven_two, seven_three, seven_four, seven_five,
){
    clearScreen()
    // checking for symbol
    // one level
    if(one_one == '#'){ $('#diode1_1').css('backgroundColor', diodeColor) } else if(one_one == ' ') { $('#diode1_1').css('backgroundColor', clearColor) }
    if(one_two == '#'){ $('#diode1_2').css('backgroundColor', diodeColor) } else if(one_two == ' ') { $('#diode1_2').css('backgroundColor', clearColor) }
    if(one_three == '#'){ $('#diode1_3').css('backgroundColor', diodeColor) } else if(one_three == ' ') { $('#diode1_3').css('backgroundColor', clearColor) }
    if(one_four == '#'){ $('#diode1_4').css('backgroundColor', diodeColor) } else if(one_four == ' ') { $('#diode1_4').css('backgroundColor', clearColor) }
    if(one_five == '#'){ $('#diode1_5').css('backgroundColor', diodeColor) } else if(one_five == ' ') { $('#diode1_5').css('backgroundColor', clearColor) }
    // two level
    if(two_one == '#'){ $('#diode2_1').css('backgroundColor', diodeColor) } else if(one_one == ' ') { $('#diode2_1').css('backgroundColor', clearColor) }
    if(two_two == '#'){ $('#diode2_2').css('backgroundColor', diodeColor) } else if(one_two == ' ') { $('#diode2_2').css('backgroundColor', clearColor) }
    if(two_three == '#'){ $('#diode2_3').css('backgroundColor', diodeColor) } else if(one_three == ' ') { $('#diode2_3').css('backgroundColor', clearColor) }
    if(two_four == '#'){ $('#diode2_4').css('backgroundColor', diodeColor) } else if(one_four == ' ') { $('#diode2_4').css('backgroundColor', clearColor) }
    if(two_five == '#'){ $('#diode2_5').css('backgroundColor', diodeColor) } else if(one_five == ' ') { $('#diode2_5').css('backgroundColor', clearColor) }
    // three level
    if(three_one == '#'){ $('#diode3_1').css('backgroundColor', diodeColor) } else if(one_one == ' ') { $('#diode3_1').css('backgroundColor', clearColor) }
    if(three_two == '#'){ $('#diode3_2').css('backgroundColor', diodeColor) } else if(one_two == ' ') { $('#diode3_2').css('backgroundColor', clearColor) }
    if(three_three == '#'){ $('#diode3_3').css('backgroundColor', diodeColor) } else if(one_three == ' ') { $('#diode3_3').css('backgroundColor', clearColor) }
    if(three_four == '#'){ $('#diode3_4').css('backgroundColor', diodeColor) } else if(one_four == ' ') { $('#diode3_4').css('backgroundColor', clearColor) }
    if(three_five == '#'){ $('#diode3_5').css('backgroundColor', diodeColor) } else if(one_five == ' ') { $('#diode3_5').css('backgroundColor', clearColor) }
    // four level
    if(four_one == '#'){ $('#diode4_1').css('backgroundColor', diodeColor) } else if(one_one == ' ') { $('#diode4_1').css('backgroundColor', clearColor) }
    if(four_two == '#'){ $('#diode4_2').css('backgroundColor', diodeColor) } else if(one_two == ' ') { $('#diode4_2').css('backgroundColor', clearColor) }
    if(four_three == '#'){ $('#diode4_3').css('backgroundColor', diodeColor) } else if(one_three == ' ') { $('#diode4_3').css('backgroundColor', clearColor) }
    if(four_four == '#'){ $('#diode4_4').css('backgroundColor', diodeColor) } else if(one_four == ' ') { $('#diode4_4').css('backgroundColor', clearColor) }
    if(four_five == '#'){ $('#diode4_5').css('backgroundColor', diodeColor) } else if(one_five == ' ') { $('#diode4_5').css('backgroundColor', clearColor) }
    // five level
    if(five_one == '#'){ $('#diode5_1').css('backgroundColor', diodeColor) } else if(one_one == ' ') { $('#diode5_1').css('backgroundColor', clearColor) }
    if(five_two == '#'){ $('#diode5_2').css('backgroundColor', diodeColor) } else if(one_two == ' ') { $('#diode5_2').css('backgroundColor', clearColor) }
    if(five_three == '#'){ $('#diode5_3').css('backgroundColor', diodeColor) } else if(one_three == ' ') { $('#diode5_3').css('backgroundColor', clearColor) }
    if(five_four == '#'){ $('#diode5_4').css('backgroundColor', diodeColor) } else if(one_four == ' ') { $('#diode5_4').css('backgroundColor', clearColor) }
    if(five_five == '#'){ $('#diode5_5').css('backgroundColor', diodeColor) } else if(one_five == ' ') { $('#diode5_5').css('backgroundColor', clearColor) }
    // six level
    if(six_one == '#'){ $('#diode6_1').css('backgroundColor', diodeColor) } else if(one_one == ' ') { $('#diode6_1').css('backgroundColor', clearColor) }
    if(six_two == '#'){ $('#diode6_2').css('backgroundColor', diodeColor) } else if(one_two == ' ') { $('#diode6_2').css('backgroundColor', clearColor) }
    if(six_three == '#'){ $('#diode6_3').css('backgroundColor', diodeColor) } else if(one_three == ' ') { $('#diode6_3').css('backgroundColor', clearColor) }
    if(six_four == '#'){ $('#diode6_4').css('backgroundColor', diodeColor) } else if(one_four == ' ') { $('#diode6_4').css('backgroundColor', clearColor) }
    if(six_five == '#'){ $('#diode6_5').css('backgroundColor', diodeColor) } else if(one_five == ' ') { $('#diode6_5').css('backgroundColor', clearColor) }
    // seven level
    if(seven_one == '#'){ $('#diode7_1').css('backgroundColor', diodeColor) } else if(one_one == ' ') { $('#diode7_1').css('backgroundColor', clearColor) }
    if(seven_two == '#'){ $('#diode7_2').css('backgroundColor', diodeColor) } else if(one_two == ' ') { $('#diode7_2').css('backgroundColor', clearColor) }
    if(seven_three == '#'){ $('#diode7_3').css('backgroundColor', diodeColor) } else if(one_three == ' ') { $('#diode7_3').css('backgroundColor', clearColor) }
    if(seven_four == '#'){ $('#diode7_4').css('backgroundColor', diodeColor) } else if(one_four == ' ') { $('#diode7_4').css('backgroundColor', clearColor) }
    if(seven_five == '#'){ $('#diode7_5').css('backgroundColor', diodeColor) } else if(one_five == ' ') { $('#diode7_5').css('backgroundColor', clearColor) }

}
  
$('#add').click(function start(){
    let message = $('#message').val()
    let i = 0
    let stop = false;
    let mainInterval = setInterval(() => {
        screen();
        if (stop) {
            clearInterval(mainInterval);
        }
    }, 500); 

    function screen(){
        if(i==message.length){
            setTimeout(function(){
                clearScreen()
            }, 500)
            $('#message').val('')
            stop = true
            return
        }
        if(i<message.length){
            switch (message[i]){
                case 'a':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ',' ',' ',' ',' ',
                        ' ',' ',' ','#',' ',
                        ' ',' ','#','#',' ',
                        ' ','#',' ','#',' ',
                        ' ','#','#','#','#',
                        ' ',' ',' ',' ',' ',
                    ) 
                    break;
                case 'b':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ','#',' ',' ',' ',
                        ' ','#',' ',' ',' ',
                        ' ','#','#',' ',' ',
                        ' ','#',' ','#',' ',
                        ' ','#','#','#',' ',
                        ' ',' ',' ',' ',' ',
                    )
                break;
                case 'c':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ',' ',' ',' ',' ',
                        ' ',' ','#','#',' ',
                        ' ','#',' ',' ',' ',
                        ' ','#',' ',' ',' ',
                        ' ',' ','#','#',' ',
                        ' ',' ',' ',' ',' ',
                    ) 
                    break;
                case 'd':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ',' ',' ','#',' ',
                        ' ',' ',' ','#',' ',
                        ' ',' ','#','#',' ',
                        ' ','#',' ','#',' ',
                        ' ','#','#','#',' ',
                        ' ',' ',' ',' ',' ',
                    ) 
                break;
                case 'e':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ','#','#','#',' ',
                        ' ','#',' ','#',' ',
                        ' ','#','#',' ',' ',
                        ' ','#',' ',' ',' ',
                        ' ',' ','#','#',' ',
                        ' ',' ',' ',' ',' ',
                    ) 
                break
                case 'f':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ',' ','#','#',' ',
                        ' ',' ','#',' ',' ',
                        ' ','#','#','#',' ',
                        ' ',' ','#',' ',' ',
                        ' ',' ','#',' ',' ',
                        ' ',' ',' ',' ',' ',
                    ) 
                break;
                case 'g':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ',' ',' ',' ',' ',
                        ' ',' ','#',' ',' ',
                        ' ','#',' ','#',' ',
                        ' ',' ','#',' ',' ',
                        ' ','#',' ','#',' ',
                        ' ',' ','#','#',' ',
                    ) 
                    break;
                case 'h':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ','#',' ',' ',' ',
                        ' ','#',' ',' ',' ',
                        ' ','#','#',' ',' ',
                        ' ','#',' ','#',' ',
                        ' ','#',' ','#',' ',
                        ' ',' ',' ',' ',' ',
                    )  
                break;
                case 'i':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ',' ','#',' ',' ',
                        ' ',' ',' ',' ',' ',
                        ' ',' ','#',' ',' ',
                        ' ',' ','#',' ',' ',
                        ' ',' ','#',' ',' ',
                        ' ',' ',' ',' ',' ',
                    )  
                break;
                case 'j':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ',' ',' ','#',' ',
                        ' ',' ',' ',' ',' ',
                        ' ',' ',' ','#',' ',
                        ' ',' ',' ','#',' ',
                        ' ','#',' ','#',' ',
                        ' ',' ','#','#',' ',
                    )  
                break;
                case 'k':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ','#',' ',' ',' ',
                        ' ','#',' ',' ',' ',
                        ' ','#',' ','#',' ',
                        ' ','#','#',' ',' ',
                        ' ','#',' ','#',' ',
                        ' ',' ',' ',' ',' ',
                    ) 
                break;
                case 'l':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ','#',' ',' ',' ',
                        ' ','#',' ',' ',' ',
                        ' ','#',' ',' ',' ',
                        ' ','#',' ',' ',' ',
                        ' ','#',' ',' ',' ',
                        ' ',' ',' ',' ',' ',
                    ) 
                break;
                case 'm':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ',' ',' ',' ',' ',
                        ' ','#',' ','#',' ',
                        '#',' ','#',' ','#',
                        '#',' ','#',' ','#',
                        '#',' ','#',' ','#',
                        ' ',' ',' ',' ',' ',
                    ) 
                break;
                case 'n':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ','#',' ',' ',' ',
                        ' ','#','#',' ',' ',
                        ' ','#',' ','#',' ',
                        ' ','#',' ','#',' ',
                        ' ','#',' ','#',' ',
                        ' ',' ',' ',' ',' ',
                    ) 
                break;
                case 'o':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ',' ',' ',' ',' ',
                        ' ',' ',' ',' ',' ',
                        ' ',' ','#',' ',' ',
                        ' ','#',' ','#',' ',
                        ' ',' ','#',' ',' ',
                        ' ',' ',' ',' ',' ',
                    ) 
                break;
                case 'p':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ',' ',' ',' ',' ',
                        ' ','#','#',' ',' ',
                        ' ','#',' ','#',' ',
                        ' ','#','#',' ',' ',
                        ' ','#',' ',' ',' ',
                        ' ','#',' ',' ',' ',
                    ) 
                break;
                case 'q':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ',' ',' ',' ',' ',
                        ' ',' ','#','#',' ',
                        ' ','#',' ','#',' ',
                        ' ',' ','#','#',' ',
                        ' ',' ',' ','#',' ',
                        ' ',' ',' ','#',' ',
                    ) 
                break;
                case 'r':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ','#',' ',' ',' ',
                        ' ','#','#',' ',' ',
                        ' ','#',' ','#',' ',
                        ' ','#',' ',' ',' ',
                        ' ','#',' ',' ',' ',
                        ' ',' ',' ',' ',' ',
                    ) 
                break;
                case 's':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ',' ','#','#',' ',
                        ' ','#',' ',' ',' ',
                        ' ',' ','#',' ',' ',
                        ' ',' ',' ','#',' ',
                        ' ','#','#',' ',' ',
                        ' ',' ',' ',' ',' ',
                    ) 
                break;
                case 't':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ',' ','#',' ',' ',
                        ' ',' ','#',' ',' ',
                        ' ','#','#','#',' ',
                        ' ',' ','#',' ',' ',
                        ' ',' ','#','#',' ',
                        ' ',' ',' ',' ',' ',
                    ) 
                break;
                case 'u':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ',' ',' ',' ',' ',
                        ' ','#',' ','#',' ',
                        ' ','#',' ','#',' ',
                        ' ','#',' ','#',' ',
                        ' ',' ','#','#','#',
                        ' ',' ',' ',' ',' ',
                    ) 
                break;
                case 'v':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ',' ',' ',' ',' ',
                        ' ','#',' ','#',' ',
                        ' ','#',' ','#',' ',
                        ' ',' ','#',' ',' ',
                        ' ',' ','#',' ',' ',
                        ' ',' ',' ',' ',' ',
                    ) 
                break;
                case 'w':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ',' ',' ',' ',' ',
                        '#',' ','#',' ','#',
                        '#',' ','#',' ','#',
                        ' ','#',' ','#',' ',
                        ' ','#',' ','#',' ',
                        ' ',' ',' ',' ',' ',
                    ) 
                break;
                case 'x':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ',' ',' ',' ',' ',
                        ' ','#',' ','#',' ',
                        ' ',' ','#',' ',' ',
                        ' ','#',' ','#',' ',
                        ' ','#',' ','#',' ',
                        ' ',' ',' ',' ',' ',
                    ) 
                break;
                case 'y':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ','#',' ','#',' ',
                        ' ','#',' ','#',' ',
                        ' ','#','','#',' ',
                        ' ',' ','#','#',' ',
                        ' ',' ',' ','#',' ',
                        ' ','#','#',' ',' ',
                    ) 
                break;
                case 'z':
                    uptadeScreen(
                        ' ',' ',' ',' ',' ',
                        ' ',' ',' ',' ',' ',
                        ' ','#','#','#',' ',
                        ' ',' ',' ','#',' ',
                        ' ',' ','#',' ',' ',
                        ' ','#','#','#',' ',
                        ' ',' ',' ',' ',' ',
                    ) 
                break;
            }
            i++
        }
    }
    switch(message){
        case '//':
            uptadeScreen(
                ' ',' ',' ',' ',' ',
                ' ','#',' ','#',' ',
                '#','#','#','#','#',
                '#','#','#','#','#',
                ' ','#','#','#',' ',
                ' ',' ','#',' ',' ',
                ' ',' ',' ',' ',' ',
            )
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ',' ',' ',' ',' ',
                    ' ','#',' ','#',' ',
                    ' ','#','#','#',' ',
                    ' ','#','#','#',' ',
                    ' ',' ','#',' ',' ',
                    ' ',' ',' ',' ',' ',
                )
            }, 500);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ','#',' ','#',' ',
                    '#','#','#','#','#',
                    '#','#','#','#','#',
                    ' ','#','#','#',' ',
                    ' ',' ','#',' ',' ',
                    ' ',' ',' ',' ',' ',
                )
            }, 1000);
        break;
        case '||':
            uptadeScreen(
                ' ',' ',' ',' ',' ',
                ' ',' ',' ',' ',' ',
                ' ',' ',' ',' ',' ',
                ' ',' ',' ',' ',' ',
                ' ',' ',' ',' ',' ',
                ' ',' ',' ',' ',' ',
                ' ',' ',' ',' ',' ',
            )
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ',' ',' ',' ','#',
                    ' ',' ',' ',' ','#',
                    ' ',' ',' ',' ','#',
                    ' ',' ',' ',' ','#',
                    ' ',' ',' ',' ','#',
                    ' ',' ',' ',' ',' ',
                )
            }, 200);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ',' ',' ','#',' ',
                    ' ',' ',' ','#',' ',
                    ' ',' ',' ','#',' ',
                    ' ',' ',' ','#',' ',
                    ' ',' ',' ','#',' ',
                    ' ',' ',' ',' ',' ',
                )
            }, 400);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ',' ','#',' ',' ',
                    ' ',' ','#',' ',' ',
                    ' ',' ','#',' ',' ',
                    ' ',' ','#',' ',' ',
                    ' ',' ','#',' ',' ',
                    ' ',' ',' ',' ',' ',
                )
            }, 600);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ','#',' ',' ','#',
                    ' ','#',' ',' ','#',
                    ' ','#',' ',' ','#',
                    ' ','#',' ',' ','#',
                    ' ','#',' ',' ','#',
                    ' ',' ',' ',' ',' ',
                )
            }, 800);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    '#',' ',' ','#',' ',
                    '#',' ',' ','#',' ',
                    '#',' ',' ','#',' ',
                    '#',' ',' ','#',' ',
                    '#',' ',' ','#','#',
                    ' ',' ',' ',' ',' ',
                )
            }, 1000);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ',' ','#',' ',' ',
                    ' ',' ','#',' ',' ',
                    ' ',' ','#',' ',' ',
                    ' ',' ','#',' ',' ',
                    ' ',' ','#','#','#',
                    ' ',' ',' ',' ',' ',
                )
            }, 1200);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ','#',' ',' ',' ',
                    ' ','#',' ',' ',' ',
                    ' ','#',' ',' ',' ',
                    ' ','#',' ',' ',' ',
                    ' ','#','#','#',' ',
                    ' ',' ',' ',' ',' ',
                )
            }, 1400);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    '#',' ',' ',' ',' ',
                    '#',' ',' ',' ','#',
                    '#',' ',' ',' ','#',
                    '#',' ',' ',' ','#',
                    '#','#','#',' ',' ',
                    ' ',' ',' ',' ',' ',
                )
            }, 1600);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ',' ',' ',' ','#',
                    ' ',' ',' ','#',' ',
                    ' ',' ',' ','#',' ',
                    ' ',' ',' ','#',' ',
                    '#','#',' ',' ','#',
                    ' ',' ',' ',' ',' ',
                )
            }, 1800);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ',' ',' ','#',' ',
                    ' ',' ','#',' ','#',
                    ' ',' ','#',' ','#',
                    ' ',' ','#',' ','#',
                    '#',' ',' ','#',' ',
                    ' ',' ',' ',' ',' ',
                )
            }, 2000);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ',' ','#',' ',' ',
                    ' ','#',' ','#',' ',
                    ' ','#',' ','#',' ',
                    ' ','#',' ','#',' ',
                    ' ',' ','#',' ',' ',
                    ' ',' ',' ',' ',' ',
                )
            }, 2200);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ','#',' ',' ','#',
                    '#',' ','#',' ','#',
                    '#',' ','#',' ','#',
                    '#',' ','#',' ',' ',
                    ' ','#',' ',' ',' ',
                    ' ',' ',' ',' ',' ',
                )
            }, 2400);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    '#',' ',' ','#',' ',
                    ' ','#',' ','#',' ',
                    ' ','#',' ','#',' ',
                    ' ','#',' ',' ','#',
                    '#',' ',' ',' ','#',
                    ' ',' ',' ',' ',' ',
                )
            }, 2600);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ',' ','#',' ','#',
                    '#',' ','#',' ','#',
                    '#',' ','#',' ','#',
                    '#',' ',' ','#',' ',
                    ' ',' ',' ','#',' ',
                    ' ',' ',' ',' ',' ',
                )
            }, 2800);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ','#',' ','#',' ',
                    ' ','#',' ','#',' ',
                    ' ','#',' ','#',' ',
                    ' ',' ','#',' ',' ',
                    ' ',' ','#',' ',' ',
                    ' ',' ',' ',' ',' ',
                )
            }, 3000);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    '#',' ','#',' ','#',
                    '#',' ','#',' ','#',
                    '#',' ','#',' ','#',
                    ' ','#',' ',' ','#',
                    ' ','#',' ',' ','#',
                    ' ',' ',' ',' ',' '
                )
            }, 3200);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ','#',' ','#','#',
                    ' ','#',' ','#',' ',
                    ' ','#',' ','#','#',
                    '#',' ',' ','#',' ',
                    '#',' ',' ','#','#',
                    ' ',' ',' ',' ',' '
                )
            }, 3400);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    '#',' ','#','#','#',
                    '#',' ','#',' ',' ',
                    '#',' ','#','#','#',
                    ' ',' ','#',' ',' ',
                    ' ',' ','#','#','#',
                    ' ',' ',' ',' ',' '
                )
            }, 3600);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ','#','#','#',' ',
                    ' ','#',' ',' ',' ',
                    ' ','#','#','#',' ',
                    ' ','#',' ',' ',' ',
                    ' ','#','#','#',' ',
                    ' ',' ',' ',' ',' '
                )
            }, 3800);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    '#','#','#',' ',' ',
                    '#',' ',' ',' ',' ',
                    '#','#','#',' ',' ',
                    '#',' ',' ',' ',' ',
                    '#','#','#',' ',' ',
                    ' ',' ',' ',' ',' '
                )
            }, 4000);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    '#','#',' ',' ',' ',
                    ' ',' ',' ',' ',' ',
                    '#','#',' ',' ',' ',
                    ' ',' ',' ',' ',' ',
                    '#','#',' ',' ',' ',
                    ' ',' ',' ',' ',' '
                )
            }, 4200);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    '#',' ',' ',' ',' ',
                    ' ',' ',' ',' ','#',
                    '#',' ',' ',' ','#',
                    ' ',' ',' ',' ','#',
                    '#',' ',' ',' ',' ',
                    ' ',' ',' ',' ',' '
                )
            }, 4400);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ',' ',' ',' ','#',
                    ' ',' ',' ','#',' ',
                    ' ',' ',' ','#',' ',
                    ' ',' ',' ','#',' ',
                    ' ',' ',' ',' ','#',
                    ' ',' ',' ',' ',' '
                )
            }, 4600);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ',' ',' ','#',' ',
                    ' ',' ','#',' ','#',
                    ' ',' ','#',' ','#',
                    ' ',' ','#',' ','#',
                    ' ',' ',' ','#',' ',
                    ' ',' ',' ',' ',' '
                )
            }, 4800);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ',' ','#',' ',' ',
                    ' ','#',' ','#',' ',
                    ' ','#',' ','#',' ',
                    ' ','#',' ','#',' ',
                    ' ',' ','#','',' ',
                    ' ',' ',' ',' ',' '
                )
            }, 5000);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ','#',' ',' ','#',
                    '#',' ','#',' ','#',
                    '#',' ','#',' ','#',
                    '#',' ','#',' ','#',
                    ' ','#',' ',' ','#',
                    ' ',' ',' ',' ',' '
                )
            }, 5200);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    '#',' ',' ','#',' ',
                    ' ','#',' ','#',' ',
                    ' ','#',' ','#',' ',
                    ' ','#',' ','#',' ',
                    '#',' ',' ','#','#',
                    ' ',' ',' ',' ',' '
                )
            }, 5400);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ',' ','#',' ',' ',
                    '#',' ','#',' ',' ',
                    '#',' ','#',' ',' ',
                    '#',' ','#',' ',' ',
                    ' ',' ','#','#','#',
                    ' ',' ',' ',' ',' '
                )
            }, 5600);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ','#',' ',' ',' ',
                    ' ','#',' ',' ',' ',
                    ' ','#',' ',' ',' ',
                    ' ','#',' ',' ',' ',
                    ' ','#','#','#',' ',
                    ' ',' ',' ',' ',' '
                )
            }, 5800);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    '#',' ',' ',' ','#',
                    '#',' ',' ',' ','#',
                    '#',' ',' ',' ','#',
                    '#',' ',' ',' ','#',
                    '#','#','#',' ','#',
                    ' ',' ',' ',' ',' '
                )
            }, 5800);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ',' ',' ','#','#',
                    ' ',' ',' ','#',' ',
                    ' ',' ',' ','#','#',
                    ' ',' ',' ','#',' ',
                    '#','#',' ','#','#',
                    ' ',' ',' ',' ',' '
                )
            }, 6000);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ',' ','#','#','#',
                    ' ',' ','#',' ',' ',
                    ' ',' ','#','#','#',
                    ' ',' ','#',' ',' ',
                    '#',' ','#','#','#',
                    ' ',' ',' ',' ',' '
                )
            }, 6200);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ','#','#','#',' ',
                    ' ','#',' ',' ',' ',
                    ' ','#','#','#',' ',
                    ' ','#',' ',' ',' ',
                    ' ','#','#','#',' ',
                    ' ',' ',' ',' ',' '
                )
            }, 6400);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    '#','#','#',' ','#',
                    '#',' ',' ',' ','#',
                    '#','#','#',' ','#',
                    '#',' ',' ',' ','#',
                    '#','#','#',' ',' ',
                    ' ',' ',' ',' ',' '
                )
            }, 6600);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    '#','#',' ','#','#',
                    ' ',' ',' ','#',' ',
                    '#','#',' ','#',' ',
                    ' ',' ',' ','#',' ',
                    '#','#',' ',' ','#',
                    ' ',' ',' ',' ',' '
                )
            }, 6800);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    '#',' ','#','#','#',
                    ' ',' ','#',' ',' ',
                    '#',' ','#',' ','#',
                    ' ',' ','#',' ',' ',
                    '#',' ',' ','#','#',
                    ' ',' ',' ',' ',' '
                )
            }, 7000);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ','#','#','#','#',
                    ' ','#',' ',' ',' ',
                    ' ','#',' ','#','#',
                    ' ','#',' ',' ','#',
                    ' ',' ','#','#','#',
                    ' ',' ',' ',' ',' '
                )
            }, 7200);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    '#','#','#','#',' ',
                    '#',' ',' ',' ',' ',
                    '#',' ','#','#',' ',
                    '#',' ',' ','#',' ',
                    ' ','#','#','#',' ',
                    ' ',' ',' ',' ',' '
                )
            }, 7400);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    '#','#','#',' ',' ',
                    ' ',' ',' ',' ',' ',
                    ' ','#','#',' ',' ',
                    ' ',' ','#',' ',' ',
                    '#','#','#',' ',' ',
                    ' ',' ',' ',' ',' '
                )
            }, 7600);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    '#','#',' ',' ',' ',
                    ' ',' ',' ',' ',' ',
                    '#','#',' ',' ',' ',
                    ' ','#',' ',' ',' ',
                    '#','#',' ',' ',' ',
                    ' ',' ',' ',' ',' '
                )
            }, 7800);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    '#',' ',' ',' ',' ',
                    ' ',' ',' ',' ',' ',
                    '#',' ',' ',' ',' ',
                    '#',' ',' ',' ',' ',
                    '#',' ',' ',' ',' ',
                    ' ',' ',' ',' ',' '
                )
            }, 8000);
            setTimeout(() => {
                uptadeScreen(
                    ' ',' ',' ',' ',' ',
                    ' ',' ',' ',' ',' ',
                    ' ',' ',' ',' ',' ',
                    ' ',' ',' ',' ',' ',
                    ' ',' ',' ',' ',' ',
                    ' ',' ',' ',' ',' ',
                    ' ',' ',' ',' ',' '
                )
            }, 8200);
        break;
    }    
})

