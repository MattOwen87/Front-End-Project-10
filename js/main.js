/********************
VARIABLES
********************/

const employeeContent = document.getElementById('content');
const closeModal = document.getElementById('modalClose');
const modal = document.getElementById('employeeModal');
const modalContent = document.getElementById('modalContent');
let modalEmployees = [];
let currentIndex = 0;

/********************
API RANDOM USER
********************/

$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=gb',
  dataType: 'json',
  success: function(data) {
    let employees = '<ul>';

    $.each(data.results, function(i, employee) {
      employees += '<li class="employeeData" data-index="' + i + '"><div class="content"><img src="' + employee.picture.large + '" class="employeeImage"><div class="employeeInfo"><h1>' + employee.name.first + ' ' + employee.name.last + '</h1><a>' + employee.email + '</a><p>' + employee.location.city + '</p></div></div></li>'

      let modalEmployee = {
        image: employee.picture.large,
        name: employee.name.first + ' ' + employee.name.last,
        birthdate: employee.dob.date,
        email: employee.email,
        phone: employee.phone,
        address: employee.location.street,
        city: employee.location.city,
        state: employee.location.state,
        code: employee.location.postcode
    };
      modalEmployees.push(modalEmployee);
  });
    employees += '</ul>';
    $('#content').html(employees);
    console.log(data);

  }


});

/********************
DISPLAY MODAL
********************/


function displayModal(index){
  let currentEmployee = modalEmployees[index];

  modalContent.innerHTML = `<img src="${currentEmployee.image}" class="employeeImage"><h1>${currentEmployee.name}</h1><p>${currentEmployee.birthdate}</p><p>${currentEmployee.email}</p><p>${currentEmployee.phone}</p><p>${currentEmployee.address}</p><p>${currentEmployee.city}</p><p>${currentEmployee.state}</p><p>${currentEmployee.code}</p>`;
  modal.style.display = 'block';
}

$('#content').on('click', 'LI', (function(){
  currentIndex = this.dataset.index;

  displayModal(currentIndex);
}));

/********************
CLOSE MODAL
********************/

closeModal.addEventListener('click', (event) => {
  modal.style.display = 'none';
});

/********************
SEARCH BAR FUNCTION
********************/

$("#searchBar").keyup(function(){
	let employeeSearch = $("#searchBar").val().toLowerCase();

		if(employeeSearch !=""){
	$("#content li").hide();
	$("#content li").each(function(){
		let employeeKeyword = $(this).find("H1").text();


		if (employeeKeyword.indexOf(employeeSearch) >= 0) {
			$(this).show();
		}

  	});
  } else {
  	$("#content li").show();
  }
  });

  /********************
  MODAL ARROW FUNCTION
  ********************/

  $("#rightArrow").click(function(){
    $("#modalContent").each(function(){
      
    });
  });

  $("#leftArrow").click(function(){

  });
