 // 1st frame.......!
 const frame1 = document.getElementById("frame1");
 // const text = document.getElementById("text");

 let offsetX, offsetY;

 frame1.addEventListener('dragstart', (e)=>{
     offsetX = e.clientX - frame1.getBoundingClientRect().left;
     offsetY = e.clientY - frame1.getBoundingClientRect().top;
     console.log('working...');

     frame1.style.opacity = '0.5';
 })


 frame1.addEventListener('drag', (e)=>{
     if (e.clientX === 0 & e.clientY === 0)return;

     frame1.style.left = `${e.clientX - offsetX}px`;
     frame1.style.top = `${e.clientY - offsetY}px`;
     console.log('testig...')
 })

 frame1.addEventListener('dragend', (e)=>{
     frame1.style.opacity = '1';
     console.log('done')
 })

 // 2nd Frame............!
 const frame2 = document.getElementById("frame2");
 // const text = document.getElementById("text");

 // let offsetX, offsetY;

 frame2.addEventListener('dragstart', (e)=>{
     offsetX = e.clientX - frame2.getBoundingClientRect().left;
     offsetY = e.clientY - frame2.getBoundingClientRect().top;
     console.log('working...');

     frame2.style.opacity = '0.5';
 })


 frame2.addEventListener('drag', (e)=>{
     if (e.clientX === 0 & e.clientY === 0)return;

     frame2.style.left = `${e.clientX - offsetX}px`;
     frame2.style.top = `${e.clientY - offsetY}px`;
     console.log('testig...')
 })

 frame2.addEventListener('dragend', (e)=>{
     frame2.style.opacity = '1';
     console.log('done')
 })
 // 3nd Frame............!
 const frame3 = document.getElementById("frame3");
 // const text = document.getElementById("text");

 // let offsetX, offsetY;

 frame3.addEventListener('dragstart', (e)=>{
     offsetX = e.clientX - frame3.getBoundingClientRect().left;
     offsetY = e.clientY - frame3.getBoundingClientRect().top;
     console.log('working...');

     frame3.style.opacity = '0.5';
 })


 frame3.addEventListener('drag', (e)=>{
     if (e.clientX === 0 & e.clientY === 0)return;

     frame3.style.left = `${e.clientX - offsetX}px`;
     frame3.style.top = `${e.clientY - offsetY}px`;
     console.log('testig...')
 })

 frame3.addEventListener('dragend', (e)=>{
     frame3.style.opacity = '1';
     console.log('done')
 })


 // 4nd Frame............!
const frame4 = document.getElementById("frame4");
// const text = document.getElementById("text");

// let offsetX, offsetY;

frame4.addEventListener('dragstart', (e)=>{
    offsetX = e.clientX - frame4.getBoundingClientRect().left;
    offsetY = e.clientY - frame4.getBoundingClientRect().top;
    console.log('working...');

    frame4.style.opacity = '0.5';
})


frame4.addEventListener('drag', (e)=>{
    if (e.clientX === 0 & e.clientY === 0)return;

    frame4.style.left = `${e.clientX - offsetX}px`;
    frame4.style.top = `${e.clientY - offsetY}px`;
    console.log('testig...')
})

frame4.addEventListener('dragend', (e)=>{
    frame4.style.opacity = '1';
    console.log('done')
})


// 5th Frame............!
const frame5 = document.getElementById("frame5");
// const text = document.getElementById("text");

// let offsetX, offsetY;

frame5.addEventListener('dragstart', (e)=>{
    offsetX = e.clientX - frame5.getBoundingClientRect().left;
    offsetY = e.clientY - frame5.getBoundingClientRect().top;
    console.log('working...');

    frame5.style.opacity = '0.5';
})


frame5.addEventListener('drag', (e)=>{
    if (e.clientX === 0 & e.clientY === 0)return;

    frame5.style.left = `${e.clientX - offsetX}px`;
    frame5.style.top = `${e.clientY - offsetY}px`;
    console.log('testig...')
})

frame5.addEventListener('dragend', (e)=>{
    frame5.style.opacity = '1';
    console.log('done')
})



// 6th Frame............!
const frame6 = document.getElementById("frame6");
// const text = document.getElementById("text");

// let offsetX, offsetY;

frame6.addEventListener('dragstart', (e)=>{
    offsetX = e.clientX - frame6.getBoundingClientRect().left;
    offsetY = e.clientY - frame6.getBoundingClientRect().top;
    console.log('working...');

    frame6.style.opacity = '0.5';
})


frame6.addEventListener('drag', (e)=>{
    if (e.clientX === 0 & e.clientY === 0)return;

    frame6.style.left = `${e.clientX - offsetX}px`;
    frame6.style.top = `${e.clientY - offsetY}px`;
    console.log('testig...')
})

frame6.addEventListener('dragend', (e)=>{
    frame6.style.opacity = '1';
    console.log('done')
})


// 7th Frame............!
const frame7 = document.getElementById("frame7");
// const text = document.getElementById("text");

// let offsetX, offsetY;

frame7.addEventListener('dragstart', (e)=>{
    offsetX = e.clientX - frame7.getBoundingClientRect().left;
    offsetY = e.clientY - frame7.getBoundingClientRect().top;
    console.log('working...');

    frame7.style.opacity = '0.5';
})


frame7.addEventListener('drag', (e)=>{
    if (e.clientX === 0 & e.clientY === 0)return;

    frame7.style.left = `${e.clientX - offsetX}px`;
    frame7.style.top = `${e.clientY - offsetY}px`;
    console.log('testig...')
})

frame7.addEventListener('dragend', (e)=>{
    frame7.style.opacity = '1';
    console.log('done')
})


// 8th Frame............!
const frame8 = document.getElementById("frame8");
// const text = document.getElementById("text");

// let offsetX, offsetY;

frame8.addEventListener('dragstart', (e)=>{
    offsetX = e.clientX - frame8.getBoundingClientRect().left;
    offsetY = e.clientY - frame8.getBoundingClientRect().top;
    console.log('working...');

    frame8.style.opacity = '0.5';
})


frame8.addEventListener('drag', (e)=>{
    if (e.clientX === 0 & e.clientY === 0)return;

    frame8.style.left = `${e.clientX - offsetX}px`;
    frame8.style.top = `${e.clientY - offsetY}px`;
    console.log('testig...')
})

frame8.addEventListener('dragend', (e)=>{
    frame8.style.opacity = '1';
    console.log('done')
})


// 9th Frame............!
const frame9 = document.getElementById("frame9");
// const text = document.getElementById("text");

// let offsetX, offsetY;

frame9.addEventListener('dragstart', (e)=>{
    offsetX = e.clientX - frame9.getBoundingClientRect().left;
    offsetY = e.clientY - frame9.getBoundingClientRect().top;
    console.log('working...');

    frame9.style.opacity = '0.5';
})


frame9.addEventListener('drag', (e)=>{
    if (e.clientX === 0 & e.clientY === 0)return;

    frame9.style.left = `${e.clientX - offsetX}px`;
    frame9.style.top = `${e.clientY - offsetY}px`;
    console.log('testig...')
})

frame9.addEventListener('dragend', (e)=>{
    frame9.style.opacity = '1';
    console.log('done')
})


//final Frame............!
const frame10 = document.getElementById("frame10");
// const text = document.getElementById("text");

// let offsetX, offsetY;

frame10.addEventListener('dragstart', (e)=>{
    offsetX = e.clientX - frame10.getBoundingClientRect().left;
    offsetY = e.clientY - frame10.getBoundingClientRect().top;
    console.log('working...');

    frame10.style.opacity = '0.5';
})


frame10.addEventListener('drag', (e)=>{
    if (e.clientX === 0 & e.clientY === 0)return;

    frame10.style.left = `${e.clientX - offsetX}px`;
    frame10.style.top = `${e.clientY - offsetY}px`;
    console.log('testig...')
})

frame10.addEventListener('dragend', (e)=>{
    frame10.style.opacity = '1';
    console.log('done')
})