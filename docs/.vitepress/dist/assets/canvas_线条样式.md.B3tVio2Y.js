import{_ as t,c as e,o as r,a8 as o}from"./chunks/framework.Uk78KS4B.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"canvas/线条样式.md","filePath":"canvas/线条样式.md"}'),i={name:"canvas/线条样式.md"},a=o('<h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><h4 id="_1-linecap" tabindex="-1">1. lineCap <a class="header-anchor" href="#_1-linecap" aria-label="Permalink to &quot;1. lineCap&quot;">​</a></h4><p><strong>作用</strong>：设置或返回线条的结束端点样式</p><p>&quot;round&quot; 和 &quot;square&quot; 会使线条略微变长</p><p><strong>默认值</strong>：butt</p><p><strong>JavaScript 语法</strong>：<code>context.lineCap = &quot;butt | round | square&quot;</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>butt</td><td>默认。向线条的每个末端添加平直的边缘</td></tr><tr><td>round</td><td>向线条的每个末端添加圆形线帽</td></tr><tr><td>square</td><td>向线条的每个末端添加正方形线帽</td></tr></tbody></table><h4 id="_2-linejoin" tabindex="-1">2. lineJoin <a class="header-anchor" href="#_2-linejoin" aria-label="Permalink to &quot;2. lineJoin&quot;">​</a></h4><p><strong>作用</strong>：设置或返回两条线相交时，所创建的拐角类型</p><p><strong>注意</strong>：&quot;miter&quot; 值受 &quot;<a href="#_4-miterlimit">miterLimit</a>&quot; 属性的影响</p><p><strong>默认值</strong>：miter</p><p><strong>JavaScript 语法</strong>：<code>context.lineJoin=&quot;bevel|round|miter&quot;;</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>bevel</td><td>创建斜角</td></tr><tr><td>round</td><td>创建圆角</td></tr><tr><td>miter</td><td>默认。创建尖角</td></tr></tbody></table><h4 id="_3-linewidth" tabindex="-1">3. lineWidth <a class="header-anchor" href="#_3-linewidth" aria-label="Permalink to &quot;3. lineWidth&quot;">​</a></h4><p><strong>作用</strong>：设置或返回当前的线条宽度</p><p><strong>默认值</strong>：1</p><p><strong>JavaScript 语法</strong>：<code>context.lineWidth = number;</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>number</td><td>当前线条的宽度，以像素计</td></tr></tbody></table><h4 id="_4-miterlimit" tabindex="-1">4. miterLimit <a class="header-anchor" href="#_4-miterlimit" aria-label="Permalink to &quot;4. miterLimit&quot;">​</a></h4><p><strong>作用</strong>：设置或返回最大斜接长度</p><p>斜接长度指的是在两条线交汇处内角和外角之间的距离</p><p><strong>提示</strong>：只有当 lineJoin 属性为 &quot;miter&quot; 时， miterLimit 才有效。</p><p>边角的角度越小，斜接长度就会越大。</p><p>为了避免斜接长度过长，我们可以使用 miterLimit 属性。</p><p>如果斜接长度超过 miterLimit 的值，边角会以 lineJoin 的 &quot;bevel&quot; 类型来显示(Fig3)</p><p><img src="https://raw.githubusercontent.com/xuchp/typora-pics/main/canvas/img_miterlimitBevelFig.gif" alt="Miter Limit figure 2"></p><p><strong>默认值</strong>：10</p><p><strong>JavaScript 语法</strong>：<code>context.miterLimit = number;</code></p><p><strong>属性值</strong></p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>number</td><td>正数。规定最大斜接长度，如果斜接长度超过 miterLimit 的值，边角会以 lineJoin 的 &quot;bevel&quot; 类型来显示</td></tr></tbody></table>',33),n=[a];function d(s,p,l,h,c,m){return r(),e("div",null,n)}const _=t(i,[["render",d]]);export{g as __pageData,_ as default};
