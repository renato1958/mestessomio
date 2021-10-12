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

@media only screen and (min-width: 960px) {
  #navigation {
    flex-direction: row;
    justify-content: space-between;
    width: 75%;
    margin: 0 auto;
    max-width: 1200px;
  }
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