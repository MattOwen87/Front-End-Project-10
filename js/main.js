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
        birthdate: employee.dob.date.substring(5,7) + '/' + employee.dob.date.substring(8,10) + '/' + employee.dob.date.substring(0,4),
        email: employee.email,
        phone: employee.cell,
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
  index = parseInt(index);
  let currentEmployee = modalEmployees[index];

  modalContent.innerHTML = `<img src="${currentEmployee.image}" class="employeeImage"><h1>${currentEmployee.name}</h1><p>${currentEmployee.email}</p><p>${currentEmployee.city}</p><div id="modalDivide"></div><p>${currentEmployee.phone}</p><p>${currentEmployee.address}</p><p>${currentEmployee.state}</p><p>${currentEmployee.code}</p><p>${currentEmployee.birthdate}</p><button id="prev" data-index="-1">Prev</button><button id="next" data-index="+1">Next</button>`;

  $("#next").click(function(){
    if(index <= 11){
      index += 1;
    }
    if(index > 11){
      return false;
    }

    console.log(index);
    displayModal(index);
  });

  $("#prev").click(function(){
    if(index >= 1){
      index -= 1;
    }
    if(index < 0){
      return false;
    }

    console.log(index);
    displayModal(index);
  });

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
