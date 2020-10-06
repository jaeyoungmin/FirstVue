<template>
  <div class="airpod-pro-component">
    <div class="hero-copy">
      <h1>AirPods Pro</h1>
    </div>
    <canvas id="airpod-hero" />
  </div>
</template>

<script>
export default {
  name: 'AirPodPro',
  mounted() {
    const html = document.documentElement;
    const canvas = document.getElementById('airpod-hero');
    const context = canvas.getContext('2d');

    const frameCount = 148;
    const currentFrame = (index) =>
      `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
        .toString()
        .padStart(4, '0')}.jpg`;

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image();
    img.src = currentFrame(1);
    canvas.width = 1158;
    canvas.height = 770;
    img.onload = function() {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };

    window.addEventListener('scroll', () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });

    preloadImages();
  },
};
</script>

<style scoped lang="scss">
.airpod-pro-component {
  height: 300vh;
  background-color: black;

  h1 {
    top: 30vh;
    font-weight: 900;
    font-size: 8rem;
    z-index: 2;
    color: white;
    position: relative;
    text-align: center;
  }

  #airpod-hero {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 100vw;
    max-height: 100vh;
  }
}
</style>
