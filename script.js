const products =[
   {
      img: './3dimg.png',
      name: '3D Soft Curves',
      user: 'Live auctions 😊',
      price: '0.85 ETH',
   },
   {
      img: './cub2.png',
      name: 'The mystery of the black square',
      user: 'Jenny Wilson 😒',
      price: '0.24 ETH',
   },
   {
      img: './cloud3.png',
      name: 'Pink Cloud ',
      user: 'Floyd Miles😜',
      price: '0.3 ETH',
   },
   {
      img: './eth4.png',
      name: '3D Ethereum',
      user: 'Jane Cooper😁',
      price: '0.12 ETH',   
   },
]


const wrapper = document.querySelector('.live__wrapper')

products.forEach(card => {
   wrapper.innerHTML += `
    <div class="live__card">
               <img class="live__img" src=${card.img} alt="" >

               <div class="live__box">
                  <h3>${card.name}</h3>
                  <div>
                     <p>${card.user}</p>
                     <p>
                        Current Bid <br>
                        <b>${card.price}</b>
                     </p>
                  </div>
                  
               </div>
            </div>
   `
})



const products2 =[
   {
      img: './3dimg.png',
      name: '3D Soft Curves',
      user: 'Live auctions 😊',
      price: '0.85 ETH',
   },
   {
      img: './cub2.png',
      name: 'The mystery of the black square',
      user: 'Jenny Wilson 😒',
      price: '0.24 ETH',
   },
   {
      img: './cloud3.png',
      name: 'Pink Cloud ',
      user: 'Floyd Miles😜',
      price: '0.3 ETH',
   },
   {
      img: './eth4.png',
      name: '3D Ethereum',
      user: 'Jane Cooper😁',
      price: '0.12 ETH',   
   },
   {
      img: './3dimg.png',
      name: '3D Soft Curves',
      user: 'Live auctions 😊',
      price: '0.85 ETH',
   },
   {
      img: './cub2.png',
      name: 'The mystery of the black square',
      user: 'Jenny Wilson 😒',
      price: '0.24 ETH',
   },
   {
      img: './cloud3.png',
      name: 'Pink Cloud ',
      user: 'Floyd Miles😜',
      price: '0.3 ETH',
   },
   {
      img: './eth4.png',
      name: '3D Ethereum',
      user: 'Jane Cooper😁',
      price: '0.12 ETH',   
   },
]



const wrapper2 = document.querySelector('.live__wrapper2')

products2.forEach(card => {
   wrapper2.innerHTML += `
    <div class="live__card">
               <img class="live__img" src=${card.img} alt="" >

               <div class="live__box">
                  <h3>${card.name}</h3>
                  <div>
                     <p>${card.user}</p>
                     <p>
                        Current Bid <br>
                        <b>${card.price}</b>
                     </p>
                  </div>
                  
               </div>
            </div>
   `
})











const products3 =[
   {
      img: './3dimg.png',
      name: '3D Soft Curves',
      userImg:'./icon.png',
      user: 'Tung Tran',
     subs:'666 followers'
   },
   {
      img: './3dimg.png',
      name: '3D Soft Curves',
      userImg:'./icon.png',
      user: 'Tung Tran',
     subs:'666 followers'
   },
   {
      img: './3dimg.png',
      name: '3D Soft Curves',
      userImg:'./icon.png',
      user: 'Tung Tran',
     subs:'666 followers'
   },
   {
      img: './3dimg.png',
      name: '3D Soft Curves',
      userImg:'./icon.png',
      user: 'Tung Tran',
     subs:'666 followers'
   },
   {
      img: './3dimg.png',
      name: '3D Soft Curves',
      userImg:'./icon.png',
      user: 'Tung Tran',
     subs:'666 followers'
   },
   {
      img: './3dimg.png',
      name: '3D Soft Curves',
      userImg:'./icon.png',
      user: 'Tung Tran',
     subs:'666 followers'
   },
   {
      img: './3dimg.png',
      name: '3D Soft Curves',
      userImg:'./icon.png',
      user: 'Tung Tran',
     subs:'666 followers'
   },
   {
      img: './3dimg.png',
      name: '3D Soft Curves',
      userImg:'./icon.png',
      user: 'Tung Tran',
     subs:'666 followers'
   },

]



const wrapper3 = document.querySelector('.top__wrapper')

products3.forEach(card => {
   wrapper3.innerHTML += `

   <div class="live__card">
      <img src=${card.img} alt="" class="live__img">

      <div class="top__box">
         <img class="top__user" src=${card.userImg}  alt="">
         <div>
            <h5>${card.user}</h5>   
            <p>Bad Artist, NFT Enthusiast, Metaverse Innovator 
               Supporting #bitcoin since 2012.</p>


               <div>
                  <h5>${card.subs} </h5>
                  <button>Follow</button>
               </div>
         </div>
      </div>
   </div>


   `
})
