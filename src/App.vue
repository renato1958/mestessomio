<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#navigation {
  display: flex;
  flex-direction: column;
}

#navigation a:link,
a:visited {
  color: #223344;
  text-decoration: none;
}

@media only screen and (min-width: 700px) {
  #navigation a:hover {
    color: rebeccapurple;
    text-decoration: underline;
  }
}
</style>