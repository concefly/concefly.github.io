

$(function () {

  var media = document.getElementById('media-node');

  function mediaSuccess(stream) {
    var audioCtx = new AudioContext();
    var source = audioCtx.createMediaStreamSource(stream);
    var destination = audioCtx.destination;
    // 延时器
    var audioDelayNode = audioCtx.createDelay(6);
    // 连接
    // source.connect(audioDelayNode);
    // audioDelayNode.connect(destination);
    source.connect(destination);
    // attach
    attachMediaStream(media, destination.stream);
  }

  function mediaFailure(e) {
    throw e
  }

  AdapterJS.webRTCReady(function () {
    getUserMedia({
      audio: true,
    }, mediaSuccess, mediaFailure);
  });

});