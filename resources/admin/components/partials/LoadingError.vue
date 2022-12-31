<template>
  <div class="container">
    <div v-if="type == 403" class="error-page error-403">
      <h1>
        <img :src="'/img/icons/error_403.svg'" class="uni-icon" alt="403 Forbidden" />
        {{trans('text.error-403-title')}}
      </h1>
      <p>{{trans('text.error-403-text')}}</p>
      <router-link :to="prefix" exact>{{trans('text.go-to-home')}}</router-link>
    </div>
    <div v-else-if="type == 404" class="error-page error-404">
      <h1>
        <img :src="'/img/icons/error_404.svg'" class="uni-icon" alt="404 Error" />
        {{trans('text.error-404-title')}}
      </h1>
      <p>{{trans('text.error-404-text')}}</p>
      <router-link :to="prefix" exact>{{trans('text.go-to-home')}}</router-link>
    </div>
    <div v-else-if="type == 500" class="error-page error-500">
      <h1>
        <img :src="'/img/icons/error_500.svg'" class="uni-icon" alt="500 Internal Server Error" />
        {{trans('text.error-500-title')}}
      </h1>
      <p>{{trans('text.error-500-text')}}</p>
      <router-link :to="prefix" exact>{{trans('text.go-to-home')}}</router-link>
    </div>
    <div v-else-if="type == 502" class="error-page error-502">
      <h1>
        <img :src="'/img/icons/error_502.svg'" class="uni-icon" alt="502 Bad Gateway" />
        {{trans('text.error-502-title')}}
      </h1>
      <p>{{trans('text.error-502-text')}}</p>
      <router-link :to="prefix" exact>{{trans('text.go-to-home')}}</router-link>
    </div>
    <div v-else-if="type == 503" class="error-page error-503">
      <h1>
        <img :src="'/img/icons/error_503.svg'" class="uni-icon" alt="503 Service Unavailable" />
        {{trans('text.error-503-title')}}
      </h1>
      <p>{{trans('text.error-503-text')}}</p>
      <router-link :to="prefix" exact>{{trans('text.go-to-home')}}</router-link>
    </div>
    <div v-else-if="type == 504" class="error-page error-504">
      <h1>
        <img :src="'/img/icons/error_504.svg'" class="uni-icon" alt="504 Gateway Timeout" />
        {{trans('text.error-504-title')}}
      </h1>
      <p>{{trans('text.error-504-text')}}</p>
      <router-link :to="prefix" exact>{{trans('text.go-to-home')}}</router-link>
    </div>
    <div v-else class="error-page error-other">
      <h1>
        <img :src="'/img/icons/error_000.svg'" class="uni-icon" alt="Error" />
        {{trans('text.error-000-title')}}
      </h1>
      <p>{{trans('text.error-000-text')}}</p>
      <router-link :to="prefix" exact>{{trans('text.go-to-home')}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["type"]
};
</script>
