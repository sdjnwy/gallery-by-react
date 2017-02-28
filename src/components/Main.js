require('normalize.css/normalize.css');
require('../styles/App.css');

import React from 'react';

let imageDatas = require('../data/imageDatas.json');

imageDatas =(function genImageURL(imageDataArr) {
		let j=imageDataArr.length;
		for (let i=0;i<j;i++){
			let singleImageData = imageDataArr[i];
			singleImageData.imageURL = require('../images/'+singleImageData.fileName);

			imageDataArr[i] = singleImageData;
		}

		return imageDataArr;
	})(imageDatas);



class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section className="img-sec">
      	</section>
      	<nav className="controller-nav">
      	</nav>
      </section>
    )
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
