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
    '<th><button class="btn btn-info btn-lg" type="button" data-toggle="modal" data-target="#myModal">Добавить</button></th>' +
    '</tr>' +
    '</thead>'
  var tableBody = ''
  for (var i = 0; i < data.length; i++) {
    console.log(data[i])
    tableBody += '<tr>' +
      '<td>' + data[i].Name + '</td>' +
      '<td>' + data[i].SecName + '</td>' +
      '<td>' + data[i].Email + '</td>' +
      '<td>' + data[i].Phone + '</td>' +
      '<td>' + data[i].Ranking + '</td>' +
      '<td>' + data[i].Price + '</td>' +
      '<td>' + '<a class="btn btn-danger btn-lg" href="/article/delete_article/' + data[i].id + '">Удалить</a>' + '</td>' +
      '</tr>'
  }
  var tableEnd = '</table>'
  $('#content').append(tableBegin + tableHead + tableBody + tableEnd)
}


