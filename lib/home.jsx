import _ from 'lodash';
import React from 'react';
import {Collage} from './collage.jsx!';
import {LightBox} from './lightBox.jsx!';
import {InfiniteScroll} from './infiniteScroll.jsx!';
import {emitter} from './events';
import {router} from './main';
import 'font-awesome/css/font-awesome.css!';

var imgs = [
  {
    link: 'images/Arizona.jpg',
    id: 'Arizona',
    alt: 'Arizona',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/AT1.jpg',
    id: 'AT1',
    alt: 'AT1',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/AT15.jpg',
    id: 'AT15',
    alt: 'AT15',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/august457.jpg',
    id: 'august457',
    alt: 'august457',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/august582_edited-2.jpg',
    id: 'august582_edited-2',
    alt: 'august582_edited-2',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/august_0115_edited-1.jpg',
    id: 'august_0115_edited-1',
    alt: 'august_0115_edited-1',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/AZ_10_0340.JPG',
    id: 'AZ_10_0340',
    alt: 'AZ_10_0340',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/AZ_flower19.jpg',
    id: 'AZ_flower19',
    alt: 'AZ_flower19',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/AZ_flower24.jpg',
    id: 'AZ_flower24',
    alt: 'AZ_flower24',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/AZ_flower3.jpg',
    id: 'AZ_flower3',
    alt: 'AZ_flower3',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/AZ_flower4.jpg',
    id: 'AZ_flower4',
    alt: 'AZ_flower4',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/bird.jpg',
    id: 'bird',
    alt: 'bird',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/bird2.jpg',
    id: 'bird2',
    alt: 'bird2',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/blackbutterfly.jpg',
    id: 'blackbutterfly',
    alt: 'blackbutterfly',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/BPZ1.jpg',
    id: 'BPZ1',
    alt: 'BPZ1',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Cabo4.jpg',
    id: 'Cabo4',
    alt: 'Cabo4',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Cabo5b.jpg',
    id: 'Cabo5b',
    alt: 'Cabo5b',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Cabo_sunrise.jpg',
    id: 'Cabo_sunrise',
    alt: 'Cabo_sunrise',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/cactus10.jpg',
    id: 'cactus10',
    alt: 'cactus10',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/cactus12.jpg',
    id: 'cactus12',
    alt: 'cactus12',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/cactus2_(2).jpg',
    id: 'cactus2_(2)',
    alt: 'cactus2_(2)',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/cactus3_(2).jpg',
    id: 'cactus3_(2)',
    alt: 'cactus3_(2)',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/cactus4.jpg',
    id: 'cactus4',
    alt: 'cactus4',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/cactus5.jpg',
    id: 'cactus5',
    alt: 'cactus5',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/cactus8.jpg',
    id: 'cactus8',
    alt: 'cactus8',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/cactus_(2).jpg',
    id: 'cactus_(2)',
    alt: 'cactus_(2)',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/centerstage.jpg',
    id: 'centerstage',
    alt: 'centerstage',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/chelsea081_edited-1.jpg',
    id: 'chelsea081_edited-1',
    alt: 'chelsea081_edited-1',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/chelseainmay032_edited-1.jpg',
    id: 'chelseainmay032_edited-1',
    alt: 'chelseainmay032_edited-1',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/chickadee.jpg',
    id: 'chickadee',
    alt: 'chickadee',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/clocktower.jpg',
    id: 'clocktower',
    alt: 'clocktower',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/cloud_(2).jpg',
    id: 'cloud_(2)',
    alt: 'cloud_(2)',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/coneflower1.jpg',
    id: 'coneflower1',
    alt: 'coneflower1',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/coneflower2_(2).jpg',
    id: 'coneflower2_(2)',
    alt: 'coneflower2_(2)',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Dog_Beach1.jpg',
    id: 'Dog_Beach1',
    alt: 'Dog_Beach1',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Dog_Beach10.jpg',
    id: 'Dog_Beach10',
    alt: 'Dog_Beach10',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Dog_Beach11.jpg',
    id: 'Dog_Beach11',
    alt: 'Dog_Beach11',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Dog_Beach12.jpg',
    id: 'Dog_Beach12',
    alt: 'Dog_Beach12',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Dog_Beach2.jpg',
    id: 'Dog_Beach2',
    alt: 'Dog_Beach2',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Dog_Beach3.jpg',
    id: 'Dog_Beach3',
    alt: 'Dog_Beach3',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Dog_Beach4.jpg',
    id: 'Dog_Beach4',
    alt: 'Dog_Beach4',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Dog_Beach5.jpg',
    id: 'Dog_Beach5',
    alt: 'Dog_Beach5',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Dog_Beach6.jpg',
    id: 'Dog_Beach6',
    alt: 'Dog_Beach6',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Dog_Beach7.jpg',
    id: 'Dog_Beach7',
    alt: 'Dog_Beach7',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Dog_Beach8.jpg',
    id: 'Dog_Beach8',
    alt: 'Dog_Beach8',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Dog_Beach9.jpg',
    id: 'Dog_Beach9',
    alt: 'Dog_Beach9',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/fallbeatle.jpg',
    id: 'fallbeatle',
    alt: 'fallbeatle',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/farm.jpg',
    id: 'farm',
    alt: 'farm',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/fleurs_0062.JPG',
    id: 'fleurs_0062',
    alt: 'fleurs_0062',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/fleurs_0078.JPG',
    id: 'fleurs_0078',
    alt: 'fleurs_0078',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/fleurs_0314_1.jpg',
    id: 'fleurs_0314_1',
    alt: 'fleurs_0314_1',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/fleurs_0452.JPG',
    id: 'fleurs_0452',
    alt: 'fleurs_0452',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/fleurs_0467.JPG',
    id: 'fleurs_0467',
    alt: 'fleurs_0467',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/flowers130-1.jpg',
    id: 'flowers130-1',
    alt: 'flowers130-1',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Gasp.jpg',
    id: 'Gasp',
    alt: 'Gasp',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/goldfinch.jpg',
    id: 'goldfinch',
    alt: 'goldfinch',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Guatemala13.jpg',
    id: 'Guatemala13',
    alt: 'Guatemala13',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Guatemala15.jpg',
    id: 'Guatemala15',
    alt: 'Guatemala15',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Guatemala16.jpg',
    id: 'Guatemala16',
    alt: 'Guatemala16',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Guatemala19.jpg',
    id: 'Guatemala19',
    alt: 'Guatemala19',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Guatemala27.jpg',
    id: 'Guatemala27',
    alt: 'Guatemala27',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Guatemala28.jpg',
    id: 'Guatemala28',
    alt: 'Guatemala28',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Guatemala37.jpg',
    id: 'Guatemala37',
    alt: 'Guatemala37',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/hash_suzanne_flamingo.jpg',
    id: 'hash_suzanne_flamingo',
    alt: 'hash_suzanne_flamingo',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/hash_suzanne_hummingbird.jpg',
    id: 'hash_suzanne_hummingbird',
    alt: 'hash_suzanne_hummingbird',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/hash_suzanne_swallows.jpg',
    id: 'hash_suzanne_swallows',
    alt: 'hash_suzanne_swallows',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/hash_suzanne_swan.jpg',
    id: 'hash_suzanne_swan',
    alt: 'hash_suzanne_swan',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/hawk.jpg',
    id: 'hawk',
    alt: 'hawk',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/HH-Hootie.jpg',
    id: 'HH-Hootie',
    alt: 'HH-Hootie',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Hibiscus.jpg',
    id: 'Hibiscus',
    alt: 'Hibiscus',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/horsies1.jpg',
    id: 'horsies1',
    alt: 'horsies1',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/IMG_8780_(2014_02_04_01_25_52_UTC).JPG',
    id: 'IMG_8780_(2014_02_04_01_25_52_UTC)',
    alt: 'IMG_8780_(2014_02_04_01_25_52_UTC)',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/iowa-1.jpg',
    id: 'iowa-1',
    alt: 'iowa-1',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/macaws.jpg',
    id: 'macaws',
    alt: 'macaws',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/mariachi.jpg',
    id: 'mariachi',
    alt: 'mariachi',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/May_2011_16.jpg',
    id: 'May_2011_16',
    alt: 'May_2011_16',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/May_2011_9.jpg',
    id: 'May_2011_9',
    alt: 'May_2011_9',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/morningcolors.jpg',
    id: 'morningcolors',
    alt: 'morningcolors',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/orange.jpg',
    id: 'orange',
    alt: 'orange',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Ozzys_Eye.jpg',
    id: 'Ozzys_Eye',
    alt: 'Ozzys_Eye',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/poolside.jpg',
    id: 'poolside',
    alt: 'poolside',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/purplebee.jpg',
    id: 'purplebee',
    alt: 'purplebee',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/redbelle.jpg',
    id: 'redbelle',
    alt: 'redbelle',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/redberrydroplet.jpg',
    id: 'redberrydroplet',
    alt: 'redberrydroplet',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Sedona-RedRockCrossing.jpg',
    id: 'Sedona-RedRockCrossing',
    alt: 'Sedona-RedRockCrossing',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/sedona2010_0689.jpg',
    id: 'sedona2010_0689',
    alt: 'sedona2010_0689',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/sedona2010_4.jpg',
    id: 'sedona2010_4',
    alt: 'sedona2010_4',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/sedona2010_mitten_ridge.jpg',
    id: 'sedona2010_mitten_ridge',
    alt: 'sedona2010_mitten_ridge',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/Sedona_Panorama1.jpg',
    id: 'Sedona_Panorama1',
    alt: 'Sedona_Panorama1',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/sedona_sunset.jpg',
    id: 'sedona_sunset',
    alt: 'sedona_sunset',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/snail.jpg',
    id: 'snail',
    alt: 'snail',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/sneaking.jpg',
    id: 'sneaking',
    alt: 'sneaking',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/somewhereinspain.jpg',
    id: 'somewhereinspain',
    alt: 'somewhereinspain',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/spain&portugal-1752_edited-1.JPG',
    id: 'spain&portugal-1752_edited-1',
    alt: 'spain&portugal-1752_edited-1',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/spider.jpg',
    id: 'spider',
    alt: 'spider',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/thunder.jpg',
    id: 'thunder',
    alt: 'thunder',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/tulip7.jpg',
    id: 'tulip7',
    alt: 'tulip7',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/tulips_0188_edited-1.jpg',
    id: 'tulips_0188_edited-1',
    alt: 'tulips_0188_edited-1',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/twolittlebirds.jpg',
    id: 'twolittlebirds',
    alt: 'twolittlebirds',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/windowandroof.jpg',
    id: 'windowandroof',
    alt: 'windowandroof',
    widths: [1024, 520, 320]
  },
  {
    link: 'images/yellowleaf.jpg',
    id: 'yellowleaf',
    alt: 'yellowleaf',
    widths: [1024, 520, 320]
  }
];

export var HomePage = React.createClass({
  selectedImageIndex: function() {
    return _.indexOf(this.state.images, this.state.lightBoxImage);
  },
  nextImage: function() {
    this.openLightBox(this.state.images[this.selectedImageIndex() === this.state.images.length - 1 ? 0 : this.selectedImageIndex() + 1]);
  },
  previousImage: function() {
    this.openLightBox(this.state.images[this.selectedImageIndex() === 0 ? this.state.images.length - 1 : this.selectedImageIndex() - 1]);
  },
  closeLightBox: function() {
    router.setRoute('/');
    this.setState({ lightBoxImage: null, infiniteScrollStyle: null });
  },
  openLightBox: function(img) {
    router.setRoute('/' + img.id);
    this.setState({ lightBoxImage: img, infiniteScrollStyle: { display: 'none' } });
  },
  findAndOpenImage: function(imageId) {
    var image = _.findWhere(this.state.images, { id: imageId });
    if (image) {
      this.openLightBox(image);
    } else {
      router.setRoute('/');
    }
  },
  getInitialState: function() {
    return { images: imgs.slice() };
  },
  loadMore: function() {
    return; // don't load more for now
    this.setState({ images: this.state.images.concat(imgs.slice()) });
  },
  onKeyUp: _.throttle(function(e) {
    if (!this.state.lightBoxImage) return true;

    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;

    // Left arrow
    if (charCode === 37) {
      this.previousImage();
      return false;

    // Right arrow
    } else if (charCode === 39) {
      this.nextImage();
      return false;

    // Escape key
    } else if (charCode === 27) {
      this.closeLightBox();
      return false;
    }

    return true;
  }, 200),
  componentWillMount: function() {
    document.onkeyup = this.onKeyUp;
    emitter.on('lightBox:openImage', this.findAndOpenImage);
  },
  componentWillUnMount: function() {
    emitter.removeListener('lightBox:openImage', this.findAndOpenImage);
  },
  render: function() {
    return <div className='no-scrolling home-wrapper'>
      { this.state.lightBoxImage ? <LightBox closeLightBox={this.closeLightBox} previousImage={this.previousImage} nextImage={this.nextImage} img={this.state.lightBoxImage} /> : '' }
      <InfiniteScroll loadMore={this.loadMore} styles={ this.state.infiniteScrollStyle }>
        <Collage imgs={this.state.images} openLightBox={this.openLightBox} />
      </InfiniteScroll>
    </div>;
  }
});


