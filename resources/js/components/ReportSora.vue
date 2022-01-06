<template>
  <div
    id="report_model"
    v-if="$store.state.Auth !== null"
    class="modal delet-modal fade confirmation"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-group mb-0">
            <label for="exampleInputNote">{{ trans("text.note") }}</label>
            <textarea
              v-model="note"
              class="form-control"
              id="exampleInputNote"
              rows="2"
            ></textarea>
            <small v-if="showError" class="form-text text-danger"> 
              {{ trans("text.please-provide-detailed-note") }}
            </small>
          </div>
        </div>
        <div class="modal-footer">
          <div class="report_btns">
            <button type="button" class="btn btn-info" @click="report()">
              {{ trans("text.send") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: {},
      showError: false,
      note: "",
    };
  },
  methods: {
    report: function () {
      
      let self = this;
      if (self.note.length < 10) {
        this.showError = true;
      } else {
        axios
          .post(
            self.item.prefix +
              "/" +
              self.item.read +
              "/" +
              self.item.sora +
              "/report",
            { note: self.note }
          )
          .then(function (response) {
            $("#report_model").modal("hide");
            self.note = '';
            if (response.data.success) {
              Vue.notify({
                group: "app",
                title: self.trans("text.reported"),
                type: "success",
                text: self.trans("text.sora-reported-success"),
              });
            } else {
              Vue.notify({
                group: "app",
                title: self.trans("text.not-reported"),
                type: "warn",
                text: self.trans("text.sora-reported-warn"),
              });
            }
          })
          .catch(function (error) {
            Vue.notify({
              group: "app",
              title: self.trans("text.not-reported"),
              type: "warn",
              text: self.trans("text.sora-reported-warn"),
            });
          });
      }
    },
  },
  mounted() {
    let self = this;
    AppEvent.$on("report-sora", function (item) {
      self.item = item;
      $("#report_model").modal("show");
    });
  },
};
</script>
