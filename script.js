const btn = document.querySelectorAll('[data-id')

const data = fetch('./data.json')
  .then(response => response.json())
  .then(res => {
    // console.log(res)
    for (let i = 0; i < btn.length; i++) {
      console.log(res[i])
    }
    return res
  })

console.log(data)

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function(e) {
    const btnId = e.target.dataset.id
    console.log(btnId)
    const modal = document.querySelector('#modal')
    modal.classList.add('active')
  })
}

const closeBtn = document.querySelector('.closeModal')

closeBtn.addEventListener('click', function() {
  const modal = document.querySelector('#modal')
  modal.classList.remove('active')
})
