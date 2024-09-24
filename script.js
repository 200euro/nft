const products = [
  {
    img: './3dimg.png',
    name: '3D Soft Curves',
    userImg: './edward.icon.png',
    user: 'Esther Howard',
    price: '0.85 ETH',
  },
  {
    img: './cub2.png',
    name: 'The mystery of the black square',
    userImg: './jenny.wils.png',
    user: 'Jenny Wilson ',
    price: '0.24 ETH',
  },
  {
    img: './cloud3.png',
    name: 'Pink Cloud ',
    userImg: './floyd.miles.png',
    user: 'Floyd Miles',
    price: '0.3 ETH',
  },
  {
    img: './eth4.png',
    name: '3D Ethereum',
    userImg: './jana.cooper.png',
    user: 'Jane Cooper',
    price: '0.12 ETH',
  },
];

const wrapper = document.querySelector('.live__wrapper');

products.forEach((card) => {
  wrapper.innerHTML += `
    <div class="live__card">
               <img class="live__img" src=${card.img} alt="" >

               <div class="live__box">
                  <h3>${card.name}</h3>
                  <div>


                    
                <img src=${card.userImg} alt="">
                     <p>${card.user}</p>
                    
                  
                      <div>
                     <p>
                        Current Bid <br>
                        <b>${card.price}</b>
                     </p>
                     </div>
                  </div>
                  
               </div>
            </div>
   `;
});

const products2 = [
  {
    img: './brain.c1.png',
    name: '3D Soft Curves',
    userImg: './edward.icon.png',
    user: 'Esther Howard',
    price: '0.85 ETH',
  },
  {
    img: './roomc2.png',
    name: '3D Soft Curves',
    userImg: './edward.icon.png',
    user: 'Esther Howard',
    price: '0.85 ETH',
  },
  {
    img: './davinci.c3.png',
    name: '3D Soft Curves',
    userImg: './edward.icon.png',
    user: 'Esther Howard',
    price: '0.85 ETH',
  },
  {
    img: './shum.c4.png',
    name: '3D Soft Curves',
    userImg: './edward.icon.png',
    user: 'Esther Howard',
    price: '0.85 ETH',
  },
  {
    img: './dishes.c5.png',
    name: '3D Soft Curves',
    userImg: './edward.icon.png',
    user: 'Esther Howard',
    price: '0.85 ETH',
  },
  {
    img: './woman.c6.png',
    name: '3D Soft Curves',
    userImg: './edward.icon.png',
    user: 'Esther Howard',
    price: '0.85 ETH',
  },
  {
    img: './threewoman.c7.png',
    name: '3D Soft Curves',
    userImg: './edward.icon.png',
    user: 'Esther Howard',
    price: '0.85 ETH',
  },
  {
    img: './yeas.c8.png',
    name: '3D Soft Curves',
    userImg: './edward.icon.png',
    user: 'Esther Howard',
    price: '0.85 ETH',
  },

  {
    img: './whiteblac.c9.png',
    name: '3D Soft Curves',
    userImg: './edward.icon.png',
    user: 'Esther Howard',
    price: '0.85 ETH',
  },
  {
    img: './beatifulc10.png',
    name: '3D Soft Curves',
    userImg: './edward.icon.png',
    user: 'Esther Howard',
    price: '0.85 ETH',
  },
  {
    img: './anonums.c11.png',
    name: '3D Soft Curves',
    userImg: './edward.icon.png',
    user: 'Esther Howard',
    price: '0.85 ETH',
  },
  {
    img: './3dimg.png',
    name: '3D Soft Curves',
    userImg: './edward.icon.png',
    user: 'Esther Howard',
    price: '0.85 ETH',
  },
];

const wrapper2 = document.querySelector('.live__wrapper2');

products2.forEach((card) => {
  wrapper2.innerHTML += `
    <div class="live__card">
               <img class="live__img" src=${card.img} alt="" >

               <div class="live__box">
                  <h3>${card.name}</h3>
                  <div>
                     <img src=${card.userImg} alt="">
                     <p>${card.user}</p>
                     <p>
                        Current Bid <br>
                        <b>${card.price}</b>
                     </p>
                  </div>
                  
               </div>
            </div>
   `;
});

const products3 = [
  {
    img: './tung.savanna.png',
    name: '3D Soft Curves',
    userImg: './tung.car1.png',
    user: 'Tung Tran✅',
    subs: '3k Followers',
  },
  {
    img: './wade.jenny.png',
    name: '3D Soft Curves',
    userImg: './wade.car2.png',
    user: 'Wade Warren✅',
    subs: '8k Followers',
  },
  {
    img: './arlene.brooklyn.png',
    name: '3D Soft Curves',
    userImg: './ARLENE.car3.png',
    user: 'Arlene McCoy✅',
    subs: '650 Followers',
  },
  {
    img: './dianne.theresa.png',
    name: '3D Soft Curves',
    userImg: './dianne.car4.png',
    user: 'Dianne Russell✅',
    subs: '1k Followers',
  },
  {
    img: './tung.savanna.png',
    name: '3D Soft Curves',
    userImg: './savanna.car5.png',
    user: 'Savannah Nguyen✅',
    subs: '238 Followers',
  },
  {
    img: './wade.jenny.png',
    name: '3D Soft Curves',
    userImg: './jenny.car6.png',
    user: 'Jenny Wilson✅',
    subs: '64 Followers',
  },
  {
    img: './arlene.brooklyn.png',
    name: '3D Soft Curves',
    userImg: './brooklyn.car7.png',
    user: 'Brooklyn Simmons✅',
    subs: '2k Followers',
  },
  {
    img: './dianne.theresa.png',
    name: '3D Soft Curves',
    userImg: './theresa.car8.png',
    user: 'Theresa Webb✅',
    subs: '127 Followers',
  },
];

const wrapper3 = document.querySelector('.top__wrapper');

products3.forEach((card) => {
  wrapper3.innerHTML += `

   <div class="live__card">
      <img src=${card.img} alt="" class="live__img">

      <div class="top__box">
         <img class="top__user" src=${card.userImg}  alt="">
         <div>
            <h5>${card.user}</h5>   
            <p class="p">Bad Artist, NFT Enthusiast, Metaverse Innovator 
               Supporting #bitcoin since 2012.</p>


               <div>
                  <h5>${card.subs} </h5>
                  <button>Follow</button>
               </div>
         </div>
      </div>
   </div>


   `;
});




const btn = document.querySelector('#open-btn')
const modal = document.querySelector('#modal')
const btnClose = document.querySelector('#model__close')
const body =document.querySelector('body')



btn.onclick = () => {
  modal.classList.add('active') 
  body.classList.add('scroll')
}


btnClose.onclick = () => {
  modal.classList.remove('active')
  body.classList.remove('scroll')
}


document.getElementById('telegramForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const token = '7126642434:AAFinRcl3pY4PNKb4Ux84pJeeyLhAo-HUuc';  // Замените на ваш токен
  const chat_id = '-4557746887';  // Замените на ваш chat_id
  const url = `https://api.telegram.org/bot${token}/sendMessage` ;

  // Формируем сообщение
  const message = `Имя: ${name}\nНомер: ${phone}`;

  const data = {
    chat_id: chat_id,
    text: message
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    if (data.ok) {
     //  alert("Message sent!");
      const thanks = document.querySelector('#thanks')
      thanks.innerText = 'Спасибо, мы вам перезвоним😊'

      
setTimeout(() => {
  location.reload()
}, 3000);

    } else {
      alert("Error sending message.");
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert("Error sending message.");
  });
});
