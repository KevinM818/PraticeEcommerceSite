var productImage = document.getElementById('productImage');
var productSelectors = document.querySelectorAll('.productImageSelector');
var gameEditionDropdown = document.getElementById('editionDropdown');
var dropdownMenu = document.querySelector('.dropDownMenu');
var options = document.querySelectorAll('.editionOption');
var retailDropdown = document.getElementById('retailerDropdown');
var retailDropdownMenu = document.querySelector('.dropDownMenu2');
var retailOptions = document.querySelectorAll('.retailOption');

productSelectors.forEach(imageClicked);

function imageClicked(image){
	image.addEventListener('click', function(){
		productImage.src = image.src;
		productSelectors.forEach(function(image){image.classList.remove('active');});
		image.classList.add('active');
	})
}

gameEditionDropdown.addEventListener('click', function(){ dropdownMenu.style['display'] = 'block'; })

options.forEach(optionSelected);

function optionSelected(option) {
	option.addEventListener('click', function(){
	gameEditionDropdown.innerHTML = option.innerText + '<span>V</span>';
	options.forEach(function(item){item.classList.remove('active')});
	option.classList.add('active');
	dropdownMenu.style['display'] = 'none';
	});
}

retailDropdown.addEventListener('click', function(){ retailDropdownMenu.style['display'] = 'block'; });

retailOptions.forEach(retailerSelected);

function retailerSelected(option){
	option.addEventListener('click', function(){
	retailDropdown.innerHTML = option.innerText + '<span>V</span>';
	retailOptions.forEach(function(item){item.classList.remove('active')});
	option.classList.add('active');
	retailDropdownMenu.style['display'] = 'none';
	});
}
