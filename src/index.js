document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  console.table(gifts)


// A user should be able to see all of the gift data on initial page load
  const giftList = document.querySelector('.gift-list')
  console.log('%c giftList', 'color:red', giftList);

  gifts.forEach(function(gift){
    let li = document.createElement('li')
    li.innerHTML = `${gift.name} <br>`
    let img = document.createElement('img')
    img.src = `${gift.image}`
    img.style = 'width: 30%'
    li.appendChild(img)

    let editButton = document.createElement('button')
    editButton.innerHTML = 'edit'
    editButton.className = 'edit-button'
    li.appendChild(editButton)
    editButton.addEventListener('click',function(event){
      console.log(`you hit the edit button ${this.parentElement.innerHTML}`)

      })

    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'delete'
    deleteButton.className = 'delete-button'
    li.appendChild(deleteButton)
    giftList.appendChild(li)
    deleteButton.addEventListener('click',function(event){
         console.log(`you hit the delete button ${this.parentElement.innerHTML}`)
         this.parentElement.remove()
       })
    });

// A user should be able to create a particular gift.
  let giftButton = document.querySelector('#gift-form-button')
  console.log(giftButton)

  giftButton.addEventListener('click', function(event){
    event.preventDefault()
    addGift()
  })

  // let editButton = document.querySelectorAll('.edit-button')
  // editButton.forEach(function(button){
  //   button.addEventListener('click',function(event){
  //     console.log(`you hit the edit button ${this.parentElement.innerHTML}`)
  //   })
  // })
  //
  // let deleteButton = document.querySelectorAll('.delete-button')
  // deleteButton.forEach(function(button){
  //   button.addEventListener('click',function(event){
  //     console.log(`you hit the delete button ${this.parentElement.innerHTML}`)
  //     //this.parentElement.parentElement.removeChild(this.parentElement)
  //     this.parentElement.remove()
  //   })
  // })


  function addGift(){
    let giftName = document.querySelector('#gift-name-input').value
    let giftImage = document.querySelector('#gift-image-input').value
  // research event listener for input
  //  debugger
    let newGift = document.createElement('li')
    newGift.innerHTML = `${giftName} <br>`
    let newGiftImage = document.createElement('img')
    newGiftImage.src = giftImage
    newGiftImage.style = 'width: 30%'
    newGift.appendChild(newGiftImage)

    let editButton = document.createElement('button')
    editButton.innerHTML = 'edit'
    editButton.className = 'edit-button'
    newGift.appendChild(editButton)
    editButton.addEventListener('click',function(event){
      // console.log(`you hit the edit button ${this.parentElement.innerHTML}`)


      let editName = document.createElement('input')
      editName.type = "text"
      let editImage = document.createElement('input')
      editImage.type = "text"
      newGift.appendChild(editName)
      newGift.appendChild(editImage)
      let submitButton = document.createElement('button')
      submitButton.innerHTML = "submit"
      submitButton.className = 'submit-button'
      newGift.appendChild(submitButton)


      })

    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'delete'
    deleteButton.className = 'delete-button'
    newGift.appendChild(deleteButton)
    giftList.appendChild(newGift)
    deleteButton.addEventListener('click',function(event){
         console.log(`you hit the delete button ${this.parentElement.innerHTML}`)
         this.parentElement.remove()
       })
    }

// A user should be able to search for and filter particular gifts with names that include a particular search query.
  const search = document.querySelector('#filter-input')
  search.addEventListener('input', function(){
   // if input matches the characters of gift name string return gift
   const input = this.value
   var allGifts = [... giftList.children]
   //debugger
   allGifts.forEach(function(gift){
     if(gift.innerHTML.includes(input)){
       console.log(`found ${gift.innerHTML}`)
       gift.style = 'display: "" '
     }
     else{
       gift.style = 'display: none'
     }
   })
 })

// A user (any user, don't worry about authorization) should be able to edit a gift's details.

// let submmitButton = document.createElement('button')










})
