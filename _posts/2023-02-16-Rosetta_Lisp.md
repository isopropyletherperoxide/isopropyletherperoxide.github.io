---
title: Rosetta Lisp 
author: me :3
image: 
layout: post
subtitle: Comparing the syntax of Lisp-family languages 
twittercard: summary_large_image

---


<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/languages/clojure.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/languages/scheme.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/languages/lisp.min.js"></script>

This is a syntax comparison of Lisp-like languages (Clojure, Common Lisp, Scheme (Racket) and possibly more in the future)

**VERY UNFINISHED, will be updated gradually as I go through learning Lisp and its derivatives**

### Defining a Function

<div id="codeblock-table">
<div class="codeblock-div">
  <h4 class="header-in-codeblock">Clojure</h4>
<pre class="codeblock">
<code class="language-clojure">(defn double
   [x]
   (/ x 2)) 
</code> 
</pre> 
</div>

<div class="codeblock-div">
  <h4 class="header-in-codeblock">Common Lisp</h4>
<pre class="codeblock">
<code class="language-lisp">(defun half (x)
   (/ x 2))
</code>
</pre>
</div>

<div class="codeblock-div">
  <h4 class="header-in-codeblock">Scheme</h4>
<pre class="codeblock">
<code class="language-scheme">(define (half x)
   (/ x 2))
</code>
</pre>
</div>
</div>

### Lambdas 

<div id="codeblock-table">
<div class="codeblock-div">
  <h4 class="header-in-codeblock">Clojure</h4>
<pre class="codeblock">
<code class="language-clojure">(fn [x]
   (/ x 2)) 
</code> 
</pre> 
</div>


<div class="codeblock-div">
  <h4 class="header-in-codeblock">Clojure (Alternative)</h4>
<pre class="codeblock">
<code class="language-clojure">#(/ % 2) 
</code> 
</pre> 
</div>

<div class="codeblock-div">
  <h4 class="header-in-codeblock">Common Lisp</h4>
<pre class="codeblock">
<code class="language-lisp">(lambda (x)
   (/ x 2))
</code>
</pre>
</div>

<div class="codeblock-div">
  <h4 class="header-in-codeblock">Scheme</h4>
<pre class="codeblock">
<code class="language-scheme">(lambda (x)
   (/ x 2))
</code>
</pre>
</div>
</div>
