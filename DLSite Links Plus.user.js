// ==UserScript==
// @name        DLSite Links+
// @namespace   Loli-A-Best
// @include     *://boards.4chan.org/vg/thread/*
// @include     *://boards.4chan.org/h/thread/*
// @version     0.86
// @description Provide links from RJ, RE, and RG codes
// @icon        data:image/png;base64,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
// @grant       none
// ==/UserScript==
(() => {
    'use strict'
    let d = document
    let DMMCode = /(?:(?:dmm|www|https?)[^>\s]+)?(?:cid=)?(d_\d{6})/gi
    let RJCode = /((?:(?:dlsite|www|http|maniax)[^>\s]+)?[rv][je]((\d{3})\d{3})(?:\.html)?)/gi
    let RGBlog = /(?:http)\S*?b\S*rg(\d{5})([A-Za-z0-9-._~:/?#@!$&'()*+,;=`]*\.html)?/gi
    let RGCirc = /(?:(?:http|www)?\S*com\S*|^|\s)[rv]g(\d{5})(?:\.html)?/gi

    let chanX = el => {
        el.classList.add('lewds')
    }

    // Reached threshold of saving lines by adding in a generic method
    let createAnch = (text) => {
        let anch = d.createElement('a')
        anch.rel = 'noreferrer'
        anch.target = '_blank'
        anch.textContent = text
        return anch
    }

    // createX functions are called with the element, followed by each of its regex capture groups
    let createBlog = (el, match, code, path) => {
        let anch = createAnch(match)
        anch.href = 'http://b.dlsite.net/RG' + code + (path || '')
        return anch
    }

    let createCirc = (el, match, code) => {
        let anch = createAnch(match)
        anch.href = (match.includes('RG'))
        ? 'http://www.dlsite.com/maniax/circle/profile/=/maker_id/RG' + code + '.html'
        : 'http://www.dlsite.com/pro/circle/profile/=/maker_id/VG' + code + '.html'
        return anch
    }

    let createDMM = (el, match, code) => {
        let anch = createAnch(match)
        anch.href = 'http://www.dmm.co.jp/dc/doujin/-/detail/=/cid=' + code
        anch.classList.add('lewds')
        return anch
    }

    let createRJ = (el, match, text, code) => {
        let anch = createAnch(text)
        if (text.includes('VJ')) {
            anch.href = ('http://www.dlsite.com/pro/work/=/product_id/VJ' + code + '.html')
        } else if (text.includes('announce')) {
            anch.href = ('http://www.dlsite.com/maniax/announce/=/product_id/RJ' + code + '.html')
        } else {
            anch.href = ('http://www.dlsite.com/maniax/work/=/product_id/RJ' + code + '.html')
        }
        anch.classList.add('lewds')
        return anch
    }

    let hover = (e) => {
        let t = e.target.classList.contains('lewds') ? e.target : undefined
        if (t === undefined) return
        let rect = e.target.getBoundingClientRect()
        if (e.target.href.includes('dlsite')) {
            let code = e.target.href.split('/product_id/')[1].substr(2,6)
            if (e.target.href.includes('announce')) {
                prev.src = 'http://img.dlsite.jp/modpub/images2/ana/doujin/RJ' + padLeft(parseInt(code.substr(0, 3)) + 1, 3) + '000/RJ' + code + '_ana_img_main.jpg'
            } else if (e.target.href.includes('VJ')) {
                prev.src = 'http://img.dlsite.jp/modpub/images2/work/professional/VJ' + padLeft(parseInt(code.substr(0, 3)) + 1, 3) + '000/VJ' + code + '_img_main.jpg'
            } else {
                prev.src = 'http://img.dlsite.jp/modpub/images2/work/doujin/RJ' + padLeft(parseInt(code.substr(0, 3)) + 1, 3) + '000/RJ' + code + '_img_main.jpg'
            }
        } else if (e.target.href.includes('dmm.co')) {
            let code = e.target.href.split('cid=')[1].substr(0, 8)
            prev.src = 'http://pics.dmm.co.jp/digital/game/'+code+'/'+code+'pr.jpg'
        }
        prev.style.visibility = ''
        prev.style.top = ((window.innerHeight - rect.top < 420) ? window.innerHeight - 435 : rect.top - 15) + 'px'
        prev.style.left = rect.right + 5 + 'px'
    }

    // My implementation of waitForKeyElements
    let mark = (selector, dispatch) => {
        let posts = [...d.querySelectorAll(selector + ':not(.marked)')]
        posts.map(p => p.attributes.class.value += ' marked')
        posts.map(dispatch)
    }
    // Alexander Dickson's replace text function with minor changes
    let matchText = function (node, regex, callback, excludeElements) {
        excludeElements = excludeElements || ['a', 'script', 'iframe', 'style']
        var child = node.firstChild || -1
        while (child) {
            switch (child.nodeType) {
                case 1:
                    if (excludeElements.includes(child.tagName.toLowerCase()))
                        break
                    matchText(child, regex, callback, excludeElements)
                    break
                case 3:
                    var bk = 0
                    child.data.replace(regex, function (all) {
                        var args = [...arguments],
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
    let out = (e) => {
        let t = e.target.classList.contains('lewds') ? e.target : undefined
        if (t === undefined) return
        prev.style.visibility = 'hidden'
        prev.src = ''
    }

    // Cached padLeft because input will always be 0-2 characters in our use case
    let padLeft = (str, len) => {
        let cache = [
            '',
            '0',
            '00'
        ]
        // ensure str is string
        str = String(str)
        len = len - str.length
        return cache[len] + str
    }

    let work = el => {
        // <wbr>s get in the way with little benefit, easier to work with if simply removed
        [].map.call(el.querySelectorAll('wbr'), t => {
            let parent = t.parentNode
            parent.removeChild(t)
            parent.normalize()
        })

        matchText(el, DMMCode, createDMM)
        matchText(el, RJCode, createRJ)
        matchText(el, RGBlog, createBlog)
        matchText(el, RGCirc, createCirc)
    }

    let prev = d.createElement('img')
    prev.setAttribute('id', 'preview')
    prev.setAttribute('style', 'display: block; position: fixed; top: 0; padding: 0; margin: 0; visibility: hidden')
    prev.onerror = () => { prev.style.visibility = 'hidden' }
    d.body.appendChild(prev)

    d.querySelector('#delform').addEventListener('mouseover', hover, false)
    d.querySelector('#delform').addEventListener('mouseout', out, false)
    d.querySelector('meta[name="referrer"]').content = 'no-referrer'
    setInterval(() => { mark('.postMessage', work) }, 300)
    // Cleanest way I know to detect if 4chanX or other is linkifying regardless of script load order
    setTimeout(() => {
        if (!!d.querySelector('.linkify')) {
            setInterval(() => { mark('.linkify[href*="/=/"]', chanX) }, 300)
        }
    }, 2500)
    
}).call(this)
