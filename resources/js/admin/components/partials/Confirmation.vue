<template>
  <div
    id="confirm_model"
    class="modal delet-modal fade confirmation"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <h4 class="modal-title" id="myModalLabel">{{ trans('text.are-you-sure')}}</h4>
        </div>
        <div class="modal-footer">
          <div class="confirm_btns">
            <button type="button" class="btn btn-danger" data-dismiss="modal">{{trans('admin.no')}}</button>
            <button type="button" class="btn btn-info" @click="confirm()">{{trans('admin.yes')}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    confirm: function() {
      $("#confirm_model").modal("hide");
      Event.$emit("confirmed");
    }
  },
  mounted() {
    Event.$on("confirm", function() {
      $("#confirm_model").modal("show");
    });
  }
};
</script>
