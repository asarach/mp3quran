<template>
  <div class="content-wrapper">
    <vue-headful :title="trans('admin.dashboard_title') + ' | ' + trans('front.messages')" />
    <section class="content-header">
      <h1>{{ trans('front.messages')}}</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="prefix">
            <i class="fa fa-dashboard"></i>
            {{ trans('admin.dashboard')}}
          </router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="prefix + 'messages'">
            <i class="fa fa-dashboard"></i>
            {{ trans('front.messages')}}
          </router-link>
        </li>
        <li class="breadcrumb-item active">{{ message.subject}}</li>
      </ol>
    </section>
    <div v-if="show_spinner" class="loading-spinner">
      <loading-spinner />
    </div>
    <div v-else-if="show_error" class="message-error">
      <loading-error :type="show_error" />
    </div>
    <section v-else class="content">
      <div class="row">
        <div class="col-lg-24">
          <div class="card">
            <div class="card-body p-0">
              <table class="table">
                <tbody>
                  <tr>
                    <th class="font-weight-bold">{{trans('text.name') + ': '}}</th>
                    <td>{{ message.name}}</td>
                  </tr>
                  <tr>
                    <th class="font-weight-bold">{{trans('text.email') + ': '}}</th>
                    <td>{{ message.email}}</td>
                  </tr>
                  <tr>
                    <th class="font-weight-bold">{{trans('text.subject') + ': '}}</th>
                    <td>{{ message.subject}}</td>
                  </tr>
                  <tr>
                    <th class="font-weight-bold">{{trans('admin.content') + ': '}}</th>
                    <td>{{ message.body}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show_spinner: true,
      show_error: false,
      message: {
        name: "",
        email: "",
        subject: "",
        body: ""
      }
    };
  },
  methods: {
    getMessage() {
      this.show_spinner = false;
    }
  },
  mounted() {
    var self = this;
    axios
      .get(this.ajax_prefix + "message/" + this.$route.params.id)
      .then(response => {
        self.message = response.data.message;
        self.show_spinner = false;
      })
      .catch(error => {
        self.show_spinner = false;
        self.show_error = error.response.status;
      });
  }
};
</script>
