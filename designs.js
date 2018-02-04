// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



$('#sizePicker').submit(function makeGrid() {
  const artTable = $('#pixelCanvas');
  const artHeight = $('#inputHeight').val();
  const artWeight = $('#inputWeight').val();
  console.log(artWeight);
  $('#pixelCanvas').empty();
  document.getElementById("colorPicker").value = "#000";
  //$('#colorPicker').attr("value","#000");
  for (let row = 0; row < artHeight; row++) {
    const buildRow = $('<tr></tr>');
    for (let column = 0; column < artWeight; column++) {
      buildRow.append('<td class = "active-cell-' + row + column + '"></td>');
      console.log(column);
    }
    console.log(row);
    artTable.append(buildRow);
  }

  event.preventDefault();
});

$( '#pixelCanvas' ).on( 'click', 'td', function() {
  const artColor = $('#colorPicker').val();
//  $(this).append('<p>dada</p>');
  $(this).css("background-color",artColor);
  console.log(artColor);
});
