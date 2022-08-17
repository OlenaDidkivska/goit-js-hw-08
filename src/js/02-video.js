import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 'vimeo-player',
  width: 640,
});

const onPlay = function (data) {
  console.log(data);
};

player.on('timeupdate', onPlay);
