<template>
    <div class="index">
        <div class="content content1">
            <div class="contentin">
                <router-view class="child-view"></router-view>
            </div>
        </div>
        <div id="homeChart" class="chart"></div>
    </div>
</template>

<script>
    import util from 'src/util/util.js'

    export default {
        name: 'index',
        props: [],
        data() {
            return {

            }
        },
        components: {

        },
        computed: {

        },
        created() {},
        methods: {

        },
        mounted() {
            var myChart = this.$echarts.init(document.getElementById('homeChart'));
            myChart.setOption({
                title: {
                    text: '未来一周气温变化',
                    subtext: '纯属虚构'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['最高气温', '最低气温']
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {
                            show: true
                        },
                        dataView: {
                            show: true,
                            readOnly: false
                        },
                        magicType: {
                            show: true,
                            type: ['line', 'bar']
                        },
                        restore: {
                            show: true
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                calculable: true,
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }],
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }],
                series: [{
                        name: '最高气温',
                        type: 'line',
                        data: [11, 11, 15, 13, 12, 13, 10],
                        markPoint: {
                            data: [{
                                    type: 'max',
                                    name: '最大值'
                                },
                                {
                                    type: 'min',
                                    name: '最小值'
                                }
                            ]
                        },
                        markLine: {
                            data: [{
                                type: 'average',
                                name: '平均值'
                            }]
                        }
                    },
                    {
                        name: '最低气温',
                        type: 'line',
                        data: [1, -2, 2, 5, 3, 2, 0],
                        markPoint: {
                            data: [{
                                name: '周最低',
                                value: -2,
                                xAxis: 1,
                                yAxis: -1.5
                            }]
                        },
                        markLine: {
                            data: [{
                                type: 'average',
                                name: '平均值'
                            }]
                        }
                    }
                ]
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .child-view {
        @include minw(53rem);
        @include font(0.8rem, 0.8rem);
    }
    .chart{
        width:500px;
        height:500px;
    }
    .content1 {
        min-width: 22.6rem;
        left: 12.9rem;
        top: 5.6rem;
        bottom: 2.75rem;
        overflow-x: auto;
        padding: 1.5rem 0 1.5rem 1.5rem;
        background-color: $pageback;
        color: $gray!important;
        .contentin {
            padding-right: 1.5rem;
            min-width: 53rem;
        }
    }
</style>
