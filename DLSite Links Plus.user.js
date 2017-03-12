// ==UserScript==
// @name        DLSite Links+
// @namespace   Loli-A-Best
// @include     *://boards.4chan.org/vg/thread/*
// @include     *://boards.4chan.org/h/thread/*
// @version     1.0
// @description Provide links from RJ, RE, VJ, DMM, VG and RG codes
// @icon        data:image/png;base64,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
// @grant       none
// ==/UserScript==
(() => {
    'use strict'
    const d = document
    const DMMCode = /(?:(?:dmm|www|https?)[^>\s]+)?(?:cid=)?(?:d_|DMM)(\d{6})/gi
    const RJCode = /((?:(?:dlsite|www|http|maniax)[^>\s]+)?[rv][je]((\d{3})\d{3})(?:\.html)?)/gi
    const RGBlog = /(http:\/\/\S*b\.dlsite\.net\/(?:rg\d{5}\/)?archives\/\d{3,8}\.html)/gi
    const RGCirc = /(?:(?:http|www)?\S*com\S*|^|\s)[rv]g(\d{5})(?:\.html)?/gi
    const thread = d.querySelector('.thread')
    const games = []
    let previewBar = localStorage.getItem('hgg2d previewbar')

    const fourchanxLinkifyRegex = /((https?|mailto|git|magnet|ftp|irc):([a-z\d%\/?])|([-a-z\d]+[.])+(aero|asia|biz|cat|com|coop|dance|info|int|jobs|mobi|moe|museum|name|net|org|post|pro|tel|travel|xxx|xyz|edu|gov|mil|[a-z]{2})([:\/]|(?![^\s"]))|[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}|[-\w\d.@]+@[a-z\d.-]+\.[a-z\d])/gi
    let linkify = false

    // Check every post for if the linkify setting is toggled on shortcircuiting
    // when a definitive answer is found, else repeating
    const checkForLinkify = () => {
        linkify = !!thread.querySelector('.linkify')
        if (linkify) return
        const posts = Array.from(thread.querySelectorAll('.postMessage'))
        for (let i = 0; i < posts.length; i++) {
            if (fourchanxLinkifyRegex.test(posts[i].textContent) && !!posts[i].querySelector('.linkify')) {
                linkify = false
                return
            }
        }
        if (!linkify) setTimeout(checkForLinkify, 3000)
    }

    // Reached threshold of saving lines by adding in a generic method
    const createAnch = (text) => {
        const anch = d.createElement('a')
        anch.rel = 'noreferrer'
        anch.target = '_blank'
        anch.textContent = text
        return anch
    }

    // createX functions are called with the element, followed by each of its regex capture groups
    const createBlog = (el, match) => {
        const anch = createAnch(match)
        anch.href = match
        return anch
    }

    const createCirc = (el, match, code) => {
        const anch = createAnch(match)
        anch.href = (match.includes('RG'))
            ? 'http://www.dlsite.com/maniax/circle/profile/=/maker_id/RG' + code
            : 'http://www.dlsite.com/pro/circle/profile/=/maker_id/VG' + code
        return anch
    }

    const createDMM = (el, match, code) => {
        const anch = createAnch(match)
        anch.href = 'http://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_' + code
        anch.classList.add('lewds')
        if (games.indexOf('DMM' + code) === -1) {
            games.push('DMM' + code)
            const text = d.createTextNode('DMM' + code)
            const node = anch.cloneNode()
            node.appendChild(text)
            content.appendChild(node)
        }
        return anch
    }

    const createRJ = (el, match, text, code) => {
        const anch = createAnch(text)
        const pattern = 'http://www.dlsite.com/{0}/{1}/=/product_id/{2}{3}'
        let circleType = []
        let workType = ''
        if (text.includes('announce'))
            workType = 'announce'
        else
            workType = 'work'
        if (text.includes('VJ'))
            circleType.push('pro', 'VJ')
        else
            circleType.push('maniax', 'RJ')
        anch.href = pattern.format(circleType[0], workType, circleType[1], code)
        anch.classList.add('lewds')
        if (games.indexOf(circleType[1] + code) === -1) {
            games.push(circleType[1] + code)
            const text = d.createTextNode(circleType[1] + code)
            const node = anch.cloneNode()
            node.appendChild(text)
            content.appendChild(node)
        }
        return anch
    }

    const hover = (e) => {
        const t = e.target.classList.contains('lewds') ? e.target : undefined
        if (t === undefined) return
        const pattern = 'http://img.dlsite.jp/modpub/images2/{0}/{1}/{2}{3}000/{2}{4}{5}_img_main.jpg'
        const rect = e.target.getBoundingClientRect()
        // announce or work
        let pageType = []
        // doujin or pro
        let circleType = []
        if (e.target.href.includes('dlsite')) {
            const code = e.target.href.split('/product_id/')[1].substr(2, 6)
            if (e.target.href.includes('announce'))
                pageType.push('ana', '_ana')
            else
                pageType.push('work', '')
            if (e.target.href.includes('VJ'))
                circleType.push('professional', 'VJ')
            else
                circleType.push('doujin', 'RJ')
            prev.src = pattern.format(pageType[0], circleType[0], circleType[1], padLeft(parseInt(code.substr(0, 3)) + 1, 3), code, pageType[1])
        } else if (e.target.href.includes('dmm.co')) {
            const code = e.target.href.split('cid=')[1].substr(0, 8)
            prev.src = 'http://pics.dmm.co.jp/digital/game/' + code + '/' + code + 'pr.jpg'
        }
        prev.style.visibility = ''
        prev.style.top = ((window.innerHeight - rect.top < 420) ? window.innerHeight - 435 : rect.top - 15) + 'px'
        prev.style.left = ((window.innerWidth - rect.left < 560) ? rect.left - 565 : rect.right + 5) + 'px'

    }

    // Alexander Dickson's replace text function with minor changes
    const matchText = function (node, regex, callback, excludeElements) {
        excludeElements = excludeElements || ['a']
        var child = node.firstChild || -1
        while (child) {
            switch (child.nodeType) {
                case 1:
                    if (excludeElements.includes(child.tagName.toLowerCase()))
                        break
                    matchText(child, regex, callback, excludeElements)
                    break
                case 3:
                    let bk = 0
                    child.data.replace(regex, function (all) {
                        let args = [...arguments],
                            offset = args[args.length - 2],
                            newTextNode = child.splitText(offset + bk),
                            tag
                        bk -= child.data.length + all.length
                        newTextNode.data = newTextNode.data.substr(all.length)
                        tag = callback.apply(window, [child].concat(args))
                        child.parentNode.insertBefore(tag, newTextNode)
                        child = newTextNode
                    })
                    regex.lastIndex = 0
                    break
            }
            child = child.nextSibling
        }
        return node
    }

    // Hide and unload src to prevent it looking like two codes are the same game until the new image loads.
    const out = (e) => {
        const t = e.target.classList.contains('lewds') ? e.target : undefined
        if (t === undefined) return
        prev.style.visibility = 'hidden'
        prev.src = ''
    }

    // Cached padLeft because input will always be 0-2 characters in our use case
    const padLeft = (str, len) => {
        const cache = [
            '',
            '0',
            '00'
        ]
        // ensure str is string
        str = String(str)
        len = len - str.length
        return cache[len] + str
    }
    
    const setPreviewBar = () => {
        if (localStorage.getItem('hgg2d previewbar') === 'true') {
            container.style.visibility = ''
            toggle.textContent = 'Previewbar Off'
        }
        else {
            container.style.visibility = 'hidden'
            toggle.textContent = 'Previewbar On'
        }
    }

    const togglePreviewBar = e => {
        localStorage.setItem('hgg2d previewbar', !(localStorage.getItem('hgg2d previewbar') === 'true'))
        setPreviewBar()
    }

    const work = el => {
        // <wbr>s get in the way with little benefit, easier to work with if simply removed
        Array.from(el.querySelectorAll('wbr')).forEach(t => {
            const parent = t.parentNode
            parent.removeChild(t)
            parent.normalize()
        })

        matchText(el, DMMCode, createDMM)
        matchText(el, RJCode, createRJ)
        matchText(el, RGBlog, createBlog)
        matchText(el, RGCirc, createCirc)

        if (linkify) Array.from(el.querySelectorAll('.linkify:not(lewds)')).forEach(link => link.classList.add('lewds'))
    }

    if (!String.prototype.format) {
        String.prototype.format = function () {
            const args = arguments
            return this.replace(/{(\d+)}/g, (match, number) => {
                return typeof args[number] != 'undefined'
                    ? args[number]
                    : match
            })
        }
    }

    new MutationObserver(function (mutations) {
        const posts = []
        // If someone wants to show me some meme magic on how to map/reduce this
        // I would be more than happy to accept the Pull request
        // Looks aids because it has to play nice with 4chan-X which separates
        // every post insertion into separate mutation events, and also creates 
        // two mutation events every time you come back to or leave the tab
        for (let i = 0; i < mutations.length; i++) {
            if (mutations[i].addedNodes.length > 0) {
                for (let x = 0; x < mutations[i].addedNodes.length; x++) {
                    if (mutations[i].addedNodes[x].tagName === 'DIV') {
                        posts.push(mutations[i].addedNodes[x].lastElementChild.lastElementChild)
                    }
                }
            }
        }
        posts.forEach(post => work(post))
    }).observe(d.querySelector('.thread'), {
        childList: true,
        attributes: true
    })

    // HTML Area
    const prev = d.createElement('img')
    prev.setAttribute('id', 'preview')
    prev.setAttribute('style', 'visibility: hidden;')
    prev.onerror = () => { prev.style.visibility = 'hidden' }
    d.body.appendChild(prev)

    const container = d.createElement('div')
    container.classList.add('previewBar')
    d.body.appendChild(container)

    const content = d.createElement('div')
    container.appendChild(content)

    const toggle = d.createElement('a')
    toggle.setAttribute('href', 'javascript:;')
    toggle.classList.add('brackets-wrap', 'previewBarToggle')
    toggle.appendChild(d.createTextNode('toggle'))
    d.querySelector('.navLinksBot').appendChild(toggle)

    const hgg2dCSS = ('' +
        '#preview { display: block; position: fixed; top: 0; padding: 0; margin: 0;}\n' +
        '.previewBar { position: fixed; right: 3em; width: 6em; bottom: 9em; z-index: 6; padding: 0; margin: 0; max-height: 35%; overflow-y: scroll;}\n' +
        '.previewBar > div { padding: 0; margin: 0; width: 100%; }\n' +
        '.previewBar > div > a { float: right }\n' +
        '.previewBarToggle { float: right; }')
    const style = d.createElement('style')
    style.appendChild(d.createTextNode(hgg2dCSS))
    d.head.appendChild(style)
    
    // Events Area
    d.body.addEventListener('mouseover', hover, false)
    d.body.addEventListener('mouseout', out, false)
    toggle.addEventListener('click', togglePreviewBar, false)

    // With all settings removed, and additional extensions installed, 4chan-X
    // will add the 'fourchan-x' class to the documentElement.
    setTimeout(() => {
        if (d.documentElement.classList.contains('fourchan-x')) checkForLinkify()
    }, 500)
    setPreviewBar()
    Array.from(d.querySelectorAll('.postMessage')).forEach(el => work(el))
}).call(this)
