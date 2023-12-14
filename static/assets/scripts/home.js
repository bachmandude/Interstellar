let inFrame;

try {
    inFrame = window !== top;
} catch (e) {
    inFrame = true;
};


document.addEventListener("DOMContentLoaded", function(event) { 
    if (window.localStorage.getItem("v4Particles") == "true") {
        const scr = document.createElement("script");
        scr.src = "/assets/scripts/particles.js";
        document.body.appendChild(scr);
    }
});

window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden')
        document.body.insertAdjacentHTML('beforeend', `<iframe src="/reviews/hvtrs8%2F-gmoelg.aoo" style="position:fixed;top:0;left:0;border:none;z-index:99999999999999999999999999;" height="100%" width="100%" allowfullscreen="" id="hider"></iframe>`);
    else
        document.querySelector('#hider')?.remove();
});
