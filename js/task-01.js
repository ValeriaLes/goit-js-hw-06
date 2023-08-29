const mainItems= document.querySelectorAll(".item")
console.log(mainItems)
console.log(`Number of categories: ${mainItems.length}`)


mainItems.forEach(element => {
    const categoryName = element.firstElementChild;
    console.log(`Category: ${categoryName.textContent}`)
    const itemsNumber = element.lastElementChild;
    console.log(`Elements: ${itemsNumber.children.length}`)
    
})

