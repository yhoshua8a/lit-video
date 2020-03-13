# \<lit-video\>

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/lit-video)

**lit-video** is `LitElement` component for configure video

It allows render a responsive video with configuration to play, load, pause and show tracks

**Install**

 ```shell
npm i lit-video
 ```

 **import it**

 ```js
import 'lit-video/lit-video.js';
 ```

## Features
* Support multiple formats for videos
* Support subtitles for videos
* Responsive video adaptable to screen


## Properties

* **option**type of video(with or without formats)
* **src** source of video(only simple format)
* **type** format of video(only simple format)
* **txtError** text to show if browser is incopatible with format of video
* **formats** formats for videos(only multiple format)
* **poster** image for show before that video begin
* **intervalReproduction** internal reproduction for video
* **track** file vtt for subtitles
* **autoplay** plays video automatically

## Usage

**Simple video example**

```html

      <lit-video 
          id="first-video" 
          track='{
          "src":"subtitles-en.vtt",
          "label":"English captions",
          "kind":"captions",
          "srclang":"en"
          }' 
          intervalreproduction="#t=5,10" 
          option="simple" 
          src="https://storage.googleapis.com/webfundamentals-assets/videos/chrome.webm" 
          type="video/webm" 
          txterror="Tu navegador no es compatible con el elemento de video.">
      </lit-video>
```

**Multiple formats example**

``` html
       <lit-video 
          option="complex" 
          txterror="Tu navegador no es compatible con el elemento de video." 
          formats='[
          {"src":"https://storage.googleapis.com/webfundamentals-assets/videos/chrome.webm",
           "type":"video/webm"
         },
         {
             "src":"https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
             "type":"video/mp4"
         }
          ]' 
          track='{
             "src":"subtitles-es.vtt",
             "label":"Spanish captions",
             "kind":"captions",
             "srclang":"es"
         }'>
         </lit-video>
```
