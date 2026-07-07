---
title: "利用github实现App检查更新功能"
date: 2019-11-27 10:43:15
tags:
- "github"
---

<h2 id="前言"><a href="#前言" class="headerlink" title="前言"></a>前言</h2><p>近期想实现一个检测应用更新情况的需求, 但是我并没有后台服务器啊。最后想到了用github来实现, github上能存放各种文件, 用起来简单方便, 用来做一个超级简单的静态后台最适合不过。 </p>
<h2 id="实现思路"><a href="#实现思路" class="headerlink" title="实现思路"></a>实现思路</h2><!-- more -->
<p>Android studio打包App时会同时生成apk打包相关信息json文件, 默认名字为output.json, 把这个文件放到github上然后请求这个文件的文本数据就能得到apk的信息了</p>
<h2 id="步骤"><a href="#步骤" class="headerlink" title="步骤"></a>步骤</h2><ol>
<li>把文件上传的github上, 这里要使用到git, 具体的操作可以自行搜索。上传后找到你的文件,如图<br><img src="/asset/blogImg/%E5%88%A9%E7%94%A8github%E5%AE%9E%E7%8E%B0App%E6%A3%80%E6%9F%A5%E6%9B%B4%E6%96%B0%E5%8A%9F%E8%83%BD_1.png" alt="01"></li>
<li>点开文件, 我们可以看到文件的内容, 但请求这个路径只会返回html, 我们需要的是纯文本数据, 这里只要点击RAW按钮github就会跳到一个新网址, 然后就看到文件的文本数据啦, 请求这个url就会返回文本数据了<br><img src="/asset/blogImg/%E5%88%A9%E7%94%A8github%E5%AE%9E%E7%8E%B0App%E6%A3%80%E6%9F%A5%E6%9B%B4%E6%96%B0%E5%8A%9F%E8%83%BD_2.png" alt="02"><br><img src="/asset/blogImg/%E5%88%A9%E7%94%A8github%E5%AE%9E%E7%8E%B0App%E6%A3%80%E6%9F%A5%E6%9B%B4%E6%96%B0%E5%8A%9F%E8%83%BD_3.png" alt="03">  </li>
</ol>
<h2 id="提示"><a href="#提示" class="headerlink" title="提示"></a>提示</h2><p>github在国内访问比较慢, 可以使用码云, 码云的操作跟github大同小异。</p>
