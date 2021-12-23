<template>
  <!-- Button trigger modal -->
  <div class="quick-access">
    <a
      href="#"
      :class="inclass"
      data-toggle="modal"
      data-target="#quickAccessId"
    >
      <span
        v-if="inclass != 'nav-link'"
        class="uni-icon icon-slow_motion_video"
        style="color: #fff"
      ></span>
      {{ trans("text.quick-access") }}
    </a>

    <!-- Modal -->
    <div
      class="modal fade"
      id="quickAccessId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="row">
              <div class="col-md-10">
                <div class="form-group">
                  <select
                    class="custom-select"
                    v-model="read"
                    @change="getSoar()"
                  >
                    <option value class="d-none" disabled selected>
                      {{ trans("text.read") }}
                    </option>
                    <option
                      v-for="(read, index) in reads"
                      :key="index"
                      :value="read.id"
                    >
                      {{ read.reciter_name }} -
                      <span>{{ read.rewaya_name }}</span>
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-10">
                <div class="form-group">
                  <select class="custom-select" v-model="sora">
                    <option value class="d-none" disabled selected>
                      {{ trans("text.sora") }}
                    </option>
                    <option
                      v-for="(sora, index) in soar"
                      :key="index"
                      :value="sora"
                    >
                      {{ sora.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-4 text-center p-1">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  @click.prevent="
                    getItemAndPlay(
                      ajax_prefix + '/soar/item?r=' + read + '&s=' + sora.id
                    )
                  "
                >
                  <span
                    class="uni-icon icon-play_arrow"
                    style="color: #fff"
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["inclass"],
  data() {
    return {
      read: "",
      sora: "",
      soar: [],
      reads: {},
    };
  },
  methods: {
    getSoar() {
      let self = this;
      axios
        .get(this.ajax_prefix + "/soar/list?r=" + this.read)
        .then(function (response) {
          self.soar = response.data.soar;
        })
        .catch(function (error) {
        });
    },
    setReads() {
      let self = this;
      axios
        .get(this.ajax_prefix + "/reads/list")
        .then(function (response) {
          self.reads = response.data.reads;
        })
        .catch(function (error) {
        });
    },
    getItemAndPlay(url) {
      axios
        .get(url)
        .then(function (response) {
          window.appFoolter.$store.dispatch("addAndPlayItem", response.data);
        })
        .catch(function (error) {
        });
    },
  },
  mounted() {
    this.setReads();
  },
};
</script>
