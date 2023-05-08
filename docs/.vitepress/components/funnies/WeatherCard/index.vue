<template>
    <div class="comp-weather-card">
        <div class="background">
            <div class="container">
                <!-- 背景 -->
                <svg id="back">
                    <radialGradient id="SVGID_1_" cx="0" cy="0" r="320.8304" gradientUnits="userSpaceOnUse">
                        <stop offset="0" style="stop-color: #ffde17; stop-opacity: 0.7" />
                        <stop offset="1" style="stop-color: #fff200; stop-opacity: 0" />
                    </radialGradient>
                    <path
                        id="sunburst"
                        style="fill: url(#SVGID_1_)"
                        d="M0,319.7c-18.6,0-37.3-1.6-55.5-4.8L-7.8,41.4c5.1,0.9,10.6,0.9,15.7,0L56,314.8C37.6,318,18.8,319.7,0,319.7z
                         M-160.8,276.6c-32.5-18.8-61.3-42.9-85.5-71.6L-34,26.2c3.4,4.1,7.4,7.4,12,10.1L-160.8,276.6z M161.3,276.4L22.1,36.2
                        c4.5-2.6,8.6-6,12-10.1l212.6,178.5C222.5,233.4,193.8,257.6,161.3,276.4z M-302.5,108.3C-315.4,73-321.9,36-322-1.8l277.6-0.5
                        c0,5.3,0.9,10.4,2.7,15.2L-302.5,108.3z M302.6,107.8L41.8,12.8c1.7-4.7,2.6-9.7,2.6-14.9c0-0.3,0-0.6,0-1H322l0-1.3l0,1.9
                        C322,35.4,315.5,72.5,302.6,107.8z M-41.8-17.5l-261-94.5c12.8-35.4,31.6-68,55.8-96.9L-34.1-30.8C-37.5-26.8-40.1-22.3-41.8-17.5z
                         M41.7-17.7c-1.8-4.8-4.4-9.3-7.8-13.3l212-179.2c24.3,28.8,43.3,61.3,56.3,96.6L41.7-17.7z M-22.2-40.8l-139.6-240
                        c32.7-19,68.1-32,105.2-38.6L-8-46.1C-13-45.2-17.8-43.4-22.2-40.8z M22-40.9c-4.4-2.6-9.2-4.3-14.2-5.1l47.1-273.6
                        c37.2,6.4,72.7,19.2,105.4,38L22-40.9z"
                    />
                </svg>
                <!-- 卡片 -->
                <div id="card" class="weather">
                    <svg id="inner">
                        <defs>
                            <path
                                id="leaf"
                                d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
                            />
                        </defs>
                        <circle id="sun" style="fill: #f7ed47" cx="0" cy="0" r="50" />
                        <g id="layer3"></g>
                        <g id="cloud3" class="cloud"></g>
                        <g id="layer2"></g>
                        <g id="cloud2" class="cloud"></g>
                        <g id="layer1"></g>
                        <g id="cloud1" class="cloud"></g>
                    </svg>
                    <div class="details">
                        <div class="temp">{{ weather.now.temperature }}<span>°C</span></div>
                        <div class="right">
                            <div id="date">{{ dateStr }}</div>
                            <div id="summary"></div>
                        </div>
                    </div>
                </div>
                <!-- 操作栏 -->
                <nav class="options-wrap">
                    <ul>
                        <li>
                            <a id="button-snow" class="active"><i class="wi wi-snow"></i></a>
                        </li>
                        <li>
                            <a id="button-wind"><i class="wi wi-strong-wind"></i></a>
                        </li>
                        <li>
                            <a id="button-rain"><i class="wi wi-rain"></i></a>
                        </li>
                        <li>
                            <a id="button-thunder"><i class="wi wi-lightning"></i></a>
                        </li>
                        <li>
                            <a id="button-sun"><i class="wi wi-day-sunny"></i></a>
                        </li>
                    </ul>
                </nav>
                <!-- 外部容器 -->
                <svg id="outer"></svg>
            </div>
        </div>
    </div>
</template>

<script>
import { parseTime } from '../../../utils'

export default {
    name: 'WeatherCard',
    data() {
        return {
            weather: {
                now: {},
                location: {}
            }
        }
    },
    async mounted() {
        const [data] = await this.getWeatherData()
        const weather = this.getWeatherType(data)
        import('./index').then(({ init, startFrame }) => {
            init(weather)
            startFrame()
        })
    },
    computed: {
        dateStr() {
            const time = parseTime(new Date(), ' {m}月{d}日 星期{a}')
            return `${this.weather.location.name} / ${time}`
        }
    },
    methods: {
        getWeatherData() {
            return new Promise((resolve) => {
                var xhr = new XMLHttpRequest()
                xhr.open(
                    'GET',
                    'https://api.seniverse.com/v3/weather/now.json?key=Sj_SMCO68wk7rkJyv&location=wuhan&language=zh-Hans&unit=c'
                )
                xhr.responseType = 'json'
                xhr.send()
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        // 成功接收到响应
                        resolve(xhr.response.results)
                    } else {
                        // 请求失败
                        console.log('请求失败：' + xhr.status)
                    }
                }
            })
        },
        getWeatherType(weather) {
            const { now } = weather
            const { text: name, code } = now

            this.weather = weather

            switch (code) {
                case '0':
                case '1':
                case '2':
                case '3':
                    // 晴天
                    return { type: 'sun', name }
                case '4': // 多云
                case '5': // 晴间多云
                case '6': // 晴间多云 晚上
                case '7': // 大部多云
                case '8': // 大部多云晚上
                case '9': // 阴
                    // 多云
                    return { type: 'cloud', name }
                case '10': // 阵雨
                case '11': // 雷阵雨
                case '12': // 雷阵雨伴有冰雹
                case '13': // 小雨
                case '14': // 中雨
                case '15': // 大雨
                case '19': // 冻雨
                    // 雨
                    return { type: 'rain', name }
                case '16': // 暴雨
                case '17': // 大暴雨
                case '18': // 特大暴雨
                    // 暴雨
                    return { type: 'thunder', name }
                case '20': // 雨夹雪
                case '21': // 阵雪
                case '22': // 小雪
                case '23': // 中雪
                case '24': // 大雪
                case '25': // 暴雪
                    // 雪
                    return { type: 'snow', name }
                case '32': // 风
                case '33': // 大风
                case '34': // 飓风
                case '35': // 热带风暴
                case '36': // 龙卷风
                    // 风
                    return { type: 'wind', name }
                default:
                    return { type: 'sun', name }
            }
        }
    }
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Lato:300';
@import 'https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css';

.comp-weather-card {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: #eee;
    background: -webkit-linear-gradient(bottom, rgba(0, 0, 200, 0.2), rgba(0, 0, 200, 0));
    background: linear-gradient(0deg, rgba(0, 0, 200, 0.2), rgba(0, 0, 200, 0));
    pointer-events: none;
}

.background {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
}

.background {
    background: #eee;
    background: -webkit-linear-gradient(330deg, rgba(50, 150, 100, 0.2), rgba(0, 0, 100, 0));
    background: linear-gradient(120deg, rgba(50, 150, 100, 0.2), rgba(0, 0, 100, 0));
}

.container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
    position: relative;
    background: #eee;
    background: -webkit-linear-gradient(210deg, rgba(150, 50, 50, 0.3), rgba(0, 0, 200, 0));
    background: linear-gradient(240deg, rgba(150, 50, 50, 0.3), rgba(0, 0, 200, 0));
}

nav ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    margin: 20px 20px 0 20px;
    padding: 16px 0;
    list-style-type: none;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 9px 7px 40px -6px rgba(0, 0, 0, 0.25);
}
nav li {
    padding: 4px 0;
}
nav li a {
    display: block;
    width: 50px;
    text-align: center;
    color: #aaa;
    cursor: pointer;
}
nav li a:hover {
    color: #444;
}
nav li a.active {
    color: #4444ff;
}

#card {
    box-shadow: 9px 7px 40px -6px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    width: 300px;
    padding: 0;
    height: 400px;
    min-height: 300px;
    margin: 20px;
    border-radius: 5px;
    position: relative;
}
#card .details {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 16px 20px;
    color: #888;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-transition: color 2s ease;
    transition: color 2s ease;
}
.thunder #card .details {
    color: #ddd;
}
#card .details .right {
    text-align: right;
}
#card .details #date {
    margin: 4px 0;
    font-size: 14px;
}
#card .details #summary {
    font-weight: 600;
    font-size: 22px;
}
#card .details .temp {
    font-size: 60px;
    line-height: 60px;
}
#card .details .temp span {
    font-size: 18px;
    line-height: 30px;
    vertical-align: top;
    margin-left: 5px;
}

.weather {
    background-color: #dae3fd;
    -webkit-transition: background-color 2s ease;
    transition: background-color 2s ease;
}
.thunder .weather {
    background-color: #9fa4ad;
}
.rain .weather {
    background-color: #d8d8d8;
}
.sun .weather {
    background-color: #ccccff;
}
.weather #inner {
    background-color: white;
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);
}
.weather .cloud {
    -webkit-transition: fill 2s ease;
    transition: fill 2s ease;
}
.weather #cloud1 {
    fill: #efefef;
}
.thunder .weather #cloud1 {
    fill: #9fa4ad;
}
.weather #cloud2 {
    fill: #e6e6e6;
}
.thunder .weather #cloud2 {
    fill: #8b8e98;
}
.weather #cloud3 {
    fill: #d5d5d5;
}
.thunder .weather #cloud3 {
    fill: #7b7988;
}

.options-wrap {
    position: absolute;
    right: 0;
    z-index: 1;
    pointer-events: all;
}

#outer,
#back {
    position: fixed;
    top: 0;
    pointer-events: none;
}
</style>
