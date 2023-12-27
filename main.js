class Game{
    constructor() {
        this.info = document.getElementById('info');
        this.input = document.getElementById('input');

        if (this.info === null) throw new Error('Не найден элемент с id "info"');
        if (this.input === null) throw new Error('Не найден элемент с id "input"');
        
        this.input.addEventListener('input', () => NaN);
    };

    start() {
        this.info.innerHTML = `количество написанных знаков / прогресс / скорость печати / количество ошибок / время`;
    };
};

new Game().start();
