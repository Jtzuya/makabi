import Alpine from 'alpinejs'

window.Alpine = Alpine
Alpine.start()

// if (document.querySelector('[data-cart-drawer]') !== undefined || document.querySelector('[data-cart-drawer]') !== null) document.querySelector('[data-cart-drawer]').addEventListener('click', observeCart)

// function observeCart() {
//     let cartState = JSON.parse(document.querySelector('[data-cart-drawer]').getAttribute('data-card-drawer'))

//     switch(cartState) {
//         case true:
//             document.body.style.overflow = 'hidden'
//             break
//         case false:
//             document.body.style.overflow = 'unset'
//             break
//         default:
//             console.error('something is wrong with the cartState value.')
//             break
//     }
// }

// function cartHandler(e) {
//     const cartDrawer = document.querySelectorAll('[data-cart-drawer]')

//     cartDrawer.forEach(i => {
//         let cartState = JSON.parse(i.getAttribute('data-cart-drawer'))
        
//         switch(cartState) {
//             case true:
//                 document.body.style.overflow = 'hidden'
//                 i.setAttribute('data-cart-drawer', false)
//                 i.classList.add('-right-full')
//                 i.classList.remove('right-0')
//                 break
//             case false:
//                 document.body.style.overflow = 'unset'
//                 i.setAttribute('data-cart-drawer', true)
//                 i.classList.remove('-right-full')
//                 i.classList.add('right-0')
//                 break
//             default:
//                 console.error('something is wrong with the cartState value.')
//                 break
//         }
//     })
// }