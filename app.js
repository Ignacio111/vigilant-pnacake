//% BAC = (A x 5.14 / W x r) – .015 x H

/*A = liquid ounces of alcohol consumed
W = a person’s weight in pounds
r = a gender constant of alcohol distribution (.68 for men and .55 for women)*
H = hours elapsed since drinking commenced*/
//oz alc X %alc X 0.075

/*function multi(x,y) {
  return
}*/

//call an object .alc




const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your wheight in pounds? ', (answer) => {
  var w = Number(answer)
  console.log(`Ok, your registerd wheight is:`,w);
  rl.question('What is your gender (m) or (f)?', (answer) =>{
    if('m'=== answer){
      var r = .68
      }
      else{
        var r = .55
      }
      if(r>.55){
        console.log('Registerd as male')
      }
      else {
        console.log('Registerd as female');
      }

      rl.question('How much hours have passed since you began drinking?',(answer)=>{
        var h = Number(answer)
        console.log(h + ' hours have passed since you began drinking');

        rl.question('Which brand have you drank (medalla,michelob,heineken,corona,peroni) ',(answer)=>{
        for  (var i = 0; i < beers.length; i= i + 1) {
          //console.log( JSON.stringify(beers[i]));
          if (answer === beers[i].brand){
            var a = beers[i].alc
          console.log('You have been drinking ' + beers[i].brand);
            var b = beers[i].brand
          var brand = beers[i]
          }
        }
          rl.question('How many '+ b +' have you drank?', (answer) => {
            var quantity = Number(answer)
            console.log(`You have dranked`,quantity,b);

        rl.question('Where they '+ b + ' bottles or cans?', (answer) => {
          var oz = 0
          if(answer === 'bottles'){
            var bottle=brand.oz.bottle
            oz = brand.oz.bottle
            //(test)console.log(bottle);
          }
          else{
            var can =brand.oz.can
            oz = brand.oz.can
            //(test)console.log(can);
          }

var o = a*oz
 o = o*0.05
 o = o*quantity

//console.log((o *5.14  / w * r) - .015 * h);
var bac = (((o *5.14)  /( w * r)) - .015 * h);
console.log('Your BAC is at an estimate of:',bac/8);

var myfunction = function(bac){
  if(bac>.08){
    console.log('your nearest uber is 5 minutes away');
  }
}

myfunction(bac)
//console.log(bac/7);
//(BAC formula)((o *5.14  / w * r) - .015 * h);

  rl.close();
        })
      })
    })
   })
  })
})


// medalla
var beer1 = {
  brand:'medalla',
    alc: 4.2,
    oz: {
        can:10,
        bottle:12
    },
    //doubleAlc: this.alc * 2
}
// michelob
var beer2 = {
  brand:'michelob',
    alc: 4.2,
    oz: {
        can:12,
        bottle:12,
      //  aluminum-bottle: .16,
    }
}
// heineken
var beer3 = {
  brand:'heineken',
  alc:5.4,
    oz:{
    can:8.5,
    bottle:12,

    }
  }
// corona
var beer4 = {
  brand:'corona',
    alc:4.6,
    oz:{
      can:12,
      bottle:12,
      }
    }
// peroni
  var beer5 = {
    brand:'peroni',
    alc:5.1,
    oz:{
      can:10,
      bottle:11.2,
      }
    }

var beers = [beer1,beer2,beer3,beer4,beer5]



//how many have you had y eso multiplicarlo por las OZ


//var BAC = (a * 5.14 / w * r) - .015 * h
//console.log(user.beers[1])
