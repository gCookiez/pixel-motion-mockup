export class carouselFiller {
    constructor() {
        this.wrapper = document.createElement('div');
        this.content = document.createElement('div');

        this.pointOverlay = document.createElement('div');
        this.pointOverlay.classList.add('slide-change-overlay');

        this.leftSlideClick = document.createElement('div');
        this.leftSlideClick.setAttribute('id', 'left-slide-view');
        this.rightSlideClick = document.createElement('div');
        this.rightSlideClick.setAttribute('id', 'right-slide-view');

        this.leftSlideClick.addEventListener('click', () => {this.prevSlide()});
        this.rightSlideClick.addEventListener('click', () => {this.nextSlide()});

        this.pointOverlay.append(this.leftSlideClick, this.rightSlideClick);

        this.slideCount = document.createElement('div');
        this.refDot = document.createElement('div');
        this.pointer = 0;


        this.wrapper.classList.add('carousel-wrapper', 'pt-2', 'pb-5');
        this.content.classList.add('carousel-content');
        this.slideCount.classList.add('slide-count', 'pt-4');
        this.refDot.classList.add('ref-dot');

        this.wrapper.append(this.pointOverlay, this.content, this.slideCount, );
        return { list: this.wrapper, carouselModule: this };
    }

    readCount() {
        return this.content.children.length;
    }

    checkCount() {
        return this.readCount() <= 0;
    }

    updatePointerPos() {
        const checkFail = this.slideCount.querySelector('.active');
        if (checkFail == null) return;
        checkFail.classList.remove('active');
        this.slideCount.children[this.pointer].classList.add('active');
    }

    updateSlideCount() {
        this.slideCount.replaceChildren()

        if (this.checkCount()) return;


        for (var i = 0; i < this.content.children.length; i++) {
            const clone = this.refDot.cloneNode(true);
            this.slideCount.append(clone);
        }

        const checkFail = this.slideCount.querySelector('.active');
        if (checkFail == null) {
            this.slideCount.children[this.pointer].classList.add('active');
        }

    }

    addSlide(div, iter) {
        div.classList.add(`frame-${iter}`)
        this.content.append(div);
        this.updateSlideCount();
    }

    nextSlide() {
        if (this.checkCount() || this.content.children.length == 1) return;

        (this.pointer + 1) % this.readCount() == 0 ? this.pointer = 0 : this.pointer = this.pointer + 1;

        this.changeSlide();

    }

    prevSlide() {
        if (this.checkCount() || this.content.children.length == 1) return;

        this.pointer - 1 < 0 ? this.pointer = this.readCount() - 1 : this.pointer = this.pointer - 1;

        this.changeSlide();

    }

    changeSlide() {
        setTimeout(() => {
            this.wrapper.querySelector(`.frame-${this.pointer}`).classList.remove('hidden');
            this.wrapper.querySelectorAll(`.carousel-content > :not(.frame-${this.pointer})`).forEach((v,k) => v.classList.add('hidden'));
            this.updatePointerPos();
        })
    }

}

//consider media sizing