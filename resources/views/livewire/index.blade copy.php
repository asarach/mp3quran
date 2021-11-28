<div class="main home-show">
    <div class="show-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div v-if="style_version != 'm'" class="header-options">
              <quick-access inclass="btn btn-primary"></quick-access>
            </div>
          </div>
          <div class="col-lg-19">
            <livewire:components.header-ads />
          </div>
        </div>
      </div>
    </div>
    <div class="show-body">
      <div class="container">
        <div class="row">
          @if (style_version() == 'r')
                <div class="col-md-5">
                    @include('components.desktop-sidebar')
                </div>
                @endif
          <div class="col-lg-19" id="sticky-container">
            <div class="nav-tabs-wrapper">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a
                    href="#"
                    :class="{ active: type == 'all' }"
                    class="nav-link"
                    @click="getAll()"
                    >{{ trans("text.all") }}</a
                  >
                </li>
                <li v-if="show_tadabor" class="nav-item">
                  <router-link-asa
                    class="nav-link"
                    :class="{ active: type == 'discover' }"
                    :to="'/' + $store.state.current_language + '/tadabor'"
                    exact
                  >
                    {{ trans("text.tadabor-btn") }}
                  </router-link-asa>
                </li>
                <li v-if="style_version == 'm'" class="nav-item">
                  <quick-access inclass="nav-link"></quick-access>
                </li>
                <li v-if="style_version == 'm'" class="nav-item">
                  <router-link-asa
                    class="nav-link"
                    :class="{ active: type == 'newsletter' }"
                    :to="'/' + $store.state.current_language + '/newsletter'"
                    exact
                  >
                    {{ trans("text.newsletter") }}
                  </router-link-asa>
                </li>
              </ul>
            </div>
            <div class="show-filters">
              <div class="filter-soar">
                <input
                  type="text"
                  class="form-control"
                  name="sora"
                  v-model="search_query"
                  :placeholder="trans('text.search-for-reciter')"
                />
              </div>
              <div class="filter-rewaya mr-auto">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="triggerIdrewaya"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {{ selected_rewaya }}
                  </button>
                  <div class="dropdown-menu" aria-labelledby="triggerIdrewaya">
                    <a
                      class="dropdown-item"
                      href="#"
                      @click="selectRewaya('none')"
                      >{{ trans("text.all") }}</a
                    >
                    <a
                      class="dropdown-item"
                      href="#"
                      v-for="(rewaya, index) in rewayat"
                      :key="rewaya.id"
                      @click="selectRewaya(index)"
                      >{{ rewaya.name }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="home-reads letters">
              <div v-if="type == 'all'" class="reads-list letters">
                <div
                  v-for="(group, letter) in reads"
                  :key="letter"
                  :id="'letter_' + letter"
                  class="home-read-group"
                >
                  <h3
                    class="hrg-letter"
                    v-if="group.length > 0 && letter.length > 0"
                  >
                    {{ letter }}
                  </h3>
                  <div class="row" v-if="group.length > 0">
                    <div
                      v-for="(read, index) in group"
                      v-if="read.reciter_name"
                      :key="index"
                      class="col-md-8"
                    >
                      <div class="card-read" :title="read.soar_count">
                        <div class="card-read-title">
                          <router-link
                            rel="alternate"
                            :hreflang="$store.state.current_language"
                            :to="
                              '/' +
                              $store.state.current_language +
                              '/' +
                              read.slug
                            "
                            >{{ read.reciter_name }}</router-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="type == 'all'" class="side-letters">
                <affix
                  relative-element-selector="#sticky-container"
                  :scrollAffix="true"
                  :offset="{ top: 10, bottom: 10 }"
                  style="width: 32px"
                >
                  <ul class="list-unstyled">
                    <li v-for="(group, letter) in reads" :key="letter">
                      <a :href="'#letter_' + letter">{{ letter }}</a>
                    </li>
                  </ul>
                </affix>
              </div>

              <div v-else class="reads-list">
                <div class="row">
                  <div
                    v-for="(read, index) in reads"
                    v-if="read.reciter_name"
                    :key="index"
                    class="col-md-8"
                  >
                    <div class="card-read">
                      <div class="card-read-title">
                        <router-link
                          rel="alternate"
                          :hreflang="$store.state.current_language"
                          :to="
                            '/' +
                            $store.state.current_language +
                            '/' +
                            read.slug
                          "
                          >{{ read.reciter_name }}</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>