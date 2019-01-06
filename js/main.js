const employeeContent = document.getElementById('content');
const closeModal = document.getElementById('modalClose');
const modal = document.getElementById('employeeModal');

$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=gb',
  dataType: 'json',
  success: function(data) {
    let employees = '<ul>';

    $.each(data.results, function(i, employee) {
      employees += '<div class="employeeData"><li class="content"><img src="' + employee.picture.large + '" class="employeeImage"><div class="employeeInfo"><h1>' + employee.name.first + ' ' + employee.name.last + '</h1><a>' + employee.email + '</a><p>' + employee.location.city + '</p></div></div></li>'
    });
    employees += '</ul>';
    $('#content').html(employees);
    console.log(data);
  }

});

employeeContent.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', (event) => {
  modal.style.display = 'none';
});
