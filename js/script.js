vue = new Vue({
	el: '#vueApp',
	data:{
		txtEmail: '',
		dropdownMake: [
			{value: 'default', name: 'Select Make'},
			{value: 'v1', name: 'BMW'},
			{value: 'v2', name: 'Mercedez Benz'},
			{value: 'v3', name: 'Honda'},
			{value: 'v4', name: 'Toyota'},
		],

		dropdownModel: [
			{value: 'default', name: 'Select Make first'},
			{value: 'v1', name: 'M3'},
			{value: 'v2', name: 'WRX STi'},
			{value: 'v3', name: 'Class S AMG'},
			{value: 'v4', name: 'Civic Si'},
			{value: 'v5', name: 'Audi TT RS'}
		],

		dropdownMileage: [
			{value: 'default', name: 'Max Mileage'},
			{value: 'v1', name: '0 miles'},
			{value: 'v2', name: '10,000 miles'},
			{value: 'v3', name: '20,000 miles'},
			{value: 'v4', name: '30,000 miles'},
			{value: 'v5', name: '50,000 miles'},		
			{value: 'v6', name: '60,000 miles'},		
			{value: 'v7', name: '70,000+ miles'},		
		],

		dropdownPrice: [
			{value: 'default', name: 'Max Price'},
			{value: 'v1', name: '$5,000'},
			{value: 'v2', name: '$10,000'},
			{value: 'v3', name: '$15,000'},
			{value: 'v4', name: '$25,000'},
			{value: 'v5', name: '$35,000'},		
			{value: 'v5', name: '$45,000'},		
			{value: 'v5', name: '$60,000'},		
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

$('#productGrid .cols').each(function(){
	var name = $(this).data('name');
	var bg = $(this).data('img');
	var price = $(this).data('price');
	var date = $(this).data('date');
	var miles = $(this).data('miles');
	var speed = $(this).data('speed');
	
	$(this).click(function(){
		$('header').css( "background-image", "url('" + bg + "')" );
		$('header .info h2').text(name);
		$('header .info h3').text(price + ' • ' + date + ' • ' + miles + ' • ' + speed);
	});

});