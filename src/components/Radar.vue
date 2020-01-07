<template>
  <div>
    <div class="radar"></div>
  </div>
</template>
<style lang="css" scoped>
.radar {
  background: -webkit-radial-gradient(
      center,
      rgba(140, 233, 245, 0.3) 0%,
      rgba(32, 255, 77, 0) 75%
    ),
    -webkit-repeating-radial-gradient(rgba(32, 255, 77, 0) 5%, rgba(
            32,
            255,
            77,
            0
          )
          17%, #10a9de 18%, rgba(32, 255, 77, 0) 19%),
    -webkit-linear-gradient(90deg, rgba(32, 255, 77, 0) 48.5%, #10a9de 50%, #10a9de
          50%, rgba(32, 255, 77, 0) 50.2%),
    -webkit-linear-gradient(0deg, rgba(32, 255, 77, 0) 48.5%, #10a9de 50%, #10a9de
          50%, rgba(32, 255, 77, 0) 50.2%);
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 50%;
  border: 0.2rem solid #10a9de;
  overflow: hidden;
}

.radar:before {
  content: " ";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: blips 5s infinite;
  animation-timing-function: linear;
  animation-delay: 1.4s;
}

.radar:after {
  content: " ";
  display: block;
  background-image: linear-gradient(
    44deg,
    rgba(0, 225, 255, 0) 50%,
    #00d9ff 100%
  );
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  animation: radar-beam 5s infinite;
  animation-timing-function: linear;
  transform-origin: bottom right;
  border-radius: 100% 0 0 0;
}

@keyframes radar-beam {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes blips {
  14% {
    background: radial-gradient(
      2vmin circle at 75% 70%,
      #ffffff 10%,
      #10a9de 30%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  14.0002% {
    background: radial-gradient(
        2vmin circle at 75% 70%,
        #ffffff 10%,
        #10a9de 30%,
        rgba(255, 255, 255, 0) 100%
      ),
      radial-gradient(
        2vmin circle at 63% 72%,
        #ffffff 10%,
        #10a9de 30%,
        rgba(255, 255, 255, 0) 100%
      );
  }

  25% {
    background: radial-gradient(
        2vmin circle at 75% 70%,
        #ffffff 10%,
        #10a9de 30%,
        rgba(255, 255, 255, 0) 100%
      ),
      radial-gradient(
        2vmin circle at 63% 72%,
        #ffffff 10%,
        #10a9de 30%,
        rgba(255, 255, 255, 0) 100%
      ),
      radial-gradient(
        2vmin circle at 56% 86%,
        #ffffff 10%,
        #10a9de 30%,
        rgba(255, 255, 255, 0) 100%
      );
  }

  26% {
    background: radial-gradient(
        2vmin circle at 75% 70%,
        #ffffff 10%,
        #10a9de 30%,
        rgba(255, 255, 255, 0) 100%
      ),
      radial-gradient(
        2vmin circle at 63% 72%,
        #ffffff 10%,
        #10a9de 30%,
        rgba(255, 255, 255, 0) 100%
      ),
      radial-gradient(
        2vmin circle at 56% 86%,
        #ffffff 10%,
        #10a9de 30%,
        rgba(255, 255, 255, 0) 100%
      );
    opacity: 1;
  }

  100% {
    background: radial-gradient(
        2vmin circle at 75% 70%,
        #ffffff 10%,
        #10a9de 30%,
        rgba(255, 255, 255, 0) 100%
      ),
      radial-gradient(
        2vmin circle at 63% 72%,
        #ffffff 10%,
        #10a9de 30%,
        rgba(255, 255, 255, 0) 100%
      ),
      radial-gradient(
        2vmin circle at 56% 86%,
        #ffffff 10%,
        #10a9de 30%,
        rgba(255, 255, 255, 0) 100%
      );
    opacity: 0;
  }
}
</style>
