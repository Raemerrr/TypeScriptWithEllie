import { ImageComponet } from './component/item/ImageComponent.js';
import { PageComponent } from "./component/page/page.js";

class App {
    private readonly page: PageComponent
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponet('Image Title', 'https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforeend');
    }
}

new App(document.querySelector('.document')! as HTMLElement);