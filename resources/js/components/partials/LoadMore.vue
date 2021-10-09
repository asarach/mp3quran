<template>
<div class="row" v-if="can_load">
    <div class="col-lg-24 text-center">
        <div class="load-more" >
            <loading-spinner v-if="show_spinner"></loading-spinner>
            <button v-else type="button" class="btn btn-light" @click.prevent="loadMore()">{{ trans('text.lead-more')}}</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        url: '',
        query: '',
        selector: {
          type: String,
          default: '#items_listing'
        },
    },
    data() {
        return {
            show_spinner: false,
            can_load: true,
            current_page: 1,
        };
    },
    methods: {
        loadMore() {
            this.show_spinner = true;
            var self = this;
            var page = this.current_page + 1;
            var base =   this.$store.state.current_language +'/' + this.url + '?';
            var direction = this.$store.state.ordering.direction;
            var sort = this.$store.state.ordering.sort;
            var type = this.$store.state.user_type;

            if (type !== undefined) {
                base += 'type=' + type + '&';
            }
            if (sort !== undefined && direction !== undefined) {
                base += 'sort=' + sort + '&direction=' + direction + '&';
            }
            if (page > 1) {
                base = base + 'page=' + page + '&';
            }
            var url = base.slice(0, -1);

            if (this.query !== undefined) {
                url += this.query;
            }

            axios.get(url)
                .then(function(response) {
										if (response.data.html.length == 0) {
											self.can_load = false;
										} else {
											self.show_spinner = false;
											self.current_page = page;
	                    $(document).ready(function() {
	                        $(self.selector).append(response.data.html);
	                    })
										}

                })
                .catch((error) => {
                });

        }

    }
}
</script>
