function Projeto(num) {
    const Links = {
        Projeto1: 'url',
        Projeto2: 'url',
        Projeto3: 'url'
    }
    const { Projeto1, Projeto2, Projeto3 } = Links

    switch(num) {
        case 1:
            window.location.href = Projeto1
            break;
        case 2:
            window.location.href = Projeto2
            break;
        case 3:
            window.location.href = Projeto3
            break;
        default:
            window.location.href = Projeto5
            break;
    }
}