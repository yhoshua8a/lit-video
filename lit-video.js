import { LitElement } from 'lit-element';
import componentHTML from './lit-video-html';
import stylesComponent from './lit-video-styles';


class LitVideo extends LitElement {

    constructor() {
        super();
        this.__initProperties();
    }

    static get properties() {
        return {
            option: { type: String },
            src: { type: String },
            type: { type: String },
            txtError: { type: String },
            formats: { type: Array },
            poster: { type: String },
            //#t=[start_time][,end_time]
            intervalReproduction: { type: String },
            track: { type: Object },
            autoplay: { type: Boolean }
        }
    }

    __initProperties() {
        this.option = "simple";
        this.src = "";
        this.type = "";
        this.txtError = "default";
        this.formats = [];
        this.poster = "";
        this.intervalReproduction = "";
        this.track = {};
        this.preload = "";
        this.autoplay = false;
    }


    static get styles() {
        return stylesComponent();
    }

    render() {
        return componentHTML(
            this.option,
            this.src,
            this.type,
            this.txtError,
            this.formats,
            this.poster,
            this.intervalReproduction,
            this.track,
            this.preload,
            this.autoplay);
    }

    _load() {
        if(this.shadowRoot.querySelector('#video')){
          this.shadowRoot.querySelector('#video').load();
        }else{
            return;
        }
    }

    _play() {
        if(this.shadowRoot.querySelector('#video')){
          this.shadowRoot.querySelector('#video').play();
        }else{
            return;
        }
    }

    _pause() {
        if(this.shadowRoot.querySelector('#video')){
          this.shadowRoot.querySelector('#video').pause();
        }else{
            return;
        }
    }

}

customElements.define('lit-video', LitVideo);