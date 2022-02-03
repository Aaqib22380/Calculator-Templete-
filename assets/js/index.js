$( document ).ready(function() {

    
    $('.btn').on('click',function(){   
        $('#exampleInputText').val($('#exampleInputText').val() + $(this).val());
    })
    $('#clear').click(function(){
        $('#exampleInputText').val(' ');
    })
    $('#press').on('click',function () {
        $('#exampleInputText').val(eval($('#exampleInputText').val()));
    })

});