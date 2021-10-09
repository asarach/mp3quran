<template>
  <affix class="desktop-sidebar"  relative-element-selector="#sticky-container" :scrollAffix='true' :offset='{top: 56, bottom: 0}' style="width: 220px">
    <ul class="list-unstyled">
      <template v-for="(menu, index) in main_menu">
        <li v-if="menu.slug.includes('http')" :key="index">
          <a :href="menu.slug" target="_blank" class="menu-link" exact>
            <component v-bind:is="menu.icon"></component>
            {{trans('text.' + menu.title)}}
          </a>
        </li>
        <li v-else :key="index">
          <router-link-asa :to="'/' +  current_language + menu.slug" class="menu-link" exact>
            <component v-bind:is="menu.icon"></component>
            {{trans('text.' + menu.title)}}
          </router-link-asa>
        </li>
      </template>
    </ul>
  </affix>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      current_language: state => state.current_language,
      main_menu: state => state.main_menu
    })
  }
};
</script>
