(function (vue, $, name) {
  vue.component(name, {
    template: '<div :name="name" :id="panelRootId"></div> ',
    props: {
      label: String,
      labelContent: Function,
      divId: String,
      name: String,
      closable: Boolean,
      disabled: {
        type: Boolean,
        default: false
      },
      routeId: String,
      routeData: Object,
      defaultLoad: {
        type: Boolean,
        default: true
      },
      locatedTabKey: {
        type: String,
        default: 'locatedTab'
      }
    },
    data () {
      return {
        index: null,
        panelRootId: 'zhfp_route_div_id_' + (this.name ? this.name : this.index) + (new Date()).getTime(),
        isLoaded: !1,
        page: {},
        privateRouteData: {
          page: null,
        }
      }
    },
    methods: {
      refresh: function () {
        if (!this.routeId) {
          throw new Error('zhfp-route-div路由ID尚未配置!');
        }
        yufp.extend(this.privateRouteData, this.routeData)
        // this.privateRouteData = this.routeData;
        this.privateRouteData[this.locatedTabKey] = this
        this.isLoaded = !0;
        yufp.router.to(this.routeId, this.privateRouteData, this.panelRootId)
      },
      loadDiv: function () {
        if (!this.routeId) {
          throw new Error('zhfp-route-div路由ID尚未配盟!')
        }
        if (!this.defaultLoad) {
          return;
        }
        yufp.extend(true, this.privateRouteData, this.routeData)
        this.privateRouteData[this.locatedTabKey] = this
        this.isLoaded = !0;
        this.$nextTick(() => {
          yufp.router.to(this.routeId, this.privateRouteData, this.panelRootId)
        })
      }
    },
    mounted: function () {
      (this.defaultLoad || this.active) && this.routeId && this.loadDiv();
    },
    beforeDestroy: function () {
      this.isLoaded && (this.privateRouteData[this.locatedTabKey] = null);
    },
    destoryed: function () {
      this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el);
      if (this.$parent.removePanes) {
        this.$parent.removePanes(this);
      }
    },
    watch: {
      routeId: function () { // 政了routed盛新加裁员面
        this.loadDiv();
      },
      label: function () {
        this.$parent.$forceUpdate()
      },
      active: function (e) {
        e && !this.isLoaded && this.routeId && this.loadDiv()
      },
      'privateRouteData.page': function () {
        this.page = this.privateRouteData.page;
        this.$parent.pageInstances = {}
        this.$parent.pageInstances[this.name ? this.name : this.index] = this.page;
      }
    },
    computed: {
      isClosable: function () {
        return this.closable || this.$parent.closable;
      },
      active: function () {
        return this.$parent.currentname = this.name || this.index
      }
    }
  });
}(Vue, yufp.$, 'zhfp-route-div'));
