<template>
  <div class="main api-show">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h1>{{ trans('text.api') }}</h1>
            <div class="header-options"></div>
          </div>
          <div class="col-lg-19">
            <ads-header></ads-header>
          </div>
        </div>
      </div>
    </div>
    <div class="show-body">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="api-nav">
              <button
                v-for="(item, key) in page_content.api1"
                :key="key"
                type="button"
                class="btn btn-secondary"
                :class="{active : current_tab.key == item.key}"
                @click.prevent="showTab(key)"
              >{{item.key}}</button>
            </div>
          </div>
          <div class="col-md-19" id="sticky-container">
            <div class="api-content">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li v-for="(item, key) in current_tab.content" :key="key" class="nav-item">
                  <a
                    class="nav-link"
                    :class="{active : key == 'Description'}"
                    :id="key +'-tab'"
                    data-toggle="tab"
                    :href="'#' + key"
                    role="tab"
                    :ariaControls="key"
                    aria-selected="true"
                  >{{key}}</a>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent" v-if="current_tab.content">
                <div
                  class="tab-pane fade show active"
                  id="Description"
                  role="tabpanel"
                  aria-labelledby="Description-tab"
                >
                  <table class="table table-striped">
                    <tbody>
                      <tr v-for="(desc, key) in current_tab.content.Description" :key="key">
                        <th>{{desc.name}}</th>
                        <th v-html="desc.val"></th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="tab-pane fade" id="Inputs" role="tabpanel" aria-labelledby="Inputs-tab">
                  <table
                    class="table table-bordered mt-3 mb-3"
                    v-for="(input, key) in current_tab.content.Inputs"
                    :key="key"
                  >
                    <tbody>
                      <tr v-if="input.root">
                        <th scope="row" style="width: 160px;">Root Node</th>
                        <td>{{input.root}}</td>
                      </tr>
                      <tr v-if="input.parameters">
                        <th scope="row" style="width: 160px;">Parameters</th>
                        <td>{{input.parameters}}</td>
                      </tr>
                      <tr v-if="input.description">
                        <th scope="row" style="width: 160px;">Description</th>
                        <td>{{input.description}}</td>
                      </tr>
                      <tr v-if="input.ocuurances">
                        <th scope="row" style="width: 160px;">Ocuurances</th>
                        <td>{{input.ocuurances}}</td>
                      </tr>
                      <tr v-if="input.example">
                        <th scope="row" style="width: 160px;">Example</th>
                        <td>{{input.example}}</td>
                      </tr>
                      <tr v-if="input.comments">
                        <th scope="row" style="width: 160px;">Comments</th>
                        <td>{{input.comments}}</td>
                      </tr>
                      <tr v-if="input.sample">
                        <th scope="row" style="width: 160px;">Sample Request</th>
                        <td>{{input.sample}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  class="tab-pane fade"
                  id="Outputs"
                  role="tabpanel"
                  aria-labelledby="Outputs-tab"
                >
                  <table
                    class="table table-bordered mt-3 mb-3"
                    v-for="(output, key) in current_tab.content.Outputs"
                    :key="key"
                  >
                    <tbody>
                      <tr v-if="output.root">
                        <th scope="row" style="width: 160px;">Root Node</th>
                        <td>{{output.root}}</td>
                      </tr>
                      <tr v-if="output.parameters">
                        <th scope="row" style="width: 160px;">Parameters</th>
                        <td>{{output.parameters}}</td>
                      </tr>
                      <tr v-if="output.description">
                        <th scope="row" style="width: 160px;">Description</th>
                        <td>{{output.description}}</td>
                      </tr>
                      <tr v-if="output.ocuurances">
                        <th scope="row" style="width: 160px;">Ocuurances</th>
                        <td>{{output.ocuurances}}</td>
                      </tr>
                      <tr v-if="output.example">
                        <th scope="row" style="width: 160px;">Example</th>
                        <td>{{output.example}}</td>
                      </tr>
                      <tr v-if="output.response">
                        <th scope="row" style="width: 160px;">Sample response</th>
                        <td>{{output.response}}</td>
                      </tr>
                      <tr v-if="output.sample">
                        <th scope="row" style="width: 160px;">Sample Request</th>
                        <td>{{output.sample}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      style_version: state => state.settings.style_version,
      page_content: state => state.page.page_content,
      initial: state => state.initial
    })
  },

  data() {
    return {
      url: this.ajax_prefix + "/api",
      current_tab: {}
    };
  },
  methods: {
    showTab(key) {
      this.current_tab = this.page_content.api1[key];
    }
  },
  created() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("page/setData", this);
  },

  destroyed() {
    this.$store.dispatch("page/unsetData");
  },
  watch: {
    page_content: function(newpseek, oldseek) {
      if (newpseek.api1) {
        this.current_tab = newpseek.api1[0];
      }
    }
  }
};
</script>
