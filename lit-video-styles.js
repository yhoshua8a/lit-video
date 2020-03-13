import { css } from 'lit-element';


const stylesComponent = () => {

    return css `
:host{
  }

  .video {
	display: grid;
	grid-template-columns: repeat(16, 1fr);
	grid-template-rows: repeat(9, 1fr);
	position: relative;
}

.video::before {
	content: "";
	display: block;
	padding-bottom: 100%;
}

.video > iframe,
  .video > video {
	position: absolute;
	width: 100%;
	height: 100%;
}

.container {
	width: 75%;
	max-width: 960px;
	min-width: 320px;
	margin-left: auto;
	margin-right: auto;
}

`
}
export default stylesComponent;