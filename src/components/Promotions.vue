<template>
  <RouterLink
    to="/product/1"
    class="Cards-Box"
    :style="{ backgroundColor: bg }">
      <div>
        <div class="Text">{{ Text }}</div>
        <div class="btn">
          <Button :bgBtn="bgBtn" :TextBtn="TextBtn" />
        </div>
      </div>
      <img class="Img" :src="Img" alt="Item" />
  </RouterLink>
</template>

<script>
import Button from "./button.vue";
export default {
  name: "Promotions",
  props: ["Img", "Text", "bg", "bgBtn", "TextBtn", "link"],
  components: {
    Button,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@1,300;1,400;1,500;1,600;1,700&family=Poppins:wght@300;400;500;600;800&family=Quicksand:wght@400;600;700&display=swap");

.Cards-Box {
  width: 482px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: relative;
}
.Cards-Box:hover {
  transform: translate(5px, 5px);
  cursor: pointer;
}
.Img {
  margin-left: 80px;
  width: 400px;
}
.Text {
  font-family: "Quicksand", sans-serif;
  font-size: 22px;
  width: 240px;
  font-weight: 600;
  position: absolute;
  top: 80px;
  left: 40px;
}
.btn {
  position: absolute;
  bottom: 40px;
  left: 40px;
}
</style>
