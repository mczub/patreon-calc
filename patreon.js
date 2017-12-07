$(document).ready(function(){
    var valueChange = function(value){
        var pledge = parseInt(value.newValue);
        var pledgeTotal = (pledge - 0.35)/1.029
        $('#oldValue').text('$' + pledge);
        $('#pledge-new').text('$' + ((pledge * 1.029) + 0.35).toFixed(2));
        $('#pledge-new-total').text('$' + (pledgeTotal).toFixed(2));
        $('#creator-old-7').text('$' + (pledge * 0.88).toFixed(2));
        $('#creator-old-7-total').text('$' + (pledge * 0.88).toFixed(2));
        $('#creator-old-15').text('$' + (pledge * 0.80).toFixed(2));
        $('#creator-old-15-total').text('$' + (pledge * 0.80).toFixed(2));
        $('#creator-new').text('$' + (pledge * 0.95).toFixed(2));
        $('#creator-new-total').text('$' + (pledgeTotal * 0.95).toFixed(2));
        $('#creator-percentage-new').text(((100 * pledge * 0.95) / ((pledge * 1.029) + 0.35)).toFixed(2) + '%');
        $('#creator-percentage-new-total').text(((100 * pledgeTotal * 0.95) / ((pledgeTotal * 1.029) + 0.35)).toFixed(2) + '%');
    }
    var slider = new Slider('#ex1', {
        formatter: function(value) {
            return 'Current value: $' + value;
        }
    });
    slider.on('change', valueChange);
});