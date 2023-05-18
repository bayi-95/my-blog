import Snap from 'snapsvg-cjs'
import { TweenMax, Power0, Power1, Power2, Power4, SlowMo, Elastic } from 'gsap'

export default class WeatherCard {
    constructor() {
        // 📝 Fetch all DOM nodes in js and Snap SVG
        this.container = document.querySelector('.container')
        this.summary = document.querySelector('#summary')
        this.card = document.querySelector('#card')
        this.currentWeather = { type: '', name: '' }
        this.innerSVG = Snap('#inner')
        this.outerSVG = Snap('#outer')
        this.backSVG = Snap('#back')
        this.weatherContainer1 = Snap.select('#layer1')
        this.weatherContainer2 = Snap.select('#layer2')
        this.weatherContainer3 = Snap.select('#layer3')
        this.innerRainHolder1 = this.weatherContainer1.group()
        this.innerRainHolder2 = this.weatherContainer2.group()
        this.innerRainHolder3 = this.weatherContainer3.group()
        this.innerLeafHolder = this.weatherContainer1.group()
        this.innerSnowHolder = this.weatherContainer1.group()
        this.leafMask = this.outerSVG.rect()
        this.leaf = Snap.select('#leaf')
        this.sun = Snap.select('#sun')
        this.sunburst = Snap.select('#sunburst')
        this.outerSplashHolder = this.outerSVG.group()
        this.outerLeafHolder = this.outerSVG.group()
        this.outerSnowHolder = this.outerSVG.group()
        this.frame = null
        this.lightningTimeout = 0

        // Set mask for leaf holder
        this.outerLeafHolder.attr({
            'clip-path': this.leafMask
        })

        this.sizes = {
            container: { width: 0, height: 0 },
            card: { width: 0, height: 0 }
        }

        // grab cloud groups
        this.clouds = [{ group: Snap.select('#cloud1') }, { group: Snap.select('#cloud2') }, { group: Snap.select('#cloud3') }]

        // set weather types ☁️ 🌬 🌧 ⛈ ☀️
        this.weather = [
            { type: 'snow', name: '雪' },
            { type: 'cloud', name: '云' },
            { type: 'wind', name: '风' },
            { type: 'rain', name: '雨' },
            { type: 'thunder', name: '雷雨' },
            { type: 'sun', name: '晴' }
        ]

        // 🛠 app settings
        // in an object so the values can be animated in tweenmax
        this.settings = {
            windSpeed: 2,
            rainCount: 0,
            leafCount: 0,
            snowCount: 0,
            cloudHeight: 100,
            cloudSpace: 30,
            cloudArch: 50,
            renewCheck: 10,
            splashBounce: 80
        }

        this.tickCount = 0
        this.rain = []
        this.leafs = []
        this.snow = []

        // 👁 watch for window resize
        window.addEventListener('resize', this.onResize.bind(this))
    }

    init(current) {
        this.onResize()

        // 🖱 bind weather menu buttons

        const _this = this
        for (let i = 0; i < this.weather.length; i++) {
            const w = this.weather[i]
            const b = document.querySelector('#button-' + w.type)
            if (b) {
                w.button = b
                ;(function(w) {
                    b.removeEventListener('click', (e) => _this.changeWeather(w, e))
                    b.addEventListener('click', (e) => _this.changeWeather(w, e))
                })(w)
            }
        }

        // ☁️ draw clouds
        for (let j = 0; j < this.clouds.length; j++) {
            this.clouds[j].offset = Math.random() * this.sizes.card.width
            this.drawCloud(this.clouds[j], j)
        }

        // ☀️ set initial weather

        TweenMax.set(this.sunburst.node, { opacity: 0 })
        this.changeWeather(current)

        // 🏃 start animations

        this.startFrame()
    }

    onResize() {
        // 📏 grab window and card sizes
        this.sizes.container = {
            width: document.body.scrollWidth,
            height: document.body.scrollHeight
        }
        this.sizes.card = {
            width: this.card.offsetWidth,
            height: this.card.offsetHeight,
            offset: {
                top: this.card.offsetTop,
                left: this.card.offsetLeft
            }
        }
        // 📐 update svg sizes

        this.innerSVG?.attr({
            width: this.sizes.card.width,
            height: this.sizes.card.height
        })

        this.outerSVG?.attr({
            width: this.sizes.container.width,
            height: this.sizes.container.height
        })

        this.backSVG?.attr({
            width: this.sizes.container.width,
            height: this.sizes.container.height
        })

        TweenMax.set(this.sunburst.node, {
            transformOrigin: '50% 50%',
            x: this.sizes.container.width / 2,
            y: this.sizes.card.height / 2 + this.sizes.card.offset.top
        })
        TweenMax.fromTo(this.sunburst.node, 20, { rotation: 0 }, { rotation: 360, repeat: -1, ease: Power0.easeInOut })
        // 🍃 The leaf mask is for the leafs that float out of the
        // container, it is full window height and starts on the left
        // inline with the card

        this.leafMask.attr({
            x: this.sizes.card.offset.left,
            y: 0,
            width: this.sizes.container.width - this.sizes.card.offset.left,
            height: this.sizes.container.height
        })
    }

    drawCloud(cloud, i) {
        /*
            ☁️ We want to create a shape thats loopable but that can also
            be animated in and out. So we use Snap SVG to draw a shape
            with 4 sections. The 2 ends and 2 arches the same width as
            the card. So the final shape is about 4 x the width of the
            card.
        */

        const space = this.settings.cloudSpace * i
        const height = space + this.settings.cloudHeight
        const arch = height + this.settings.cloudArch + Math.random() * this.settings.cloudArch
        const width = this.sizes.card.width

        const points = []
        points.push('M' + [-width, 0].join(','))
        points.push([width, 0].join(','))
        points.push('Q' + [width * 2, height / 2].join(','))
        points.push([width, height].join(','))
        points.push('Q' + [width * 0.5, arch].join(','))
        points.push([0, height].join(','))
        points.push('Q' + [width * -0.5, arch].join(','))
        points.push([-width, height].join(','))
        points.push('Q' + [-(width * 2), height / 2].join(','))
        points.push([-width, 0].join(','))

        const path = points.join(' ')
        if (!cloud.path) cloud.path = cloud.group.path()
        cloud.path.animate(
            {
                d: path
            },
            0
        )
    }

    makeRain() {
        // 💧 This is where we draw one drop of rain

        // first we set the line width of the line, we use this
        // to dictate which svg group it'll be added to and
        // whether it'll generate a splash

        const lineWidth = Math.random() * 3

        // ⛈ line length is made longer for stormy weather

        const lineLength = this.currentWeather.type === 'thunder' ? 35 : 14

        // Start the drop at a random point at the top but leaving
        // a 20px margin

        const x = Math.random() * (this.sizes.card.width - 40) + 20

        // Draw the line

        const linerRainHolderMap = {
            1: this.innerRainHolder1,
            2: this.innerRainHolder2,
            3: this.innerRainHolder3
        }

        const line = linerRainHolderMap[3 - Math.floor(lineWidth)].path('M0,0 0,' + lineLength).attr({
            fill: 'none',
            stroke: this.currentWeather.type === 'thunder' ? '#777' : '#0000ff',
            strokeWidth: lineWidth
        })

        // add the line to an array to we can keep track of how
        // many there are.

        this.rain.push(line)

        // Start the falling animation, calls onRainEnd when the
        // animation finishes.

        TweenMax.fromTo(
            line.node,
            1,
            { x: x, y: 0 - lineLength },
            {
                delay: Math.random(),
                y: this.sizes.card.height,
                ease: Power2.easeIn,
                onComplete: this.onRainEnd.bind(this),
                onCompleteParams: [line, lineWidth, x, this.currentWeather.type]
            }
        )
    }

    onRainEnd(line, width, x, type) {
        // first lets get rid of the drop of rain 💧

        line.remove()
        line = null

        // We also remove it from the array

        for (const i in this.rain) {
            if (!this.rain[i].paper) this.rain.splice(i, 1)
        }

        // If there is less rain than the rainCount we should
        // make more.

        if (this.rain.length < this.settings.rainCount) {
            this.makeRain()

            // 💦 If the line width was more than 2 we also create a
            // splash. This way it looks like the closer (bigger)
            // drops hit the the edge of the card

            if (width > 2) this.makeSplash(x, type)
        }
    }

    makeSplash(x, type) {
        // 💦 The splash is a single line added to the outer svg.

        // The splashLength is how long the animated line will be
        const splashLength = type === 'thunder' ? 30 : 20

        // splashBounce is the max height the line will curve up
        // before falling
        const splashBounce = type === 'thunder' ? 120 : 100

        // this sets how far down the line can fall
        const splashDistance = 80

        // because the storm rain is longer we want the animation
        // to last slighly longer so the overall speed is roughly
        // the same for both
        const speed = type === 'thunder' ? 0.7 : 0.5

        // Set a random splash up amount based on the max splash bounce
        const splashUp = 0 - Math.random() * splashBounce

        // Sets the end x position, and in turn defines the splash direction
        const randomX = Math.random() * splashDistance - splashDistance / 2

        // Now we put the 3 line coordinates into an array.

        const points = []
        points.push('M' + 0 + ',' + 0)
        points.push('Q' + randomX + ',' + splashUp)
        points.push(randomX * 2 + ',' + splashDistance)

        // Draw the line with Snap SVG

        const splash = this.outerSplashHolder.path(points.join(' ')).attr({
            fill: 'none',
            stroke: type === 'thunder' ? '#777' : '#0000ff',
            strokeWidth: 1
        })

        // We animate the dasharray to have the line travel along the path

        const pathLength = Snap.path.getTotalLength(splash)
        const xOffset = this.sizes.card.offset.left //(sizes.container.width - sizes.card.width) / 2
        const yOffset = this.sizes.card.offset.top + this.sizes.card.height
        splash.node.style.strokeDasharray = splashLength + ' ' + pathLength

        // Start the splash animation, calling onSplashComplete when finished
        TweenMax.fromTo(
            splash.node,
            speed,
            { strokeWidth: 2, y: yOffset, x: xOffset + 20 + x, opacity: 1, strokeDashoffset: splashLength },
            {
                strokeWidth: 0,
                strokeDashoffset: -pathLength,
                opacity: 1,
                onComplete: this.onSplashComplete.bind(this),
                onCompleteParams: [splash],
                ease: SlowMo.ease.config(0.4, 0.1, false)
            }
        )
    }

    onSplashComplete(splash) {
        // 💦 The splash has finished animating, we need to get rid of it

        splash.remove()
        splash = null
    }

    makeLeaf() {
        const scale = 0.5 + Math.random() * 0.5
        let newLeaf

        const areaY = this.sizes.card.height / 2
        let y = areaY + Math.random() * areaY
        let endY = y - (Math.random() * (areaY * 2) - areaY)
        let x
        let endX
        const colors = ['#76993E', '#4A5E23', '#6D632F']
        const color = colors[Math.floor(Math.random() * colors.length)]
        let xBezier

        if (scale > 0.8) {
            newLeaf = this.leaf.clone().appendTo(this.outerLeafHolder).attr({
                fill: color
            })
            y = y + this.sizes.card.offset.top / 2
            endY = endY + this.sizes.card.offset.top / 2

            x = this.sizes.card.offset.left - 100
            xBezier = x + (this.sizes.container.width - this.sizes.card.offset.left) / 2
            endX = this.sizes.container.width + 50
        } else {
            newLeaf = this.leaf.clone().appendTo(this.innerLeafHolder).attr({
                fill: color
            })
            x = -100
            xBezier = this.sizes.card.width / 2
            endX = this.sizes.card.width + 50
        }

        this.leafs.push(newLeaf)

        const bezier = [
            { x: x, y: y },
            { x: xBezier, y: Math.random() * endY + endY / 3 },
            { x: endX, y: endY }
        ]
        TweenMax.fromTo(
            newLeaf.node,
            2,
            { rotation: Math.random() * 180, x: x, y: y, scale: scale },
            {
                rotation: Math.random() * 360,
                bezier: bezier,
                onComplete: this.onLeafEnd.bind(this),
                onCompleteParams: [newLeaf],
                ease: Power0.easeIn
            }
        )
    }

    onLeafEnd(leaf) {
        leaf.remove()
        leaf = null

        for (const i in this.leafs) {
            if (!this.leafs[i].paper) this.leafs.splice(i, 1)
        }

        if (this.leafs.length < this.settings.leafCount) {
            this.makeLeaf()
        }
    }

    makeSnow() {
        const scale = 0.5 + Math.random() * 0.5
        let newSnow

        let x = 20 + Math.random() * (this.sizes.card.width - 40)
        let y = -10
        let endY

        if (scale > 0.8) {
            newSnow = this.outerSnowHolder.circle(0, 0, 5).attr({
                fill: 'white'
            })
            endY = this.sizes.container.height + 10
            y = this.sizes.card.offset.top + this.settings.cloudHeight
            x = x + this.sizes.card.offset.left
        } else {
            newSnow = this.innerSnowHolder.circle(0, 0, 5).attr({
                fill: 'white'
            })
            endY = this.sizes.card.height + 10
        }

        this.snow.push(newSnow)

        TweenMax.fromTo(
            newSnow.node,
            3 + Math.random() * 5,
            { x: x, y: y },
            { y: endY, onComplete: this.onSnowEnd.bind(this), onCompleteParams: [newSnow], ease: Power0.easeIn }
        )
        TweenMax.fromTo(newSnow.node, 1, { scale: 0 }, { scale: scale, ease: Power1.easeInOut })
        TweenMax.to(newSnow.node, 3, {
            x: x + (Math.random() * 150 - 75),
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut
        })
    }

    onSnowEnd(flake) {
        flake.remove()
        flake = null

        for (const i in this.snow) {
            if (!this.snow[i].paper) this.snow.splice(i, 1)
        }

        if (this.snow.length < this.settings.snowCount) {
            this.makeSnow()
        }
    }

    tick() {
        this.tickCount++
        const check = this.tickCount % this.settings.renewCheck

        if (check) {
            if (this.rain.length < this.settings.rainCount) this.makeRain()
            if (this.leafs.length < this.settings.leafCount) this.makeLeaf()
            if (this.snow.length < this.settings.snowCount) this.makeSnow()
        }

        for (let i = 0; i < this.clouds.length; i++) {
            if (this.currentWeather.type === 'sun') {
                if (this.clouds[i].offset > -(this.sizes.card.width * 1.5)) this.clouds[i].offset += this.settings.windSpeed / (i + 1)
                if (this.clouds[i].offset > this.sizes.card.width * 2.5) this.clouds[i].offset = -(this.sizes.card.width * 1.5)
                this.clouds[i].group.transform('t' + this.clouds[i].offset + ',' + 0)
            } else {
                this.clouds[i].offset += this.settings.windSpeed / (i + 1)
                if (this.clouds[i].offset > this.sizes.card.width) this.clouds[i].offset = (this.clouds[i].offset - this.sizes.card.width)
                this.clouds[i].group.transform('t' + this.clouds[i].offset + ',' + 0)
            }
        }
        this.startFrame()
    }

    startFrame() {
        window.cancelAnimationFrame(this.frame)
        this.frame = requestAnimationFrame(this.tick.bind(this))
    }

    reset() {
        for (let i = 0; i < this.weather.length; i++) {
            this.container.classList.remove(this.weather[i].type)
            this.weather[i].button?.classList.remove('active')
        }
    }

    updateSummaryText() {
        this.summary.innerHTML = this.currentWeather.name
        TweenMax.fromTo(this.summary, 1.5, { x: 30 }, { opacity: 1, x: 0, ease: Power4.easeOut })
    }

    startLightningTimer() {
        if (this.lightningTimeout) clearTimeout(this.lightningTimeout)
        if (this.currentWeather.type === 'thunder') {
            this.lightningTimeout = setTimeout(this.lightning.bind(this), Math.random() * 6000)
        }
    }

    lightning() {
        this.startLightningTimer()
        TweenMax.fromTo(this.card, 0.75, { y: -30 }, { y: 0, ease: Elastic.easeOut })

        const pathX = 30 + Math.random() * (this.sizes.card.width - 60)
        const yOffset = 20
        const steps = 20
        const points = [pathX + ',0']
        for (let i = 0; i < steps; i++) {
            const x = pathX + (Math.random() * yOffset - yOffset / 2)
            const y = (this.sizes.card.height / steps) * (i + 1)
            points.push(x + ',' + y)
        }

        let strike = this.weatherContainer1.path('M' + points.join(' ')).attr({
            fill: 'none',
            stroke: 'white',
            strokeWidth: 2 + Math.random()
        })

        TweenMax.to(strike.node, 1, {
            opacity: 0,
            ease: Power4.easeOut,
            onComplete: function() {
                strike.remove()
                strike = null
            }
        })
    }

    changeWeather(weather) {
        if (weather.data) weather = weather.data
        this.reset()

        this.currentWeather = weather

        TweenMax.killTweensOf(this.summary)
        TweenMax.to(this.summary, 1, {
            opacity: 0,
            x: -30,
            onComplete: this.updateSummaryText.bind(this),
            ease: Power4.easeIn
        })

        this.container.classList.add(weather.type)
        weather.button?.classList.add('active')

        // windSpeed

        switch (weather.type) {
            case 'wind':
                TweenMax.to(this.settings, 3, { windSpeed: 3, ease: Power2.easeInOut })
                break
            case 'sun':
                TweenMax.to(this.settings, 3, { windSpeed: 20, ease: Power2.easeInOut })
                break
            default:
                TweenMax.to(this.settings, 3, { windSpeed: 0.5, ease: Power2.easeOut })
                break
        }

        // rainCount

        switch (weather.type) {
            case 'rain':
                TweenMax.to(this.settings, 3, { rainCount: 10, ease: Power2.easeInOut })
                break
            case 'thunder':
                TweenMax.to(this.settings, 3, { rainCount: 60, ease: Power2.easeInOut })
                break
            default:
                TweenMax.to(this.settings, 1, { rainCount: 0, ease: Power2.easeOut })
                break
        }

        // leafCount

        switch (weather.type) {
            case 'wind':
                TweenMax.to(this.settings, 3, { leafCount: 5, ease: Power2.easeInOut })
                break
            default:
                TweenMax.to(this.settings, 1, { leafCount: 0, ease: Power2.easeOut })
                break
        }

        // snowCount

        switch (weather.type) {
            case 'snow':
                TweenMax.to(this.settings, 3, { snowCount: 40, ease: Power2.easeInOut })
                break
            default:
                TweenMax.to(this.settings, 1, { snowCount: 0, ease: Power2.easeOut })
                break
        }

        // sun position

        switch (weather.type) {
            case 'sun':
                TweenMax.to(this.sun.node, 4, {
                    x: this.sizes.card.width / 2,
                    y: this.sizes.card.height / 2,
                    ease: Power2.easeInOut
                })
                TweenMax.to(this.sunburst.node, 4, {
                    scale: 1,
                    opacity: 0.8,
                    y: this.sizes.card.height / 2 + this.sizes.card.offset.top,
                    ease: Power2.easeInOut
                })
                break
            default:
                TweenMax.to(this.sun.node, 2, {
                    x: this.sizes.card.width / 2,
                    y: -100,
                    leafCount: 0,
                    ease: Power2.easeInOut
                })
                TweenMax.to(this.sunburst.node, 2, {
                    scale: 0.4,
                    opacity: 0,
                    y: this.sizes.container.height / 2 - 50,
                    ease: Power2.easeInOut
                })
                break
        }

        // lightning

        this.startLightningTimer()
    }

    destroy() {
        // this.innerSVG = null
        // this.outerSVG = null
        // this.backSVG = null
        // this.weatherContainer1 = null
        // this.weatherContainer2 = null
        // this.weatherContainer3 = null
        // this.leaf = null
        // this.sun = null
        // this.sunburst = null
    }
}
