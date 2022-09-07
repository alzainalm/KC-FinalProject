 src="https://code.jquery.com/jquery-3.6.1.js" 
type='text/javascript'
$(window).on('scroll',function(){
    if($(window).scrolltip()){
        $('nav').addClass('color');
    }
    else{
        $('nav').removeClass('color');
    }
})

let Fictionbooks = [
{name:'shatter me', rating:'4.7/5', 'Author': 'Tahereh Mafi',imageLocation : 'shatter me.jpg'},
{name:'Unravel me', rating:'4.2/5', 'Author': 'Tahereh Mafi', imageLocation : 'unravel me.jpg'},

]
