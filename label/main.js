const button = document.getElementById('btn')
button.addEventListener('click', function () {
    const val = document.getElementById('name').value;
    const name = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    swal({
        title: "Send this data?",
        text: ("You entered:"
        +"Name:"+val
        +"Surname:"+name
        +"Email:"+email),
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your data has been sent", {
            icon: "success",
          });
        } 
      });
})