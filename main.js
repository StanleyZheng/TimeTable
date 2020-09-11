//Main.js





$(function () {

    // Start counting from the third row
    var counter = 3;

    $("#insertRow").on("click", function (event) {
        event.preventDefault();

        var newRow = $("<tr>");
        var cols = '';

        // Table columns
        cols += '<th scrope="row">' + counter + '</th>';
        cols += '<td><input class="form-control rounded-0" type="text" name="firstname" placeholder="First name"></td>';
        cols += '<td><input class="form-control rounded-0" type="text" name="lastname" placeholder="Last name"></td>';
        cols += '<td><input class="form-control rounded-0" type="text" name="handle" placeholder="Handle"></td>';
        cols += '<td><button class="btn btn-danger rounded-0" id ="deleteRow"><i class="fa fa-trash"></i></button</td>';

        // Insert the columns inside a row
        newRow.append(cols);

        // Insert the row inside a table
        $("#toptable").append(newRow);

        // Increase counter after each row insertion
        counter++;
    });

    // Remove row when delete btn is clicked
    $("#toptable").on("click", "#deleteRow", function (event) {
        $(this).closest("tr").remove();
        counter -= 1
    });

    $("#submit").on("click", function (event) {
        event.preventDefault();

        //fill in table
        const data = [
          ['', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
          ['2019', 10, 11, 12, 13],
          ['2020', 20, 11, 14, 13],
          ['2021', 30, 15, 12, 13]
        ];

        const container = $('#example');
        const hot = new Handsontable(container, {
          data: data,
          rowHeaders: true,
          colHeaders: true,
          licenseKey: 'non-commercial-and-evaluation'
        });

        hot.updateSettings({
          colHeaders: ['Apple','B','C','D','E']
        });
    });



});