export class carouselFiller {
    constructor() {
        this.wrapper = document.createElement('div')
        this.content = document.createElement('div');
        this.slideCount = document.createElement('div');
        this.refDot = document.createElement('div');
        this.pointer = 0;


        this.wrapper.classList.add('carousel-wrapper', 'pt-2', 'pb-5');
        this.content.classList.add('carousel-content');
        this.slideCount.classList.add('slide-count', 'pt-4');
        this.refDot.classList.add('ref-dot');

        this.wrapper.append(this.content, this.slideCount);
        return { list: this.wrapper, carouselModule: this };
    }

    readCount() {
        return this.content.children.length;
    }

    checkCount() {
        return this.readCount() <= 0;
    }


    updateSlideCount() {
        this.slideCount.replaceChildren()

        if (this.checkCount()) return;


        for (var i = 0; i < this.content.children.length; i++) {
            const clone = this.refDot.cloneNode(true);
            this.slideCount.append(clone);
        }

        this.slideCount.children[this.pointer].classList.add('active');
    }

    addSlide(div) {
        this.content.append(div);
        this.updateSlideCount();
    }

    nextSlide() {
        if (this.checkCount() || this.content.children.length == 1) return;

        this.readCount() % this.pointer + 1 == 0 ? this.pointer = 0 : this.pointer = this.pointer + 1;

        this.changeSlide();

    }

    prevSlide() {
        if (this.checkCount() || this.content.children.length == 1) return;

        this.pointer - 1 < 0 ? this.pointer = this.readCount() - 1 : this.pointer = this.pointer - 1;

        this.changeSlide();

    }

    changeSlide() {
        setTimeout(() => {
            this.content.querySelector(`.frame-${this.pointer}`).scrollIntoView()
        })
    }



}