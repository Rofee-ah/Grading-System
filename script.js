
    function button(){
        var test1 = Number (document.getElementById('input').value)
        var test2 = Number (document.getElementById('inputs').value)
        var test3 = Number(document.getElementById('inputss').value)
    
        var tesst= document.getElementById("total").value= test1 + test2 + test3
        document.getElementById('total').value=tesst
    }
    function buttons(){
        var tes1 = Number (document.getElementById('math').value)
        var tes2 = Number (document.getElementById('maths').value)
        var tes3 = Number(document.getElementById('mathss').value)
    
        var tes= document.getElementById("totals").value= tes1 + tes2 + tes3
        document.getElementById('totals').value=tes
    }
    
    
    function biology(){
        var bio1 = Number (document.getElementById('bio').value)
        var bio2 = Number (document.getElementById('bios').value)
        var bio3 = Number(document.getElementById('bioss').value)
    
        var bio = document.getElementById("logy").value= bio1 + bio2 + bio3
        document.getElementById('logy').value=bio
    }
    
    
    function agric(){
        var agric1 = Number (document.getElementById('agric').value)
        var agric2 = Number (document.getElementById('agrics').value)
        var agric3 = Number(document.getElementById('agricss').value)
    
        var cull= document.getElementById("culture").value= agric1 + agric2 + agric3
        document.getElementById('culture').value=cull
    }
    
    
    function physics(){
        var phy1 = Number (document.getElementById('phy').value)
        var phy2 = Number (document.getElementById('phys').value)
        var phy3 = Number(document.getElementById('physs').value)
    
        var phy= document.getElementById("sics").value= phy1 + phy2 + phy3
        document.getElementById('sics').value=phy
    }
    
    
    function chemistry(){
        var chem1 = Number (document.getElementById('chem').value)
        var chem2 = Number (document.getElementById('chems').value)
        var chem3 = Number(document.getElementById('chemss').value)
    
        var chem= document.getElementById("try").value= chem1 + chem2 + chem3
        document.getElementById('try').value=chem
    }
    function economics(){
        var eco1 = Number (document.getElementById('eco').value)
        var eco2 = Number (document.getElementById('ecos').value)
        var eco3 = Number(document.getElementById('ecoss').value)
    
        var eco= document.getElementById("mics").value= eco1 + eco2 + eco3
        document.getElementById('mics').value=eco
    }
    
    
    function pratical(){
        var pra1 = Number (document.getElementById('pra').value)
        var pra2 = Number (document.getElementById('pras').value)
        var pra3 = Number(document.getElementById('prass').value)
    
        var pra= document.getElementById("cal").value= pra1 + pra2 + pra3
        document.getElementById('cal').value=pra
    }
    
    
    function foodsci(){
        var food1 = Number (document.getElementById('food').value)
        var food2 = Number (document.getElementById('foods').value)
        var food3 = Number(document.getElementById('foodss').value)
    
        var foodd= document.getElementById("science").value= food1 + food2 + food3
        document.getElementById('science').value=foodd
    }
    
    
    function home(){
        var home1 = Number (document.getElementById('home').value)
        var home2 = Number (document.getElementById('homes').value)
        var home3 = Number(document.getElementById('homess').value)
    
        var hom0= document.getElementById("ecoo").value= home1 + home2 + home3
        document.getElementById('ecoo').value=hom0
    }
    function education(){
        var edu1 = Number (document.getElementById('edu').value)
        var edu2 = Number (document.getElementById('edus').value)
        var edu3 = Number(document.getElementById('eduss').value)
    
        var edu= document.getElementById("cation").value= edu1 + edu2 + edu3
        document.getElementById('cation').value=edu
    }
    
    
    function geography(){
        var geo1 = Number (document.getElementById('geo').value)
        var geo2 = Number (document.getElementById('geos').value)
        var geo3 = Number(document.getElementById('geoss').value)
    
        var geo= document.getElementById("graphy").value= geo1 + geo2 + geo3
        document.getElementById('graphy').value=geo
    }
    
    
    function computer(){
        var com1 = Number (document.getElementById('com').value)
        var com2 = Number (document.getElementById('coms').value)
        var com3 = Number(document.getElementById('comss').value)
    
        var com= document.getElementById("puter").value= com1 + com2 + com3
        document.getElementById('puter').value=com
    }
    function final(){
    var fin2 =document.getElementById('totals').value 
    var fin3=document.getElementById('logy').value 
    var fin4 =document.getElementById('culture').value 
    var fin5 =document.getElementById('sics').value 
    var fin6 =document.getElementById('try').value 
    var fin7 =document.getElementById('mics').value 
    var fin8 =document.getElementById('cal').value 
    var fin9 =document.getElementById('science').value
    var fin10 =document.getElementById('ecoo').value 
    var fin11 =document.getElementById('cation').value 
    var fin12 =document.getElementById('graphy').value 
    var fin1 =document.getElementById('total').value
    var fin13 =document.getElementById('puter').value 

    var fin14 =  document.getElementById('inp1').value = 'Your OverAll Score is' + " " + (eval(fin1) +  eval(fin2) +  eval(fin3) +  eval(fin4) +  eval(fin5) +  eval(fin6) +  eval(fin7) +  eval(fin8) +  eval(fin9) +  eval(fin10) +  eval(fin11) +  eval(fin12) +  eval(fin13))
    document.getElementById('inp1').innerHTML = 'Your OverAll Score is' + fin14
    
}

function average(){
    var fin2 =document.getElementById('totals').value 
    var fin3=document.getElementById('logy').value 
    var fin4 =document.getElementById('culture').value 
    var fin5 =document.getElementById('sics').value 
    var fin6 =document.getElementById('try').value 
    var fin7 =document.getElementById('mics').value 
    var fin8 =document.getElementById('cal').value 
    var fin9 =document.getElementById('science').value
    var fin10 =document.getElementById('ecoo').value 
    var fin11 =document.getElementById('cation').value 
    var fin12 =document.getElementById('graphy').value 
    var fin1 =document.getElementById('total').value
    var fin13 =document.getElementById('puter').value 

    var fin14 =  document.getElementById('avera').value = 'Your Average Score is ' + " " + Math.round(((eval(fin1) +  eval(fin2) +  eval(fin3) +  eval(fin4) +  eval(fin5) +  eval(fin6) +  eval(fin7) +  eval(fin8) +  eval(fin9) +  eval(fin10) +  eval(fin11) +  eval(fin12) +  eval(fin13))/13))

   
}

function grade(){
    var fin2 =document.getElementById('totals').value 
    var fin3=document.getElementById('logy').value 
    var fin4 =document.getElementById('culture').value 
    var fin5 =document.getElementById('sics').value 
    var fin6 =document.getElementById('try').value 
    var fin7 =document.getElementById('mics').value 
    var fin8 =document.getElementById('cal').value
    var fin9 =document.getElementById('science').value
    var fin10 =document.getElementById('ecoo').value 
    var fin11 =document.getElementById('cation').value 
    var fin12 =document.getElementById('graphy').value 
    var fin1 =document.getElementById('total').value
    var fin13 =document.getElementById('puter').value 

    var don =  document.getElementById('grad').innerHTML = ( Math.round(((eval(fin1) +  eval(fin2) +  eval(fin3) +  eval(fin4) +  eval(fin5) +  eval(fin6) +  eval(fin7) +  eval(fin8) +  eval(fin9) +  eval(fin10) +  eval(fin11) +  eval(fin12) +  eval(fin13))/13)))

    if (don >= 70){
        document.getElementById('grad').value = 'Congratulation Your Grade is A'
    }else if(don > 60 && don < 70){
        document.getElementById('grad').value = 'You Score B'
    }else if(don > 50 && don< 60){
        document.getElementById('grad').value = 'You Score C'
    }else if(don> 40 && don< 50){
        document.getElementById('grad').value = 'You Score D'
    }else{
        document.getElementById('grad').value= 'You Failed You Scored F'
    }
}

function student(){
    var b = document.getElementById('fullname').value
    var c = document.getElementById('dent').value= b
    document.getElementById('dent').value = c

}

function overview(){
    var fin2 =document.getElementById('totals').value 
    var fin3=document.getElementById('logy').value 
    var fin4 =document.getElementById('culture').value 
    var fin5 =document.getElementById('sics').value 
    var fin6 =document.getElementById('try').value 
    var fin7 =document.getElementById('mics').value 
    var fin8 =document.getElementById('cal').value 
    var fin9 =document.getElementById('science').value
    var fin10 =document.getElementById('ecoo').value 
    var fin11 =document.getElementById('cation').value 
    var fin12 =document.getElementById('graphy').value 
    var fin1 =document.getElementById('total').value
    var fin13 =document.getElementById('puter').value 

    var don=  document.getElementById('view').value = ( Math.round(((eval(fin1) +  eval(fin2) +  eval(fin3) +  eval(fin4) +  eval(fin5) +  eval(fin6) +  eval(fin7) +  eval(fin8) +  eval(fin9) +  eval(fin10) +  eval(fin11) +  eval(fin12) +  eval(fin13))/13)))

    if (don >= 70){
        document.getElementById('view').value = 'Excellent Result'
    }else if(don > 60 && don < 70){
        document.getElementById('view').value = 'A Very Good Result'
    }else if(don > 50 && don< 60){
        document.getElementById('view').value = 'Average Result,Try Harder'
    }else if(don> 40 && don< 50){
        document.getElementById('view').value = 'A fair Result Put more Effort'
    }else{
        document.getElementById('view').value= 'You Can Do Better, Put more Effort'
    }
}