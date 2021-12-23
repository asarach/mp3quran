<template>
  <!-- Button trigger modal -->
  <div class="quick-access">
    <a
      href="#"
      :class="inclass"
      data-toggle="modal"
      data-target="#quickAccessId"
    >
      <playspeed-icon v-if="inclass != 'nav-link'" fillColor="#fff" />
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
                  <play-arrow-icon fillColor="#fff" />
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
import { mapState, mapActions } from "vuex";

export default {
  props: ["inclass"],
  computed: {
    ...mapState({
      soar: (state) => state.list.soar,
      reads: (state) => state.list.reads,
    }),
  },
  data() {
    return {
      read: "",
      sora: "",
    };
  },
  methods: {
    getSoar() {
      this.$store.dispatch("list/setSoar", "/ajax/soar/list?r=" + this.read);
    },
    getItemAndPlay(url) {
      axios
        .get(url)
        .then(function (response) {
          window.appFoolter.$store.dispatch("addPlayItem", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

      this.$store.dispatch("list/setSoar", "/ajax/soar/list?r=" + this.read);
    },
  },
  mounted() {
    this.$store.dispatch("list/setReads", "/ajax/reads/list");
  },
};
</script>
