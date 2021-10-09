<template>
<nav class="nav newsletter-nav">
  <router-link
    class="nav-link"
    :class="{ active: isActivePage('nl_messages') }"
    :to="prefix + 'nl_messages'"
    >{{ trans("text.messages") }}</router-link
  >
  <router-link
    class="nav-link"
    :class="{ active: isActivePage('nl_subscribers') }"
    :to="prefix + 'nl_subscribers'"
    >{{ trans("text.subscribers") }}</router-link
  >
  <router-link
    class="nav-link"
    :class="{ active: isActivePage('newsletters') }"
    :to="prefix + 'newsletters'"
    >{{ trans("text.newsletters") }}</router-link
  >
  <router-link
    class="nav-link"
    :class="{ active: isActivePage('nl_templates') }"
    :to="prefix + 'nl_templates'"
    >{{ trans("text.templates") }}</router-link
  >
</nav>
</template>
<script>
export default {
methods: {
  isActivePage(page) {
    if (this.$route.fullPath.includes(page)) {
      return true;
    } else {
      return false;
    }
  },
},
};
</script>

<style scoped>
.newsletter-nav {
margin-bottom: 0.5rem;
}
.newsletter-nav .nav-link {
background: #fff;
margin-left: 0.5rem;
border-radius: 4px;
padding: 0.25rem 0.5rem;
border: 1px solid rgba(0, 0, 0, 0.175);
box-shadow: 0 -2px 0 rgb(0 0 0 / 4%) inset;
}
.newsletter-nav .nav-link.active,
.newsletter-nav .nav-link:hover {
background: #17a2b8;
color: #fff;
}
</style>
