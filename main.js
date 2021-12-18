// window size 표기[S] //
const tag = document.querySelector(".tag");
function updateTag() {
    tag.innerHTML = `
    window.screen: ${window.screen.width}, ${window.screen.height}<br/>
    window.outer: ${window.outerWidth}, ${window.outerHeight}<br/>
    window.inner: ${window.innerWidth}, ${window.innerHeight}<br/>
    `;
}

window.addEventListener("resize", () => {
    updateTag();
});
updateTag();

// window size 표기[E] //

// 브라우저 좌표[S] //

// 브라우저 좌표[E] //
