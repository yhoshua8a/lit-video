import {
    html
} from 'lit-element';

const componentHTML = (...properties) => {
        const [option, src, type, txtError, formats, poster, intervalReproduction, track, preload, autoplay] = properties;
        let template = null;
        if(option === 'simple'){
          template =  html`
            <video
               id="video"
               src=${src + intervalReproduction}
               type=${type} 
               poster=${poster} 
               preload=${preload}
               autoplay=${autoplay}
               controls>
               <track 
                   src=${track.src}
                   label=${track.label}
                   kind=${track.kind} 
                   srclang=${track.srclang} 
                   default>
              <p>${txtError}</p>
            </video>`

        }else if(option === 'complex'){

          template =  html`
          <video 
            id="video"
            poster=${poster} 
            preload=${preload}
            autoplay=${autoplay}
            controls> 
          ${formats.map(video => html`
           <source src=${video.src} type=${video.type}> 
          `)}
          <track 
                    src=${track.src}
                    label=${track.label}
                    kind=${track.kind} 
                    srclang=${track.srclang} 
                    default>
        <p>${txtError}</p>
      </video>
          `

        }

    return html `
    <div class="container">
        <div class="video">
          ${template}
        </div>
    </div>
    `;     
}

export default componentHTML;