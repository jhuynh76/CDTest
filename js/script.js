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
			{value: 'v1', name: 'Golf 2.5l'},
			{value: 'v2', name: 'WRX STi'},
			{value: 'v3', name: 'Q50'},
			{value: 'v4', name: 'ML (AWD)'},
			{value: 'v5', name: 'V40 Cross Country'},
			{value: 'v5', name: 'TT RS'},
			{value: 'v5', name: 'R8'},
		],

		dropdownMileage: [
			{value: 'default', name: '--Select max mileage--'},
			{value: '0', name: '0'},
			{value: '10000', name: '10,000 miles'},
			{value: '20000', name: '20,000 miles'},
			{value: '30000', name: '30,000 miles'},
			{value: '40000', name: '40,000 miles'},		
			{value: '60000', name: '60,000 miles'},		
			{value: '100000', name: '100,000 miles'},		
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

		dropdownSort: [
			{value: 'default', name: 'Sort by'},
			{value: 'price1', name: 'Price (low - high)'},
			{value: 'price2', name: 'Price (High - low)'},
			{value: 'name1', name: 'Name (Asc)'},
			{value: 'name2', name: 'Name (Desc)'},
			{value: 'mileage1', name: 'Mileage (low - high)'},
			{value: 'mileage2', name: 'Mileage (High - low)'},
			{value: 'hp1', name: 'Horsepower (low - high)'},
			{value: 'hp2', name: 'Horsepower (High - low)'}
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
# Pagination (next and prev buttons)
	## Next
	## Prev
# Product Grid filter (for header function)
# Form submit
# Sorting
--------------------------------------------------------------*/
$(document).ready(function(){
	var numTotal = 2;
	var num = 3	
	var make = '';
	var price = '';

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
	# Pagination (next and prev buttons)
	---------------------------------------------------------------*/
	// pagination method
	function paginationCond(){
		// cond for previous btn to disable to prevent negative val
		if (numTotal <= 2){
			$('#btnPrevious').attr('disabled', 'disabled');
		}
		else{
			$('#btnPrevious').removeAttr('disabled', 'disabled');			
		}

		// cond for next btn to disable to keep it within limit
		if (numTotal >= 8){
			$('#btnNext').attr('disabled', 'disabled');
		}
		else{
			$('#btnNext').removeAttr('disabled', 'disabled');			
		}
	}

	$('#productGrid .cols').each(function(){
		var numData = $(this).data('num');

		if (numData < numTotal){
			$(this).show();
		}
	});

	/*--------------------------------------------------------------
	## Next
	---------------------------------------------------------------*/
	$('#btnNext').click(function(){
		numTotal += num;		
		paginationCond();

		$('#productGrid .cols').hide();

		$('#productGrid .cols').each(function(){
			var numData = $(this).data('num');

			if (numData < numTotal){
				$(this).show();
			}
		});
	});

	/*--------------------------------------------------------------
	## Prev
	---------------------------------------------------------------*/
	$('#btnPrevious').click(function(){
		numTotal -= num;
		paginationCond();

		$('#productGrid .cols').hide();

		$('#productGrid .cols').each(function(){
			var numData = $(this).data('num');

			if (numData < numTotal){
				$(this).show();
			}
		});
	});

	/*--------------------------------------------------------------
	# Product Grid filter (for header function)
	---------------------------------------------------------------*/
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
	# Form submit
	---------------------------------------------------------------*/
	$('form select').change(function(){
		$(this).css('outline', 'none');
	});

	$('form .btn').click(function(e){
		e.preventDefault();
	});

	$('#btnSubmit').click(function(e){
		numTotal = 2;
		paginationCond();

		$('#btnReset').removeClass('btn-danger');
		$('#btnAll').removeClass('btn-danger');
		$('#btnReset').addClass('btn-light');
		$('#btnAll').addClass('btn-light');
		$(this).removeClass('btn-light');
		$(this).addClass('btn-danger');

		var makeFilter = $('#make option:selected').val();
		var priceFilter = $('#price option:selected').val();
		var milesFilter = $('#mileage option:selected').val();
			
		if (makeFilter == 'default'){
			$('#make').css('outline', '#e63946 solid 2px');
		}
		if (milesFilter == 'default'){
			$('#mileage').css('outline', '#e63946 solid 2px');
		}
		if (priceFilter == 'default'){
			$('#price').css('outline', '#e63946 solid 2px');
		}
		else{
			$('#productGrid .cols').each(function(){
				var make = $(this).data('make');
				var model = $(this).data('model');
				var bg = $(this).data('img');
				var price = $(this).data('price');
				var date = $(this).data('date');
				var miles = $(this).data('miles');
				var speed = $(this).data('speed');

				if (make == makeFilter && price <= priceFilter && miles <= milesFilter){
					$(this).show();
				}
				else{
					$(this).hide();
				}
			});
		}		
	});

	$('#btnReset').click(function(){
		$('#btnSubmit').removeClass('btn-danger');
		$('#btnAll').removeClass('btn-danger');
		$('#btnSubmit').addClass('btn-light');
		$('#btnAll').addClass('btn-light');
		$(this).removeClass('btn-light');
		$(this).addClass('btn-danger');

		$('#make').val('default').trigger('change');
		$('#model').val('default').trigger('change');
		$('#mileage').val('default').trigger('change');
		$('#price').val('default').trigger('change');
		$('#date').val('default').trigger('change');

		$('#productGrid .cols').hide();
	});

	$('#btnAll').click(function(){
		$('#btnReset').removeClass('btn-danger');
		$('#btnSubmit').removeClass('btn-danger');
		$('#btnReset').addClass('btn-light');
		$('#btnSubmit').addClass('btn-light');
		$(this).removeClass('btn-light');
		$(this).addClass('btn-danger');

		$('#productGrid .cols').show();
		$('form select').css('outline', 'none');
	});

	/*--------------------------------------------------------------
	# Sorting
	---------------------------------------------------------------*/
	function sortingPrice1(a, b){
		return ($(b).data('price').toString()) < ($(a).data('price').toString()) ? 1 : -1;
	}
	function sortingPrice2(a, b){
		return ($(a).data('price').toString()) < ($(b).data('price').toString()) ? 1 : -1;
	}
	function sortingName1(a, b){
		return ($(b).data('make').toString()) < ($(a).data('make').toString()) ? 1 : -1;
	}
	function sortingName2(a, b){
		return ($(a).data('make').toString()) < ($(b).data('make').toString()) ? 1 : -1;
	}
	function sortingMileage1(a, b){
		return ($(b).data('miles').toString()) < ($(a).data('miles').toString()) ? 1 : -1;
		}
	function sortingMileage2(a, b){
		return ($(a).data('miles').toString()) < ($(b).data('miles').toString()) ? 1 : -1;
	}		
	function sortingHp1(a, b){
		return ($(b).data('speed').toString()) < ($(a).data('speed').toString()) ? 1 : -1;
		}
	function sortingHp2(a, b){
		return ($(a).data('speed').toString()) < ($(b).data('speed').toString()) ? 1 : -1;
	}		

	$('#dropdownSort').change(function(){
		$('#dropdownSort option:selected').each(function(){
			// price (asc)
			if ( $(this).val() == 'price1' ){
				$('#productGrid .cols').sort(sortingPrice1).appendTo('#productGrid');
			}
			// price (desc)
			if ( $(this).val() == 'price2' ){
				$('#productGrid .cols').sort(sortingPrice2).appendTo('#productGrid');
			}
			// name (asc)
			if ( $(this).val() == 'name1' ){
				$('#productGrid .cols').sort(sortingName1).appendTo('#productGrid');
			}
			// name (desc)
			if ( $(this).val() == 'name2' ){
				$('#productGrid .cols').sort(sortingName2).appendTo('#productGrid');
			}
			// mileage (asc)
			if ( $(this).val() == 'mileage1' ){
				$('#productGrid .cols').sort(sortingMileage1).appendTo('#productGrid');
			}
			// mileage (desc)
			if ( $(this).val() == 'mileage2' ){
				$('#productGrid .cols').sort(sortingMileage2).appendTo('#productGrid');
			}
			// HP (asc)
			if ( $(this).val() == 'hp1' ){
				$('#productGrid .cols').sort(sortingHp1).appendTo('#productGrid');
			}
			// HP (desc)
			if ( $(this).val() == 'hp2' ){
				$('#productGrid .cols').sort(sortingHp2).appendTo('#productGrid');
			}													
		});
	});





}); //end doc.rdy.function