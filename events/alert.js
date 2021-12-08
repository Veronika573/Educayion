let button = document.getElementById('btn')

button.addEventListener('click', function (e) {
    let randomValue = Math.round(Math.random() * 255)
    console.log(e)

document.body.style.background = `rgb(${randomValue}, 100, 120)`
})

document.addEventListener('mousemove', function() {
    console.log(1)
  })

  document.addEventListener('mousemove', function(e) {
    circle.style.top = e.clientY - circle.offsetHeight + 'px'
    circle.style.left = e.clientX - circle.offsetWidth + 'px'
  })