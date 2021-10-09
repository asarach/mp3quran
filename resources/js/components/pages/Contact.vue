<template>
  <div class="main contact-show">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h1>{{ page_content.title }}</h1>
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
          <div v-if="style_version == 'r'" class="col-md-5">
            <desktop-sidebar></desktop-sidebar>
          </div>
          <div class="col-lg-19" id="sticky-container">
            <div class="card-page">
              <div class="row">
                <div class="col-md-12">
                  <div class="page-text" v-html="page_content.content"></div>
                </div>
                <div class="col-md-12">
                  <form
                    class="form-horizontal"
                    role="form"
                    @submit.prevent="send"
                  >
                    <div :id="honeypot.name + '_wrap'" style="display: none">
                      <input :name="honeypot.name" type="text" v-model="message.mp3quran_hony" :id="honeypot.name" />
                      <input
                        name="my_time"
                        type="text"
                         v-model="message.my_time"
                      />
                    </div>
                    <div class="page-body">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label for="inputName" class="control-label">{{
                              trans("text.name")
                            }}</label>
                            <input
                              type="text"
                              v-model="message.name"
                              name="name"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label for="inputEmail" class="control-label">{{
                              trans("text.email")
                            }}</label>
                            <input
                              type="email"
                              v-model="message.email"
                              name="email"
                              class="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputTitle" class="control-label">{{
                          trans("text.subject")
                        }}</label>
                        <input
                          type="text"
                          v-model="message.subject"
                          name="subject"
                          class="form-control"
                        />
                      </div>
                      <div class="form-group">
                        <label for="inputMessage" class="control-label">{{
                          trans("text.message")
                        }}</label>
                        <textarea
                          name="body"
                          v-model="message.body"
                          class="form-control"
                          rows="5"
                        ></textarea>
                      </div>
                    </div>
                    <div class="contact-footer">
                      <button type="submit" class="btn btn-success">
                        {{ trans("text.send") }}
                      </button>
                    </div>
                  </form>
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
import { mapState } from "vuex";
const Errors = require("../../errors.js");
export default {
  computed: {
    ...mapState({
      style_version: (state) => state.settings.style_version,
      page_content: (state) => state.page.page_content,
      honeypot: (state) => state.page.honeypot,
      initial: (state) => state.initial,
    }),
  },
  data() {
    return {
      errors: new Errors(),
      url: this.ajax_prefix + "/contact-us",
      
      message: {
        name: "",
        email: "",
        subject: "",
        mp3quran_hony: '',
        my_time: '',
        body: "",
      },
    };
  },
  methods: {
    send() {
      var self = this;
      this.message.my_time = this.honeypot.time;
      axios
        .post(
          "/" + self.$store.state.current_language + "/" + "contact",
          this.message
        )
        .then(function (response) {
          self.$notify({
            group: "app",
            title: self.trans("text.success"),
            type: "success",
            text: self.trans("text.message-sent"),
          });

          self.$router.push("/" + self.$store.state.current_language + "/");
        })
        .catch(function (error) {
          self.$notify({
            group: "app",
            title: self.trans("text.error"),
            type: "error",
            text: self.trans("text.message-not-sent"),
          });
          self.errors.record(error);
        });
    },
  },
  created() {
    this.$Progress.start();
    this.$store.state.loading = true;
    this.$store.dispatch("page/setData", this);
  },

  destroyed() {
    this.$store.dispatch("page/unsetData");
  },
};
</script>
