function bookSearch()
{
      var book_id = document.getElementById("booksearch").value;
      var x =document.getElementById("booktable").rows[book_id].innerHTML;
      document.getElementById("book_id").innerHTML=x;
}


function sortAsc() {
            var table, rows, switching, i, x, y, shouldSwitch,colnumber;
            table = document.getElementById("booktable");
            colnumber=document.getElementById("colnumber").value;
            switching = true;
            while (switching) {
                switching = false;
                rows = table.rows;
                for (i = 1; i < (rows.length - 1); i++) {
                    shouldSwitch = false;
                    x = rows[i].getElementsByTagName("TD")[colnumber];
                    y = rows[i + 1].getElementsByTagName("TD")[colnumber];
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    switching = true;
                }
            }
        }