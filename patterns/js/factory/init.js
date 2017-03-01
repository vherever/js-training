define(function (require) {
    'use strict';

    return {
        init: function () {

            var myVideo, myImage,
                mediaFactory = require('factory/mediaFactory');

            myVideo = mediaFactory.createMedia('Video', {
                length: 5.6,
                name: 'My new video'
            });

            myImage = mediaFactory.createMedia('Image', {
                width: 100,
                height: 150,
                name: 'My new image'
            });

            console.log(myVideo, myImage);

        }
    };
});