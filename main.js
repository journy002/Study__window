// window size 표기[S] //

// const tag = document.querySelector(".tag");
// function updateTag() {
//     tag.innerHTML = `
//     window.screen: ${window.screen.width}, ${window.screen.height}<br/>
//     window.outer: ${window.outerWidth}, ${window.outerHeight}<br/>
//     window.inner: ${window.innerWidth}, ${window.innerHeight}<br/>
//     `;
// }

// window.addEventListener("resize", () => {
//     updateTag();
// });
// updateTag();

// window size 표기[E] //

// 브라우저 좌표[S] //
const specialBox = document.querySelector(".box.special");
const scrollByy = document.querySelector(".scrollBy");
const scrollToo = document.querySelector(".scrollTo");
const scrollInto = document.getElementById("scrollInto");

scrollToo.addEventListener("click", () => {
    window.scrollTo(0, 100);
});

scrollByy.addEventListener("click", () => {
    window.scrollBy({
        left: 0,
        top: 100,
        behavior: "smooth",
    });
});
scrollInto.addEventListener("click", () => {
    specialBox.scrollIntoView({ behavior: "smooth" });
});

specialBox.addEventListener("click", (e) => {
    const rect = specialBox.getBoundingClientRect();
    console.log(rect, "rect");
    console.log(`
    clientX: ${e.clientX}, clientY: ${e.clientY}
    PageX: ${e.pageX}, pageY: ${e.pageY}
    `);
    // clientY는 그 당시에 눈에 딱 보이는 브라우저 제일 상위에 있는 좌표에서 시작
    // pageY는 페이지 제일 상위에 있는 좌표에서 시작
});

// 브라우저 좌표[E] //
