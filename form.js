$(document).ready(function(){
    $('#name, #class, #country').focus(function(){
        $(this).css({'background-color':'blue','color':'white'})
        let nm = $('#name').val();
        $('#getName').html('Name: '+nm);

        let cl = $('#class').val();
        $('#getClass').html('Class: '+cl);

    })
    $('#name, #class, #country').blur(function(){
        $(this).css({'background-color':'white','color':'black'})
    })

    $('#country').change(function(){
        $(this).css({'background-color':'red','color':'white'})
        let a = $(this).val();
        $('#getCountry').html('Selected country: '+a);
    })

    $('#name').select(function(){
        $(this).css({'background-color':'yellow','color':'green'})
    })



    $('#submit').click(function(){
        let cn = $('#name').val()
        let cc = $('#class').val()
        let ccnt = $('#country').val()
        console.log(cn, cc, ccnt);
    })

    $('#myForm').submit(function(){
        alert('Form Submitted');
    })


})

