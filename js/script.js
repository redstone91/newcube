const cube = document.querySelector('.cube');
function selectEdge() {

    document.querySelectorAll('nav a').forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault(); // останавливаем всплытие собития (чтобы не перезагружалась страница)
            let edgeName = e.target.hash.replace(/#/, ''); // back(example)
            const degs = {
                back: { X: -180, Y: 0, res: 1 },
                top: { X: 90, Y: 0, res: 2 },
                front: { X: 0, Y: 0, res: 3 },
                bottom: { X: -90, Y: 0, res: 4 },
                left: { X: 0, Y: -90, res: 5 },
                right: { X: 0, Y: 90, res: 6 },
            }
            cube.style.transform = 'perspective(700px) rotateX(' + degs[edgeName].X + 'deg) rotateY(' + degs[edgeName].Y + 'deg)';
            document.querySelector('.result').textContent = `RESULT: ${degs[edgeName].res}`;
        })
    });
}

document.addEventListener('DOMContentLoaded', () => {
    selectEdge();
});


cube.addEventListener('click', () => {
    let edgeName = ['back', 'top', 'front', 'bottom', 'left', 'right'];
    let random = Math.round(Math.random() * 5); //3 
    const degs = {
        back: { X: -180, Y: 0, res: 1 },
        top: { X: 90, Y: 0, res: 2 },
        front: { X: 0, Y: 0, res: 3 },
        bottom: { X: -90, Y: 0, res: 4 },
        left: { X: 0, Y: -90, res: 5 },
        right: { X: 0, Y: 90, res: 6 },
    }
    cube.style.transform = 'perspective(700px) rotateX(' + degs[edgeName[random]].X + 'deg) rotateY(' + degs[edgeName[random]].Y + 'deg)';
    document.querySelector('.result').textContent = `RESULT: ${degs[edgeName[random]].res}`;
})
