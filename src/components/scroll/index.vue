
<style>

</style>

<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    props: {
        probeType: {  //1 会截流,只有在滚动结束的时候派发一个 scroll 事件。
            type: Number,   //2在手指 move 的时候也会实时派发 scroll 事件，不会截流。 
            default: 1//3除了手指 move 的时候派发scroll事件，在 swipe（手指迅速滑动一小段距离）的情况下，列表会有一个长距离的滚动动画，这个滚动的动画过程中也会实时派发滚动事件
        },
        click: {//click: true 是否派发click事件
            type: Boolean,
            default: true
        },
        listenScroll: {//是否监听滑动事件
            type: Boolean,
            default: false
        },
        data: {//监控数是否变化  如果变化则刷新scroll
            type: Array,
            default: null
        },
        hasTab: {//是tab配合上拉加载  如果有通过传入不同的hasTab  来重新定位不同的tab
            type: Number,
            default: 9999999
        },
        pullup: {//上拉加载更多
            type: Boolean,
            default: false
        },
        downRefish:{//下拉刷新
            type: Boolean,
            default: false
        },
        load: {//下拉刷新
            type: Boolean,
            default: false
        },
        beforeScroll: {
            type: Boolean,
            default: false
        },
        refreshDelay: {
            type: Number,
            default: 20
        }
    },
    mounted() {
        setTimeout(() => {
            this._initScroll()
        }, 20)
    },
    methods: {
        _initScroll() {
            if (!this.$refs.wrapper) {
                return
            }
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType: this.probeType,
                click: this.click
            })

            if (this.listenScroll) {
                let me = this
                this.scroll.on('scroll', (pos) => {
                    console.log(pos.y)
                    if(pos.y>50){
                        console.log('下拉刷新')
                    }
                    me.$emit('scroll', pos)
                })
            }

            if (this.load) {
                // console.log('load事件');
                var $this = this;
                // 滑动中
                this.scroll.on('scroll', (position) => {
                    console.log(position.y)
                    if (position.y > 30) {
                        // console.log('释放立即刷新');
                        $this.$emit('toplist')
                    }
                })
                // 滑动结束
                this.scroll.on('touchend', (position) => {
                    if (position.y > 30) {
                        console.log('下拉刷新');
                        setTimeout(function() {
                            $this.$emit('upList')
                        }, 1000);

                    }
                })
            }
            if (this.downRefish) {
                console.log('下拉刷新')
                this.scroll.on('touchend', (position) => {
                    console.log(position)
                    if (position.y > 50) {
                        console.log('下拉刷新');

                    }
                })
            }
            if (this.pullup) {
                // console.log('上拉加载更多')
                this.scroll.on('scrollEnd', (position) => {
                    if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                        console.log(this.scroll.y - this.scroll.maxScrollY - 200)
                        console.log('上拉加载更多')
                        this.$emit('pullUp')
                    }
                })
            }

            if (this.beforeScroll) {
                this.scroll.on('beforeScrollStart', () => {
                    this.$emit('beforeScroll')
                })
            }
        },
        disable() {
            this.scroll && this.scroll.disable()
        },
        enable() {
            this.scroll && this.scroll.enable()
        },
        refresh() {
            this.scroll && this.scroll.refresh()
        },
        scrollTo() {
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        },
        scrollToElement() {
            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
        }
    },
    watch: {
        data() {
            setTimeout(() => {
                this.refresh();
            }, this.refreshDelay)
        },
        hasTab() {//监控其值得变化
            setTimeout(() => {
                this.scrollTo(0, 0);
            }, this.refreshDelay)
        }
    }
}

</script>
