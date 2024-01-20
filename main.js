const text = 'Когда с левого берега Камы, на котором лежит моя родная Пермь, смотришь на правый с его синеющими до горизонта лесами, чувствуешь зыбкость границы между цивилизацией и первозданной лесной стихией. Их разделяет только полоса воды, и она же их объединяет. Если ребенком вы жили в городе на большой реке, вам повезло: суть жизни вы понимаете лучше, чем те, кто был лишен этого счастья.В моем детстве в Каме еще водилась стерлядь. В старину ее отправляли в Петербург к царскому столу, а чтобы не испортилась в пути, под жабры клали смоченную в коньяке вату. Мальчиком я видел на песке маленького осетра с испятнанной мазутом зубчатой спиной: вся Кама была тогда в мазуте от буксиров. Эти грязные трудяги тащили за собой плоты и баржи. На палубах бегали дети и сушилось на солнце бельё. Нескончаемые вереницы сбитых скобами осклизлых брёвен исчезли вместе с буксирами и баржами. Кама стала чище, но стерлядь в нее так и не вернулась.Говорили, что Пермь, подобно Москве и Риму, лежит на семи холмах. Этого было достаточно, чтобы ощутить, как над моим деревянным, утыканным заводскими трубами городом веет дыхание истории. Его улицы идут или параллельно Каме, или перпендикулярно ей. Первые до революции назывались по стоявшим на них храмам, как, например, Вознесенская или Покровская. Вторые носили имена тех мест, куда вели вытекающие из них дороги: Сибирская, Соликамская, Верхотурская. Там, где они пересекались, небесное встречалось с земным. Здесь я понял, что дольнее рано или поздно сходится с горним, нужно лишь набраться терпения и подождать.Пермяки утверждают, что не Кама впадает в Волгу, а, наоборот, Волга в Каму. Мне не важно, какая из двух этих великих рек является притоком другой. В любом случае Кама - та река, которая течёт через мое сердце.';

class Game{
    constructor(text) {
        this.info = document.getElementById('info');
        this.lable1 = document.getElementById('lable1');
        this.lable2 = document.getElementById('lable2');

        if (this.info === null) throw new Error('Не найден элемент с id "info"');
        if (this.lable1 === null) throw new Error('Не найден элемент с id "lable1"');
        if (this.lable2 === null) throw new Error('Не найден элемент с id "lable2"');

        this.simbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '
        this.text1 = '';
        this.text2 = text;

        this.totalLength = 30;
        this.maxFirstLength = 10;
        this.textLast = 0;
        this.speed = 0;
        this.clicks = 0;
        this.mistakes = 0;

        this.lable1.innerHTML = this.text1;
        this.lable2.innerHTML = this.text2.slice(0, this.totalLength);
        this.info.innerHTML = `0/${this.text2.length + 1}, ${this.rounded(0/(this.text2.length + 1)) * 100 + '%'}, ${this.speed}, ${this.mistakes}`;

        setInterval(() => {
            this.speed = this.clicks
            this.info.innerHTML = `${this.text1.length + 1}/${this.text2.length + 1}, ${this.rounded((this.text1.length + 1)/(this.text2.length + 1)) * 100 + '%'}, ${this.speed}, ${this.mistakes}`;
            this.clicks = 0;
        }, 1000*1);

        addEventListener("keypress", (event) => {
            if (event.key === this.text2[0]) {
                this.clicks += 1;
                this.text1 += this.text2[0];
                this.text2 = this.text2.slice(1, );
                if (this.text2.length <= this.totalLength - this.maxFirstLength) {
                    this.lable1.innerHTML = this.text1.slice(-(this.maxFirstLength + this.textLast), );
                    this.textLast++;
                } else {
                    this.lable1.innerHTML = this.text1.slice(-this.maxFirstLength, );
                };
                if (this.text1.length < this.maxFirstLength) {
                    this.lable2.innerHTML = this.text2.slice(0, this.totalLength - this.text1.length);
                } else{
                    this.lable2.innerHTML = this.text2.slice(0, this.totalLength - this.maxFirstLength);
                };
            } else if (this.simbols.indexOf(event.key) === -1) {
                this.mistakes++;
            };
        });
    };

    rounded(number){
        return Math.round(parseFloat(number) * 100) / 100;
    };
};

new Game(text);
