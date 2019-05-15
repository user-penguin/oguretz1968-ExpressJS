function tableSearch () {
  var phrase = document.getElementById('searchString')
  var table = document.getElementsByClassName('table table-striped')[0]
  console.log(table)
  console.log(table.rows.length)
  var regPhrase = new RegExp(phrase.value, 'i')
  var flag = false
  for (var i = 1; i < table.rows.length; i++) {
    flag = false
    for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
      flag = regPhrase.test(table.rows[i].cells[j].innerHTML)
      if (flag) break
    }
    if (flag) {
      table.rows[i].style.display = ''
    } else {
      table.rows[i].style.display = 'none'
    }
  }
}

$(document).ready(function () {
  $.ajax({
    url: '/getAuthorAdminTable',
    dataType: 'json',
    data: {},
    success: function (data) {
      createTable(data)
    }
  })
})

function createTable (data) {
  console.log(data)
  var tableBegin = '<table id="authorsTable" class="table table-striped table-bordered">'
  console.log(tableBegin)
  var tableHead =
    '<thead>' +
    '<tr>' +
    '<th>Имя</th>' +
    '<th>Фамилия</th>' +
    '<th>Почта</th>' +
    '<th>Телефон</th>' +
    '<th>Рейтинг</th>' +
    '<th>Стоимость</th>' +
    '<th><button class="btn btn-info btn-lg" type="button" data-toggle="modal" onclick="showAddForm()">Добавить</button></th>' +
    '</tr>' +
    '</thead>'
  var tableBody = ''
  for (var i = 0; i < data.length; i++) {
    console.log(data[i])
    tableBody += '<tr id=' + i + ' >' +
      '<td>' + data[i].Name + '</td>' +
      '<td>' + data[i].SecName + '</td>' +
      '<td>' + data[i].Email + '</td>' +
      '<td>' + data[i].Phone + '</td>' +
      '<td>' + data[i].Ranking + '</td>' +
      '<td>' + data[i].Price + '</td>' +
      '<td>' + '<button class="btn btn-danger btn-lg" onclick="deleteRow('+ i +')" >Удалить</button>' + '</td>' +
      '</tr>'
  }
  var tableEnd = '</table>'
  $('#content').append(tableBegin + tableHead + tableBody + tableEnd)
}

function deleteRow (id) {
  alert(id)
  var row = $('#authorsTable').find('tr').eq(id+1)
  var userName = row.find('td').eq(0).text()
  var secName = row.find('td').eq(1).text()
  var email = row.find('td').eq(2).text()
  var phone = row.find('td').eq(3).text()
  alert(name+secName+email+phone)
  $.ajax({
    url: '/author/delete_author', // url страницы (action_ajax_form.php)
    type: 'POST', // метод отправки
    dataType: 'json', // формат данных
    data: {
      userName: userName,
      secName: secName,
      email: email,
      phone: phone
    },
    success: function (response) { // Данные отправлены успешно
      $('#authorsTable').find('tr#'+id).remove()
    },
    error: function (response) { // Данные не отправлены
      alert('ошибочка ' + response)
    }
  })
}

function showAddForm () {
  var formText =
    '                    <form id="myForm" method="post" action="">\n' +
    '                        <input class="form__input" type="text" name="name" placeholder="Имя" required>\n' +
    '                        <input class="form__input" type="text" name="secName" placeholder="Фамилия" required>\n' +
    '                        <input class="form__input" type="email" name="email" placeholder="Email" >\n' +
    '                        <input class="form__input" type="tel" name="phone"  maxlength="12" placeholder="Email" >\n' +
    '                        <input class="form__input" type="number" name="ranking" maxlength="2" placeholder="Рейтинг" required>\n' +
    '                        <input class="form__input" type="number" name="price" maxlength="8" placeholder="Стоимость" required>\n' +
    '                        <input class="form__input" type="text" name="mission"  placeholder="Цель регистрации" required>\n' +
    '                        <input class="form__input" type="text" name="mainText"  placeholder="Основной текст" required>\n' +
    '                        <input class="btn btn-info " id="sendUser" value="Отправить" type="button" onclick="sendForm()">\n' +
    '                        <button class="btn btn-info" type="button" onclick="closeAddForm()">Close</button>\n' +
    '                    </form>\n'
  $('#addForm').append(formText)
}

function sendForm() {
  sendAjaxForm('myForm', '/author/add_new_author')
}

function sendAjaxForm (ajax_form, url) {
  $.ajax({
    url: url, // url страницы (action_ajax_form.php)
    type: 'POST', // метод отправки
    dataType: 'json', // формат данных
    data: $('#' + ajax_form).serialize(), // Сеарилизуем объект
    success: function (response) { // Данные отправлены успешно
      closeAddForm()
      updateTable(response)
    },
    error: function (response) { // Данные не отправлены
      alert(response)
    }
  })
}

function closeAddForm () {
  $('#myForm').remove()
}

function updateTable (data) {
  $('#authorsTable').remove()
  console.log(data)
  createTable(data)
}
