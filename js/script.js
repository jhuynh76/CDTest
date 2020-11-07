vue = new Vue({
	el: '#vueApp',
	data:{
		txtEmail: '',
		dropdownMake: [
			{value: 'default', name: '--Select Make--'},
			{value: 'audi', name: 'Audi'},
			{value: 'infinity', name: 'Infinity'},
			{value: 'mercedes-benz', name: 'Mercedes Benz'},
			{value: 'subaru', name: 'Subaru'},
			{value: 'volkswagen', name: 'Volkswagen'},
			{value: 'volvo', name: 'Volvo'},
		],

		dropdownModel: [
			{value: 'default', name: '--Select model--'},
			{value: 'v1', name: 'M3'},
			{value: 'v2', name: 'WRX STi'},
			{value: 'v3', name: 'Class S AMG'},
			{value: 'v4', name: 'Civic Si'},
			{value: 'v5', name: 'Audi TT RS'}
		],

		dropdownMileage: [
			{value: 'default', name: '--Select max mileage--'},
			{value: '0', name: '0'},
			{value: '10000', name: '10,000'},
			{value: '20000', name: '20,000'},
			{value: '30000', name: '30,000'},
			{value: '40000', name: '40,000'},		
			{value: '60000', name: '60,000'},		
			{value: '100000', name: '100,000'},		
		],

		dropdownPrice: [
			{value: 'default', name: '--Select max price--'},
			{value: '5000', name: '$5,000'},
			{value: '10000', name: '$10,000'},
			{value: '20000', name: '$20,000'},
			{value: '30000', name: '$30,000'},
			{value: '40000', name: '$40,000'},		
			{value: '60000', name: '$60,000'},		
			{value: '100000', name: '$100,000'},		
		],

		dropdownFilter: [
			{value: 'default', name: 'Sort by'},
			{value: 'v1', name: 'Price (low - high)'},
			{value: 'v2', name: 'Price (High - low)'},
			{value: 'v3', name: 'value (Asc)'},
			{value: 'v4', name: 'value (Desc)'}
		]
	},

	methods:{
		btnSubscribe: function(){
			if (this.txtEmail == ''){
				window.alert('Please enter a valid email address');
			}
			else{
				window.alert('You have been subscribed');
			}
		}
	}
});

/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
# Buttons
# Products Grid filter
--------------------------------------------------------------*/
/*--------------------------------------------------------------
# Buttons
---------------------------------------------------------------*/
$('#menu').click(function(){
	$('#close').show();
	$('.menu-full').show();
});

$('#close').click(function(){
	$(this).hide();
	$('.menu-full').hide();
});

$('#btnList').click(function(){
	$('#productGrid').removeClass('grid');
	$('#productGrid').addClass('list');

	$('#productGrid .cols').removeClass('col-lg-4 col-md-6');
	$('#productGrid .cols').addClass('col-lg-12 col-md-12');
});

$('#btnGrid').click(function(){
	$('#productGrid').addClass('grid');
	$('#productGrid').removeClass('list');

	$('#productGrid .cols').removeClass('col-lg-12 col-md-12');	
	$('#productGrid .cols').addClass('col-lg-4 col-md-6');
});

$('#dropdownFiler').change(function(){
	$('#dropdownFiler option:selected').each(function(){
		var getVal = $(this).val();
		
		if (getVal == 'v1'){
			alert('aa');
		}
		else if (getVal == 'v2'){
			alert('bbbb');
		}
	});
});


/*--------------------------------------------------------------
# Product Grid filter (for header function)
---------------------------------------------------------------*/
$(document).ready(function(){
	// $('#productGrid .cols').hide();
});

$('#productGrid .cols').each(function(){
	var make = $(this).data('make');
	var model = $(this).data('model');
	var bg = $(this).data('img');
	var price = $(this).data('price');
	var date = $(this).data('date');
	var miles = $(this).data('miles');
	var speed = $(this).data('speed');
	
	$(this).click(function(){
		$('header').css( "background-image", "url('" + bg + "')" );
		$('header .info h2').text(make + ' ' + model);
		$('header .info h3').text('$' + price.toLocaleString('en') + ' • ' + date + ' • ' + miles.toLocaleString('en') + ' miles • ' + speed + ' kw (' + Math.round(speed * 1.34) + ') hp');
	});

});

/*--------------------------------------------------------------
# Make filter
---------------------------------------------------------------*/
$('#make').change(function(){
	$('#make option:selected').each(function(){
		var makeFilter = $(this).val();

		$('#productGrid .cols').each(function(){
			var make = $(this).data('make');

			if (make == makeFilter){
				$(this).show();
			}
			else{
				$(this).hide();
			}

		});
	});
});

/*--------------------------------------------------------------
## Price filter
---------------------------------------------------------------*/
$('#price').change(function(){
	$('#price option:selected').each(function(){
		var priceFilter = $(this).val();

		$('#productGrid .cols').each(function(){
			var price = $(this).data('price');

			if (price <= priceFilter){
				$(this).show();
			}
			else{
				$(this).hide();
			}

		});
	});
});

/*--------------------------------------------------------------
# Mileage filter
---------------------------------------------------------------*/
$('#mileage').change(function(){
	$('#mileage option:selected').each(function(){
		var milesFilter = $(this).val();

		$('#productGrid .cols').each(function(){
			var miles = $(this).data('miles');

			if (miles <= milesFilter){
				$(this).show();
			}
			else{
				$(this).hide();
			}

		});
	});
});